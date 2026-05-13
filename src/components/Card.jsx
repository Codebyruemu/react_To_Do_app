import React from 'react'

const Card = ({icon,title,value}) => {
  return (
    <div className='bg-white text-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-6'>
        <div className='text-3xl text-gray-500'>{icon}</div>
        <div>
            <h2 className='text-lg font-normal'>{title}</h2>
            <p className='text-xl'>{value}</p>
        </div>
    </div>
  )
}

export default Card