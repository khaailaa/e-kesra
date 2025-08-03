import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
    { name: 'Beranda', path: '/home' },
    { name: 'Renstra', path: '/home' },
    { name: 'Perjanjian Kerja OPD', path: '/home' },
    { name: 'Laporan', path: '/report' },
    { name: 'Bantuan Helpdesk', path: '/home' },
]

const Report = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeMenu, setActiveMenu] = useState('Laporan');


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div>
            <>
                {/* Sidebar */}
                <aside className={`fixed top-0 left-0 z-40 w-64  h-screen transition-transform border-r border-gray-200 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="h-full px-3 py-4 overflow-y-auto bg-white">
                        <h1 className="text-center font-bold text-4xl p-8">E-KESRA</h1>
                        <p className='text-gray-600 text-sm'>Menu</p>
                        <ul className="space-y-2 font-medium">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} href="" className={`flex items-center p-2 text-gray-900 rounded-lg ${activeMenu === item.name ? 'bg-green-300' : 'hover:bg-green-300'} group`}>
                                        <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 1100-12 6 6 0 000 12zm1-9H9v4H7v2h2v4h2v-4h2V9H11V7zm-1 2h-1V8h1v1z" />
                                        </svg>
                                        <span className="ml-3">{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="absolute bottom-0 w-full p-4">
                            <Link to='/' href="" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-red-300 group">
                                <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm7-5a5 5 0 100 10A5 5 0 0010 5zm1 5H9v2h2v-2zm0-4H9v2h2V6z" />
                                </svg>
                                <span className="ml-3">Logout</span>
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* Main content */}
                <div className={`${isSidebarOpen ? 'sm:ml-64' : 'sm:ml-0'} bg-gray-200`}>
                    <div className="bg-green-400 h-56 px-6 py-16">
                        <button
                            onClick={toggleSidebar}
                            className="text-white p-2 rounded-md hover:bg-green-500 focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                        <div className="flex justify-between">
                            <h1 className="text-white text-3xl font-bold mb-8">Dinas Kesehatan</h1>
                            <div className="flex items-center gap-4 text-white">
                                <a href=''>Lonceng</a>
                                <a href=''>Profile</a>
                                <a href=''>Tono</a>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                            <h1 className='text-2xl font-bold'>Laporan</h1>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
                            <h1 className='text-2xl mb-8'>Laporan RPJMD</h1>
                            <h5 className='text-lg mb-2'>Periode</h5>
                            <select name="" id="" className='border px-4 py-2 rounded-lg w-full mb-4'>
                                <option value="" selected>Pilih Periode</option>
                                <option value="">test1</option>
                            </select>
                            <div className="flex gap-4">
                                <button className='bg-red-400 py-2 px-4 cursor-pointer rounded-lg text-white'>PDF</button>
                                <button className='bg-green-400 py-2 px-4 cursor-pointer rounded-lg text-white'>Excel</button>
                                <button className='bg-blue-400 py-2 px-4 cursor-pointer rounded-lg text-white'>Print</button>
                            </div>
                            <div className="h-96"></div>
                        </div>
                    </div>
                </div>

            </>
        </div>
    )
}

export default Report
