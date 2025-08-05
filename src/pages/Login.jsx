import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="w-full h-screen flex flex-col items-center bg-green-500">

                <div className="h-full w-full my-auto flex justify-center items-center">
                    <div className="border border-green-200 mx-auto h-4/5 px-10 flex flex-col justify-center items-center rounded-lg shadow-lg bg-white">
                        <img src="./vite.svg" alt="" className='w-16 h-16' />
                        <h1 className='text-center font-normal text-2xl mb-8 border-b py-4 w-1/2 border-gray-400'>e-KESRA</h1>
                        <input type="text" name="" id="" placeholder='Email' className='w-full p-2 border-2 rounded-lg border-green-700 focus:ring-green-400 focus:border-green-400 mb-6' />
                        <input type="password" name="" id="" placeholder='Password' className='w-full p-2 border-2 rounded-lg border-green-700 focus:ring-green-400 focus:border-green-400' />
                        <div className='w-full text-right mt-2 mb-6'>
                            <a href="#" className='text-red-700 hover:underline'>Lupa Password?</a>
                        </div>
                        <Link to='home' type="submit" className='cursor-pointer bg-green-400 py-4 px-48 rounded-lg font-bold text-white uppercase'> Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
