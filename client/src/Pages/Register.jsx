import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
import Spinner from "../Components/Spinner";
import {post} from "../services/apiEndPoint.jsx"


const Register = () => {

  const navigate = useNavigate();
  const [ value, setValue ] = useState({
    email:'',
    name:'',
    password:''
  }) 

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const registeruser = await post('/register', value)
      const response = registeruser.data
      if (response.success) {
        toast.success(response.message, toastOptions)
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
      
    }
  }
  

  return (
    <>

          <div className="formpage"  >
            <div className="register_container"  data-aos="fade-right">
              <div className="register_heading">Sign Up</div>
              <form action="" className="form" onSubmit={handleSubmit}>
                <input
                  required=""
                  className="input"
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={value.email}
                  placeholder="Enter Your Email"
                />
                <input
                  required=""
                  className="input"
                  type="name"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  value={value.name}
                  placeholder="Enter Your Name"
                />
                <input
                  required=""
                  className="input"
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  value={value.password}
                  placeholder="Enter Your Password"
                />
                <input className="login-button" type="submit" value="Sign Up" />
              </form>
              <span class="agreement"><Link to="/login">Already Have An Account ? Sign In</Link></span>
            </div>
            <ToastContainer />
          </div>
      
    </>
  );
};

const FormContainer = styled.div``;

export default Register;








