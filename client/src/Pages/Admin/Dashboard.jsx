import React, { useEffect } from 'react'
import { useUserAuth } from '../../auth/userAuth'
import { useNavigate } from 'react-router-dom'
import Sidebar from "./Sidebar.jsx";


const Dashboard = () => {


  const navigate = useNavigate()
  const {token, user, logout} = useUserAuth()

  // useEffect(()=>{
  //   if(!token) {
  //     navigate('/login')
  //   }
    
  //   }, [token, navigate])
  
  



   
  return (
    <div className='dashboard'>
      
      <Sidebar />
    </div>
  );
    
}

export default Dashboard