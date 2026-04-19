import React, { useState } from 'react'

const Lists = () => {
    const [item, setItem] =useState([])

    const addItems = () =>{
        setItem([...item,{
            id: item.length,
            value:Math.floor(Math.random() * 10 ) + 1
        }])
    }
  return (
    <div className='text-center'>
        <h3>Adding list programatically</h3>
        <button className='btn bg-green-600' onClick={addItems}>add item</button>
        <ul>
            {item.map((item)=>(
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
    </div>
  )
}

export default Lists