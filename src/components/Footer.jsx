import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className='bg-gray-800 text-center py-5'>
        <p className='text-white'>Copyright &copy; {year} techrise solutions</p>

    </div>
  )
}

export default Footer