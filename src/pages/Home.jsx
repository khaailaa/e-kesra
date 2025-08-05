import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('Beranda');
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
            <div className="bg-white rounded-md shadow-sm p-4">
              <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Username</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">:</td>
                    <td className="border border-gray-300 px-4 py-2">Row 1, Col 2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Nama</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">:</td>
                    <td className="border border-gray-300 px-4 py-2">Row 1, Col 2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Role</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">:</td>
                    <td className="border border-gray-300 px-4 py-2">Row 1, Col 2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </>
    </div>
  )
}

export default Home
