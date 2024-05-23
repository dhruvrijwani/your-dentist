import React, { useEffect, useState } from 'react';
import logo_img from './images/logo.png';
import { HashLink, Link } from 'react-router-hash-link'; // Import Link from react-router-dom
import 'font-awesome/css/font-awesome.min.css';
import './Navbar.css';
import { useUserAuth } from '../auth/userAuth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { logout } = useUserAuth();
  const navigate = useNavigate(); // Initialize navigate from useNavigate

  useEffect(() => {
    // Check login status here, update isLoggedIn state accordingly
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleClick = () => {
    setActive(!isActive);
  };

  const closeMobileMenu = () => {
    setActive(false);
  };

  const handleLogout = () => {
    logout(); // Call logout function to clear user session
    navigate('/login'); // Navigate to the login page after logout
    window.location.reload();
  };

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <HashLink to="/#home">
            <img src={logo_img} alt="yourDENTIST" />
          </HashLink>
        </div>
        <div className={isActive ? 'active_links' : 'links'}>
          {/* Navigation links */}
          <div className="MenuItems">
            <HashLink to="/#home" onClick={closeMobileMenu}>
              Home
            </HashLink>
          </div>
          <div className="MenuItems">
            <HashLink to="/treatments" onClick={closeMobileMenu}>
              Treatments
            </HashLink>
          </div>
          <div className="MenuItems">
            <HashLink to="/#contact-us" onClick={closeMobileMenu}>
              ContactUs
            </HashLink>
          </div>
          <div className="MenuItems">
            <HashLink to="/Gallery" onClick={closeMobileMenu}>
              Gallery
            </HashLink>
          </div>
          <div className="MenuItems none">
            <HashLink to="/#about-doctors" onClick={closeMobileMenu}>
              About
            </HashLink>
          </div>
          {/* Render login and dashboard links based on login status */}
          {!isLoggedIn && (
            <div className="MenuItems">
              <HashLink to="/login" onClick={closeMobileMenu}>
                Login
              </HashLink>
            </div>
          )}
          {isLoggedIn && (
            <div className="MenuItems">
              <HashLink to="/ImagesUpload" onClick={closeMobileMenu}>
                UploadImages
              </HashLink>
            </div>
          )}
          {isLoggedIn && (
            <div className="MenuItems">
              <HashLink to="/appointmenttable" onClick={closeMobileMenu}>
                Appointments
              </HashLink>
            </div>
          )}
          {isLoggedIn && (
            <div className="MenuItems">
              <button className='logoutbtn' onClick={handleLogout}>logout</button>
            </div>
          )}
          {/* <div className="MenuItems none">
            <HashLink to="/#contact-us" onClick={closeMobileMenu}>
              Contact
            </HashLink>
          </div> */}
          {!isLoggedIn && (
            <div className="MenuItems bgMenu" id="Appointment_menu">
              <HashLink to="/your-dentist/appointments" onClick={closeMobileMenu}>
                BookAppointment
              </HashLink>
            </div>
          )}
        </div>
        <div className="toggle_menu_icons" onClick={handleClick}>
          <i className={isActive ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
