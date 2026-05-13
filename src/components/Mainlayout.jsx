import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

const Mainlayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className="grow">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Mainlayout