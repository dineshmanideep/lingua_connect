import React, { useContext } from 'react'
import { UserContext } from '../../context/userprovider'
import Tutor_Navbar from '../../components/tutor_navbar'
const Tutor_dashboard = () => {
   const{user,setUser}=useContext(UserContext)

  return (
    <div className="container bg-gray-900 min-h-[100vh] text-white">
      <Tutor_Navbar/>

      <div className='flex  flex-col justify-center'>

        <h1 className='text-5xl py-4 flex justify-center'>Upcomming class</h1>
        <div className='flex justify-center'>

        
        <div className="class_box dark:bg-gray-700 text-3xl flex w-[80%]  justify-between border p-7 rounded-xl">
          <div className='flex flex-col   '>
            <div className='flex gap-2 py-7'>

              <span className='px-10'>{user.email}</span>
              <span className='px-10'>time</span>
            </div>
            <div className="info ">data</div>
          </div>
          <div className='flex flex-col gap-4 '>

            <button type="button" className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg  px-6 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">start</button>
            <button type="button" className="text-white bg-red-700  hover:bg-red-800 focus:ring-4 focus:red-blue-300  rounded-lg  px-6 py-3 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">cancel</button>
          </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Tutor_dashboard
