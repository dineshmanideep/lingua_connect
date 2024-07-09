import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='bg-gray-900 min-h-[100vh] text-white'>
  <div className="nav flex justify-end py-6 px-4 text-3xl gap-12">
    {/* rediret to /login on click */}

    <button className='p-4  bg-blue-700 rounded-xl'  > <Link to="/login">Login</Link> </button>
    <button className='p-4  bg-blue-700 rounded-xl' ><Link to="/Signup">Sign Up</Link></button>

  </div>

      <div className="title flex flex-col items-center  gap-5 py-12">

      <h1 className="title  text-9xl item-center">LinguaConnect</h1>
      <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className='flex  flex-col items-center gap-7'>
     <h1 className='text-4xl '>Unlock new possibilities</h1>
     <button className='p-4  bg-blue-700 rounded-xl'>get started </button>
</div>
    </div>



  )
}

export default HomePage
