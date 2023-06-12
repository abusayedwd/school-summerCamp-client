import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Route.jsx'
import AuthProvider from './Providers/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
     <AuthProvider>
     <HelmetProvider>
     <QueryClientProvider client={queryClient}>
     <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
     </QueryClientProvider>
     </HelmetProvider>
     </AuthProvider>
    
  </React.StrictMode>,
)
