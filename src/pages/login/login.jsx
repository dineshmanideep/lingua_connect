import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth_context, Authprovider } from '../../context/authprovider.jsx';
// import { useAuth } from '../../hooks/useAuth.js';
const Login = (auth,setauth) => {
    const navigate = useNavigate();
    // const [auth,setauth]=useAuth({});
    const [form, setform] = useState({
        email: '',
        role: '',
        password: ''
    });


 



    const handleChange = (e) => {
        const { name, value } = e.target;
        setform({
            ...form,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        // const [auth,setauth]=useAuth();

        // Handle form submission, e.g., send data to an API
        //post to an api the form details




       

        try{
            const res=await fetch(`http://localhost:3000/login`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(form)
        
            });
            if(!res){
                throw new Error('something went wrong')
            }
            const result=await res.json();
            const {message,acess_token,success,role}=result;
            console.log(result);
            if(success){  
               setauth({
                    acess_token:acess_token,
                    role:role
                })
                
                
                if(role=="student"){    
                     navigate("/student")
                }
                else if(role=="tutor"){
                    navigate("/tutor")
                }
                else{
                    throw new Error('invalid role');
                    navigate("/")
                }
              
            } 
        }
        catch(error){
            console.log(error)
        }
   
    };

    return (
        <div className="container bg-gray-900 flex flex-col justify-center items-center min-h-screen  p-0 m-0">
            <h1 className='text-5xl text-white text-center py-6'>LOGIN </h1>

            <form className=" w-[80%] flex-col  items-center">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name='email' value={form.email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" onChange={handleChange} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" name='password' value={form.password} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your role</label>
                    <input type="role" name='role'     value={form.role} id="role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} required />
                </div>

            </form>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { handleSubmit(form) }}>Login</button>
        </div>



    )
}

export default Login
