import React from 'react'
import Banner from '../Banner'
import { useLogin } from '../../hooks/useLoginHook'
import ContactForm from '../ContactForm'

const Home = () => {
    const { isLogin } = useLogin()
  return (
    <div>
        <Banner />
        {isLogin ? <ContactForm /> :
        <div className='text-center p-6 py-15 lg:px-32 w-full overflow-hidden bg-white'>
            <h3 className='text-2xl sm:text-3xl font-bold mb-2'>
                Rapid Response on all Health Emmergency
            </h3>
            
            <button className=' text-gray-800 btn border-gray-800 border-2 hover:bg-green-700 hover:text-white transition ease-out duration-500'><a href="/login">Send Message</a></button>
            
        </div>
        }
    </div>
  )
}

export default Home