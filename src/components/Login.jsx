import React, {useState } from 'react'
import { useLogin } from '../hooks/useLoginHook'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const { login } = useLogin()
    const [formData, setFormData] = useState({
        username:'', password:''
    })
    const[error, setError] = useState(false)

    //take in the event and assign the event.target attribute to name and value in a distructred manner
    const handleChange = (event)=>{
        const {name,value} = event.target
        setFormData((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        let promise = new Promise((resolve,reject)=>{
            let success = login(formData.username,formData.password)
            if (success){
                resolve()
            }else{
                reject(new Error('invalid credentials'));
                
            }
        })
        promise
        .then(()=>{
            setTimeout(()=>{
                navigate("/")
        },2000)
        })
        .catch(error =>{
            setError(true)
            console.error(error)})  
    }

  return (
    <div className='py-10'>
        <h1 className='text-center mb-4'>Login</h1>
        {error && <p className='text-center text-red-600'>invalid credentials</p>}
         <form className='max-w-2xl mx-3 md:mx-auto text-gray-600 ' onSubmit={handleSubmit}>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    username
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
                     type="text" name='username' value={formData.username} onChange={handleChange} required/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    password
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="password" name='password' value={formData.password} onChange={handleChange} required/>
                </div>
            </div>
            
            <button type="submit" className='mt-4 text-gray-800 btn border-gray-800 border-2 hover:bg-green-700 hover:text-white transition ease-out duration-500'>submit</button>
        </form>

    </div>
  )
}

export default Login