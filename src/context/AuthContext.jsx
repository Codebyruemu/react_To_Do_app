import { createContext } from "react";

// createContext lets you create a context that components can provide or read. 
const loginContext = createContext({isLogin:null, login:()=>{},logout:()=>{}})

export default loginContext