import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login/login.jsx';
import Profile from './pages/student/profile.jsx';
import Student_dashboard from './pages/student/student_dashboard.jsx';
import Signup from './pages/signup/Signup.jsx';
import Tutor_dashboard from './pages/tutor/tutor_dashboard.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
   
  },
  {
    path: "/login",
    element:<Login/>,
   
  },
  {
    path: "/Signup",
    element:<Signup/>,
   
  },
  {
    path: "/student",
    element: < Student_dashboard/>,
    
  },
  {
    path: "/student/profile",
    element: < Profile/>,
   
  },
  {
    path: "/tutor",
    element: < Tutor_dashboard/>,
   
  },
  {
    path: "/tutor/profile",
    element: < Profile/>,
   
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
