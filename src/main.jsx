import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import BookDetails from './components/BookDetails.jsx'
import BrowseBooks from './components/BrowseBooks.jsx'
import ErrorPage from './components/ErrorPage.jsx'

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
        element: <BookDetails />  // Dynamic Book Details Page
      },
      {
        path: '/book',
        element: <BrowseBooks />  //BrowseBooks Page
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
