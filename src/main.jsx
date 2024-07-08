import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
   
//   },
//   {
//     path: "/login",
//     element:<Login/>,
   
//   },
//   {
//     path: "/Signup",
//     element:<Signup/>,
   
//   },
//   {
//     path: "/student",
//     element: < Student_dashboard/>,
    
//   },
//   {
//     path: "/student/profile",
//     element: < Profile/>,
   
//   },
//   {
//     path: "/tutor",
//     element: <Tutor_dashboard/>,
   
//   },
//   {
//     path: "/tutor/profile",
//     element: <Tutor_Profile/>,
   
//   }
// ]);


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <App/>
    </BrowserRouter>
  </React.StrictMode>
)
