import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FaCircleExclamation, FaPenToSquare } from 'react-icons/fa6';
import { FaChevronRight, FaPlus, FaTrash } from 'react-icons/fa';

const TargetPkSasaran
 = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeMenu, setActiveMenu] = useState('Target PK Sasaran');
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const handleDropdownClick = (menuName) => {
        setOpenDropdown(openDropdown === menuName ? null : menuName);
    }

    return (
        <div>
            <>
                {/* Sidebar */}
                <Sidebar
                    isOpen={isSidebarOpen}
                    activeMenu={activeMenu}
                    openDropdown={openDropdown}
                    handleDropdownClick={handleDropdownClick}
                    setActiveMenu={setActiveMenu}
                />

                {/* Header */}
                <Header
                    isOpen={isSidebarOpen}
                    menuName={activeMenu}
                    handleToggleSidebar={toggleSidebar}
                />

                {/* Main content */}
                <div className={`${isSidebarOpen ? 'sm:ml-64' : 'sm:ml-0'} bg-gray-100 h-screen font-sans`}>
                    <div className="p-4">
                        <div className="bg-white rounded p-4 shadow-md border border-gray-200">
                            <h1 className="font-normal mb-2">Target PK Indikator Sasaran Tahunan 2020 - 2025</h1>
                            <div className="w-full bg-green-500 rounded-t-md px-4 py-2 flex gap-3 items-center">
                                <FaCircleExclamation className='text-green-200' />
                                <FaChevronRight className='text-xs text-white' />
                                <h1 className="text-white">Perangkat: Lorem ipsum dolor sit amet.</h1>
                            </div>
                            <div className="bg-gray-100 rounded-b-md shadow-sm p-4 border border-gray-200">
                                <div className="p-4 bg-white border rounded-md border-gray-200 shadow-md mb-4">
                                    <div className="flex items-center justify-between border-b mb-2 py-2 border-b-gray-300">
                                        <h1 className="font-normal">Sasaran Perangkat: Lorem ipsum dolor sit amet.</h1>
                                    </div>
                                    <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
                                        <thead>
                                            <tr>
                                                <th className="border border-gray-300 px-4 py-2">Field</th>
                                                <th className="border border-gray-300 px-4 py-2">Separator</th>
                                                <th className="border border-gray-300 px-4 py-2">Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">Username</td>
                                                <td className="border border-gray-300 px-4 py-2 text-center"><button className='flex items-center text-xs gap-2 bg-green-500 text-white py-2 px-4 rounded-md cursor-pointer mx-auto'><FaPlus /> Tambah Tujuan</button></td>
                                                <td className="border border-gray-300 px-4 py-2">Row 1, Col 2</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="p-4 bg-white border rounded-md border-gray-200 shadow-md mb-4">
                                    <div className="flex items-center justify-between border-b mb-2 py-2 border-b-gray-300">
                                        <h1 className="font-normal">Sasaran Perangkat: Lorem ipsum dolor sit amet.</h1>
                                    </div>
                                    <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
                                        <thead>
                                            <tr>
                                                <th className="border border-gray-300 px-4 py-2">Field</th>
                                                <th className="border border-gray-300 px-4 py-2">Separator</th>
                                                <th className="border border-gray-300 px-4 py-2">Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">Username</td>
                                                <td className="border border-gray-300 px-4 py-2 text-center"><button className='flex items-center text-xs gap-2 bg-green-500 text-white py-2 px-4 rounded-md cursor-pointer mx-auto'><FaPlus /> Tambah Tujuan</button></td>
                                                <td className="border border-gray-300 px-4 py-2">Row 1, Col 2</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        </div>
    )
}

export default TargetPkSasaran

