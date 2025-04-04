
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './Routers/PageRoute'


const App = () => {

  const router= createBrowserRouter(routes)

  return (
<RouterProvider router={router}/>

  )
}
export default App