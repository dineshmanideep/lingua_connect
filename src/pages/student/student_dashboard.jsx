import React from 'react'
import Navbar from '../../components/navbar'
import { auth_context } from '../../context/authprovider';
const Student_dashboard = () => {
    return (<>
       

            <Navbar />
            {/* <div className='flex  bg-gray-900'> */}
  <div className=' flex flex-col items-center justify-center bg-gray-900 '>

  
       
<div className="items-center bg-gray-50 rounded-lg shadow sm:flex sm:justify-around max-w-[900px]  m-3 dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full rounded-full size-36 p-4 sm:rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Bonnie Green</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">CEO & Web Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                                <h2 className='font-bold text-white'>English</h2>
                                
                                <button type="save" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Request a class</button>

                            </div>

                            <div className='text-white flex px-10'>
                                <ul className="flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                        </a>
                                    </li>

                                </ul>


                            </div>
                        </div>
<div className="items-center bg-gray-50 rounded-lg shadow sm:flex sm:justify-around max-w-[900px]  m-3 dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full rounded-full size-36 p-4 sm:rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Bonnie Green</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">CEO & Web Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                                <h2 className='font-bold text-white'>English</h2>
                                <h2 className='font-bold text-white'>Cost</h2>
                                <button type="save" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Request a class</button>

                            </div>

                            <div className='text-white flex px-10'>
                                <ul className="flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                        </a>
                                    </li>

                                </ul>


                            </div>
                        </div>
<div className="items-center bg-gray-50 rounded-lg shadow sm:flex sm:justify-around max-w-[900px]  m-3 dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full rounded-full size-36 p-4 sm:rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Bonnie Green</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">CEO & Web Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                                <h2 className='font-bold text-white'>English</h2>
                                <h2 className='font-bold text-white'>Cost</h2>
                                <button type="save" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Request a class</button>

                            </div>

                            <div className='text-white flex px-10'>
                                <ul className="flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                        </a>
                                    </li>

                                </ul>


                            </div>
                        </div>
<div className="items-center bg-gray-50 rounded-lg shadow sm:flex sm:justify-around max-w-[900px]  m-3 dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full rounded-full size-36 p-4 sm:rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Bonnie Green</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">CEO & Web Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                                <h2 className='font-bold text-white'>English</h2>
                                <h2 className='font-bold text-white'>Cost</h2>
                                <button type="save" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Request a class</button>

                            </div>

                            <div className='text-white flex px-10'>
                                <ul className="flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                        </a>
                                    </li>

                                </ul>


                            </div>
                        </div>
<div className="items-center bg-gray-50 rounded-lg shadow sm:flex sm:justify-around max-w-[900px]  m-3 dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full rounded-full size-36 p-4 sm:rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Bonnie Green</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">CEO & Web Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                                <h2 className='font-bold text-white'>English</h2>
                                <h2 className='font-bold text-white'>Cost</h2>
                                <button type="save" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Request a class</button>

                            </div>

                            <div className='text-white flex px-10'>
                                <ul className="flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                        </a>
                                    </li>

                                </ul>


                            </div>
                        </div>



    </div>  
    {/* <div className='side-bar  flex-[0.25]'>
        </div>       */}
    {/* </div>  */}
       

</>
    )
}

export default Student_dashboard
