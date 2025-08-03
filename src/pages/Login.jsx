import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="w-full h-screen flex flex-col items-center">
                <header className='px-10 py-4 border-b mb-10 w-full'>
                    <h1 className='text-green-500 text-2xl font-semibold'>e-KESRA</h1>
                    <h1 className='text-green-500 text-2xl font-semibold'>Dinas Kesehatan</h1>
                </header>

                <div className="h-full w-full my-auto flex justify-center items-center">
                    <div className="border mx-auto h-4/5 w-1/2 flex flex-col justify-center items-center rounded-lg shadow-lg bg-white">
                        <h1 className='text-center font-bold text-2xl mb-8'>Login</h1>
                        <input type="text" name="" id="" placeholder='Email' className='w-1/2 p-2 border-2 rounded-lg border-green-700 focus:ring-green-400 focus:border-green-400 mb-6' />
                        <input type="password" name="" id="" placeholder='Password' className='w-1/2 p-2 border-2 rounded-lg border-green-700 focus:ring-green-400 focus:border-green-400' />
                        <div className='w-1/2 text-right mt-2 mb-6'>
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
