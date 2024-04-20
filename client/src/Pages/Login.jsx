import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from '../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import Spinner from '../Components/Spinner';
import { Link } from 'react-router-dom';
import { post } from '../services/apiEndPoint';
import { useUserAuth } from '../auth/userAuth';


const Login = () => {
  const navigate = useNavigate();
  const {setToken, setUser, token} = useUserAuth()

  useEffect(()=>{
    if(token) {
      navigate('/appointmenttable')
    }
    
  
  }, [token, navigate])


  const [ value, setValue] = useState( {
    email:'',
    password:''
  })

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange=(e)=>{
    setValue({
      ...value,
      [e.target.name]:e.target.value
    })

  }

  // const handleSubmit= async (e) => {
  //   e.preventDefault()
  //   try {
  //     const loginuser = await post('/login', value)
  //     const response=loginuser.data
  //     if (response.success) {
  //       toast.success(response.message, toastOptions)
  //       navigate('/')
  //       localStorage.setItem('token', JSON.stringify(response.data.token))
  //       localStorage.setItem('user', JSON.stringify(response.data.user))
  //       setToken(response.data.token)
  //       setUser(response.data.user)
        
  //     }
  //   } catch (error) {
      
  //   }

  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!value.email.trim()) {
      toast.error("Username cannot be empty", toastOptions);
      return;
    }
  
    if (!value.password.trim()) {
      toast.error("Password cannot be empty", toastOptions);
      return;
    }
  
    try {
      const loginuser = await post('/login', value);
      const response = loginuser.data;
    
      if (response.success) {
        console.log("Login successful!");
        toast.success("Login successful!", toastOptions);
        navigate('/');
        localStorage.setItem('token', JSON.stringify(response.data.token));
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setToken(response.data.token);
        setUser(response.data.user);
        window.location.reload();

      } else {
        // Check for specific error messages for incorrect username or password
        if (response.message === "Incorrect username") {
          toast.error("Incorrect username. Please try again.", toastOptions);
        } else if (response.message === "Incorrect password") {
          toast.error("Incorrect password. Please try again.", toastOptions);
        } else {
          // Handle other types of errors
          toast.error(response.message, toastOptions);
        }
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", toastOptions);
      console.error("Error:", error); 
    }
};


  return (
    <>
      <div className="formpage"  >
            <div className="register_container"  data-aos="fade-right">
              <div className="register_heading">Sign In</div>
              <form className="form" onSubmit={handleSubmit}>
                <input
                  required=""
                  className="input"
                  type="email"
                  name="email"
                  id="email"
                  value={value.email}
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter Your Email"
                />
                <input
                  required=""
                  className="input"
                  type="password"
                  name="password"
                  id="password"
                  value={value.password}
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter Your Password"
                />
                <input className="login-button" type="submit" value="Sign In" />
              </form>
              <span class="agreement"><Link to="/register">Dont Have An Account ? Sign Up</Link></span>
            </div>
            <ToastContainer />
          </div>
    </>
  );
};

export default Login;

// for authentication

// useEffect(()=>{
//   if(!token) {
//     navigate('/login')
//   }
  

// }, [token, navigate])

// onclick = {logout}




