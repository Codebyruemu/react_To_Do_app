import React , {useState} from 'react'
import loginContext  from './AuthContext'

const ContexProvider = ({children}) => {
    const [authStatus, setAuthStatus] = useState(false)

    const login = (username,password)=>{
        console.log('login function called')
        if(username==='admin' && password==='testadmin123'){
            setAuthStatus(true)
            return true
        }
        return false
        
    }

    const logout = () =>setAuthStatus(false)

  return (
    <loginContext.Provider value={{isLogin:authStatus,login:login,logout:logout}}>
        {children}
    </loginContext.Provider>
  )
}

export default ContexProvider