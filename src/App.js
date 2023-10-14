import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import Videos from "./pages/Videos";
import Home from "./pages/Home";
import './App.css';
import VideoDetail from "./pages/VideoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage/>,
    errorElement: <div>Not Found</div>,
    children:[
        {index:true,element:<Home/>},
        {path:"videos",element:<Videos/>},
        {path:"videos/:videoId",element:<VideoDetail/>},
    ]
  },
]);

export default function App() {
  return <RouterProvider router={router}/>;
}

