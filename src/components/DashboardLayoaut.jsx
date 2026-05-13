import React, { useState } from 'react'
import Sidebar from './Sidebar'
import DashboardHeader from './DashboardHeader'
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='flex h-screen w-screen overflow-hidden bg-gray-100'>

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-40 md:hidden'
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* MAIN CONTENT */}
      <div className='flex flex-col flex-1 min-w-0 md:ml-64'>

        {/* HEADER */}
        <DashboardHeader
          setSidebarOpen={setSidebarOpen}
        />

        {/* PAGE CONTENT */}
        <main className='flex-1 overflow-y-auto p-6'>
          <Outlet />
        </main>

      </div>
    </div>
  )
}

export default DashboardLayout