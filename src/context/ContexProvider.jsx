import React , {useState} from 'react'
import loginContext  from './AuthContext'
import { useNavigate } from 'react-router-dom'

const ContexProvider = ({children}) => {
    const navigate = useNavigate()
    const [authStatus, setAuthStatus] = useState(false)

    const login = (username,password)=>{
        console.log('login function called')
        if(username==='admin' && password==='testadmin123'){
            setAuthStatus(true)
            return true
        }
        return false
        
    }

    const logout = () =>{
        setAuthStatus(false)
        navigate("/")
    }
    // sending the context to provider wrapper mostly in app.jsx or main.jsx
  return (
    <loginContext.Provider value={{isLogin:authStatus,login:login,logout:logout}}>
        {children}
    </loginContext.Provider>
  )
}

export default ContexProvider