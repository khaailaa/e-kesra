import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const Header = ({isOpen, handleToggleSidebar, menuName}) => {
  return (
    <div>
      <header className={`${isOpen ? 'sm:ml-64' : 'sm:ml-0'} bg-white py-2 px-4 border-b shadow-md border-b-gray-100`}>
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-4 items-center">
              <button
                onClick={handleToggleSidebar}
                className="p-2 rounded-md focus:outline-none"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
              <h1 className="text-xl">Dinas Kesehatan</h1>
            </div>
            <div className="flex items-center gap-4">
              <h5 className='text-sm text-gray-600'>Nama Pengguna</h5>
              <a href=''><FaUserCircle className='w-6 h-6' /></a>
            </div>
          </div>

          <h1 className="text-xl">{menuName}</h1>

        </header>
    </div>
  )
}

export default Header
