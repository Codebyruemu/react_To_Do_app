import React from 'react'

const ContactForm = () => {
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-white'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
            Rapid Response on all Health Emmergency
        </h1>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2
        text-center'> <span className='underline underline-offset-4 decoration-1 under font-light'>Contact Form</span>
        </h1>

        <form className='max-w-2xl mx-auto text-gray-600 '>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    Your Name 
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name'  required/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email 
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='email'  required/>
                </div>
            </div>
            <div className='my-6 text-left'>
                What is Your Emmergency
                <textarea className='w-full border border-gray-300 rounded py-3 px-4 h-48 resize-none' name="Message" placeholder='Message' ></textarea>
            </div>
            <button className=' text-gray-800 btn border-gray-800 border-2 hover:bg-green-700 hover:text-white transition ease-out duration-500'>Send Message</button>
        </form>
        

    </div>
  )
}

export default ContactForm