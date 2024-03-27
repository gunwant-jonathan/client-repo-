import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Routeo from './Route.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About'
import Remedies from './components/Remedies/Remedies'
import Prediction from './components/Predictions/Prediction'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Routeo/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/Remedies",
        element:<Remedies/>
      },
      {
        path:"/Prediction",
        element:<Prediction/>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
