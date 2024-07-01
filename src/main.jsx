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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
   
  },
  {
    path: "/login",
    element: <Login/>,
   
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
    element: < tutor_dashboard/>,
   
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
