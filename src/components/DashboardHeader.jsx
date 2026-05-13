import React from 'react'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon } from '@heroicons/react/24/outline';

import { useLogin } from "../hooks/useLoginHook"

const DashboardHeader = ({ setSidebarOpen }) => {
  const { isLogin, logout } = useLogin()
  return (
    
      <div className='h-16 border-b border-gray-300 flex justify-between items-center px-6 shadow-sm sticky top-0 z-10'>
         {/* LEFT */}
      <div className="flex items-center gap-4">

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden"
        >
          <Bars3Icon className="h-7 w-7 text-gray-700" />
        </button>

        <h1 className="text-sm md:text-xl font-semibold text-gray-800">
          Dashboard
        </h1>
      </div>

        {/* RIGHT SIDE */}
          <div className="flex items-center">

            <Menu as="div" className="relative">
              
              <MenuButton className="flex rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900">
                <img
                  alt="profile"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="h-9 w-9 rounded-full border-2 border-slate-600 hover:border-cyan-400 transition"
                />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg bg-slate-800 py-2 shadow-lg ring-1 ring-black/30 focus:outline-none transition"
              >

                <MenuItem>
                  {({ focus }) => (
                    <a
                      className={`block px-4 py-2 text-sm ${
                        focus
                          ? "bg-slate-700 text-white"
                          : "text-slate-300"
                      }`}
                    >
                      Your Profile
                    </a>
                  )}
              </MenuItem>

                {isLogin && (<MenuItem>
                  
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500 hover:text-white transition"
                    >
                      Logout
                    </button>
                  
                </MenuItem>
                )}

              </MenuItems>
            </Menu>
          </div>
      </div>
    
    
  )
}

export default DashboardHeader