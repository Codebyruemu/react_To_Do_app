import loginContext  from "../context/AuthContext"
import { useContext } from "react";

//1. create the context which is done in AuthContex.jsx
//2. provide for the created context which is done in contextProvider.jsx
//3.create a react custom hook that will enable component (the children use the content of the context through this hook)

export function useLogin () {
    const context = useContext(loginContext)
    if (!context){
        throw new error("context not provided");
    }
    return context
}