import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import Videos from "./pages/Videos";
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage/>,
    errorElement: <div>Not Found</div>,
    children:[
        {index:true,element:<div>Home</div>},
        {path:"videos",element:<Videos/>},
        {path:"videos/:videoId",element:<div>video Detail</div>},
    ]
  },
]);

export default function App() {
  return <RouterProvider router={router}/>;
}

