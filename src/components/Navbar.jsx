import React from 'react'
import { useLogin } from '../hooks/useLoginHook'


const Navbar = () => {
    // const { isLogin,logout } = useLogin()
  return (
    <div className='bg-gray-800 text-white py-3.5'>
        <div className='container'>
            <div className='flex justify-between'>
                <h1>Schedulebuddy</h1>
                <ul className='flex'>
                    <li className='me-5'><a href="#">TO-DO APP</a></li>
                    {/* <li>
                        {!isLogin ? <a href="/login" className='btn bg-green-400'>login</a> 
                        : <button className='btn bg-green-400' onClick={logout}>logout</button>
                        }
                       
                    </li> */}
                </ul>
            </div>
            
        </div>
        
    </div>
  )
}

export default Navbar