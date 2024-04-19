import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserProvider=({children})=>{
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
    const [loading, setloading] = useState(true)
    useEffect(()=>{
        const storeToken=JSON.parse(localStorage.getItem('token'))
        setToken(storeToken)
        setloading(false)

    }, [])

    const logout=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setToken(null)
        setUser(null)


    }
    if (loading) {
        return null
        
    }
    return(
        <>
        <UserContext.Provider value={{token, setToken, user, setUser, logout}}> 
            {children}
        </UserContext.Provider>
        </>
    )


}
export const useUserAuth=()=>useContext(UserContext)

export default UserProvider
