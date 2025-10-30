import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Body from './components/Body.jsx'
import BookDetails from './components/BookDetails.jsx'
import BrowseBooks from './components/BrowseBooks.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/BookDetails/:id',
        element:<BookDetails/>
      },
      {
        path:'/book',
        element:<BrowseBooks/>
      }
    ]
  },
  
{
  path:'*',
  element:<ErrorPage/>
}
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}></RouterProvider>
)
