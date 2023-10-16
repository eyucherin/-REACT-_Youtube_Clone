# Youtube App Clone 

## Routes: 
 - Index (main router --> entry point)
    - App - Root Page (contains outlet)
        - Pages
            - Videos
            - VideoDetail

## Navbar --> shared between all pages 

-  Search Bar --> search for content and links to VideoDetail
- Youtube button --> links back to main page

## External Library --> React Router DOM: 
 - `createBrowserRouter` and `RouterProvider` defined in index.js 
 - `<Outlet>` defined in App.js 
 - we are fetching in the basis of value --> "keyword" using the `useParams` hook
