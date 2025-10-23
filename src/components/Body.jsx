import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'

const Body = () => {
    
    const appRouter = createBrowserRouter([
        {
            path : '',
            element : <Login />
        },
        {
            path : '/browse',
            element : <Browse />
        }
    ])
  return (
    <div>
        <RouterProvider router = {appRouter} />
    </div>
  )
}

export default Body