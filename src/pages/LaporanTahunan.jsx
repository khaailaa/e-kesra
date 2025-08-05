import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FaFileExcel, FaFilePdf, FaPrint } from 'react-icons/fa';

const LaporanTahunan = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('Laporan Tahunan');
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

          <div className="px-4 py-2">
            <div className="bg-gray-100 border border-gray-200 rounded-t-md shadow-sm p-4">
                <h1 className="">Laporan Lorem, ipsum dolor.</h1>
            </div>
            <div className="bg-white border border-gray-200 rounded-b-md shadow-md p-4">
                <select className="border border-gray-300 rounded-md p-2 w-full">
                    <option value="" selected disabled>Pilih Periode</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                <div className="flex items-center gap-2 mt-4">
                    <button className='flex gap-2 items-center bg-red-500 text-white text-sm py-1 px-2 rounded-md cursor-pointer'>
                        <FaFilePdf />
                        <p>PDF</p>
                    </button>
                    <button className='flex gap-2 items-center bg-green-500 text-white text-sm py-1 px-2 rounded-md cursor-pointer'>
                        <FaFileExcel />
                        <p>Excel</p>
                    </button>
                    <button className='flex gap-2 items-center bg-blue-500 text-white text-sm py-1 px-2 rounded-md cursor-pointer'>
                        <FaPrint />
                        <p>Print</p>
                    </button>
                </div>
            </div>
          </div>
        </div>

      </>
    </div>
  )
}

export default LaporanTahunan
