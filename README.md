# Youtube App Clone 

## Routes: 
 - Index (main router --> entry point)
    - App - Root Page (contains outlet)
        - Pages
            - Videos -> "/"
            - SearchVideo -> "/videos/:keyword"
            - VideoDetail

## Navbar --> shared between all pages 

-  Search Bar --> search for content and links to Video using the `useNavigate` hook called from react router.
- Youtube button --> links back to main page.

## External Library --> React Router DOM: 
 - `createBrowserRouter` and `RouterProvider` defined in index.js 
 - `<Outlet>` defined in App.js 
 - we are fetching in the basis of value --> "keyword" using the `useParams` hook
 - when we navigate to video details page, we call the state that we want to pass on the second parameter. 
    ```js 
       navigate(`videos/watch/${videoInfo.eTag}`,{state:{videoInfo}})
      ```
- inside the video details page, we use the `useLocation` hook to extract the state that we passed from the `useNavigate` hook.
