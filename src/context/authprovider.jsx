import { createContext } from "react"
import { useState } from "react"

export const auth_context= createContext({});
export const  Authprovider = ({children}) => {
 const [auth,setauth]=useState({})

    return (
    <auth_context.Provider value={{auth,setauth}}>
        {children}
    </auth_context.Provider>
  )
}


