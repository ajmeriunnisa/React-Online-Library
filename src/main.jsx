import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import BookDetails from './components/BookDetails.jsx'
import BrowseBooks from './components/BrowseBooks.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import CategoriesBooks from './components/CategoriesBooks.jsx'
import AddBook from './components/AddBook.jsx'

// ===== Application Routing Setup =====
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />  // Home Page (Landing Page)
      },
      {
        path: '/BookDetails/:id',
        element: <BookDetails backPath="/"/>  // Dynamic Book Details Page
      },
      {
        path: '/books',
        element: <BrowseBooks />  //BrowseBooks Page
      },
      {
        path:'/BrowseBookDetails/:id',
        element:<BookDetails backPath='/books'/>  // Dynamic Book Details Page
      },
      { path: "/books/:category",
         element: <CategoriesBooks />   // Browse filtered by category
      },  
      {
        path:"/AddBook",
        element:<AddBook/>
      }
    ]
  },

  {
    path: '*',
    element: <ErrorPage />  // Handles all undefined routes (404 Page)
  }
])


// ===== Rendering the App to the DOM =====
createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}></RouterProvider>
)
