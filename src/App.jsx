import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar'
import HomePage from './pages/homepage/homepage.jsx';
import Login from './pages/login/login.jsx';
import Profile from './pages/student/profile.jsx';
import Student_dashboard from './pages/student/student_dashboard.jsx';
import Signup from './pages/signup/Signup.jsx';
import Tutor_dashboard from './pages/tutor/tutor_dashboard.jsx';
import { Tutor_Profile } from './pages/tutor/tutor_profile.jsx';


import {Route,Routes,Navigate} from 'react-router-dom'

function App() {
  

  return (
<Routes>
  {/* login route and hompage */}
  <Route>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>
  </Route>
  <Route>
    <Route path='/student' element={<Student_dashboard/>}/>
    <Route path="/student/profile" element={<Profile/>}/>
  </Route>
  <Route>
    <Route path='/tutor' element={<Tutor_dashboard/>}/>
    <Route path="/tutor/profile" element={<Tutor_Profile/>}/>
  </Route>
</Routes>
  )
}

export default App

   
 