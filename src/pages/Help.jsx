import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FaFileExcel, FaFilePdf, FaPrint, FaWhatsapp } from 'react-icons/fa';

const Help = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('Bantuan Helpdesk');
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
            <div className="bg-white border border-gray-200 rounded-b-md shadow-md p-4">
                <button className="flex items-center gap-2 bg-green-500 text-white font-medium py-2 px-4 rounded cursor-pointer">
                    <FaWhatsapp />
                    <p>Bantuan Via WhatsApp</p>
                </button>
            </div>
          </div>
        </div>

      </>
    </div>
  )
}

export default Help
