import React from 'react'
import { FaBook, FaChevronDown } from 'react-icons/fa'
import { FaArrowRightFromBracket, FaCircleQuestion, FaHouse } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const menuItems = [
  { name: 'Beranda', path: '/home', icon: <FaHouse/> },
  {
    name: 'Renstra', path: '/home', icon: <FaBook/>,
    submenu: [
      { name: 'Renstra Tujuan', path: '/renstra-tujuan' },
      { name: 'Renstra Sasaran', path: '/renstra-sasaran' },
    ]
  },
  {
    name: 'Perjanjian Kerja OPD', path: '/home', icon: <FaBook/>,
    submenu: [
      { name: 'Target PK Sasaran', path: '/target-pk-sasaran' },
      { name: 'Target PK Program', path: '/target-pk-program' },
    ]
  },
  {
    name: 'Laporan', path: '/report', icon: <FaBook/>,
    submenu: [
      { name: 'Laporan Tahunan', path: '/laporan-tahunan' },
      { name: 'Laporan Kinerja', path: '/laporan-kinerja' },
    ]
  },
  { name: 'Bantuan Helpdesk', path: '/help', icon: <FaCircleQuestion/> },
]

const Sidebar = ({ isOpen, activeMenu, openDropdown, handleDropdownClick, setActiveMenu }) => {
  return (
    <>
      <aside className={`fixed top-0 left-0 z-40 w-64  h-screen transition-transform border-r border-gray-200 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="h-full px-3 py-4 overflow-y-auto bg-green-500">
            <h1 className="text-center text-white font-bold text-2xl p-4">e-KESRA</h1>
            <ul className="space-y-2 font-medium">
              {menuItems.map((item) => (
                <li key={item.name} className=''>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => handleDropdownClick(item.name)}
                        className="flex items-center justify-between w-full p-2 rounded-lg text-sm text-gray-300 hover:text-white group"
                      >
                        <div className="flex items-center">
                          {item.icon}
                          <span className="ml-3 font-normal">{item.name}</span>
                        </div>
                        <FaChevronDown className={`transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.name && (
                        <ul className="pl-8 pt-2 space-y-2">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                to={subItem.path}
                                onClick={() => setActiveMenu(subItem.name)}
                                className={`flex items-center p-2 rounded-lg text-xs ${activeMenu === subItem.name ? 'text-white font-semibold' : 'text-gray-300'} hover:text-white`}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <div className="">
                    <Link to={item.path} href="" className={`flex items-center p-2 rounded-lg text-sm ${activeMenu === item.name ? 'text-white' : 'hover:text-gray-100 text-gray-300'} group`}>
                      {item.icon}
                      <span className="ml-3 font-normal">{item.name}</span>
                    </Link>
                    {item.name === 'Beranda' ? (
                      <div className="">
                        <div className="border mx-auto w-4/5 border-green-100 mb-2"></div>
                        <h1 className="text-gray-300 text-xs font-normal">Menu</h1>
                      </div>
                    ) : (
                      <div className=""></div>
                    )}
                    </div>
                )}
                </li>
              ))}
            </ul>
            <div className="absolute bottom-0 w-full py-2">
              <Link to='/' href="" className="flex items-center p-2 text-gray-900 rounded-lg group">
                <FaArrowRightFromBracket className='text-white group-hover:text-red-400'/>
                <span className="ml-3 text-white font-normal group-hover:text-red-400 text-sm">Logout</span>
              </Link>
            </div>
          </div>
        </aside>
    </>
  )
}

export default Sidebar
