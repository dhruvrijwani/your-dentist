import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Appointment from "./Pages/Appointment";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ChatApp from "./Pages/ChatApp";
import BookingHours from "./Pages/BookingHours";
import Profile from "./Pages/Profile";
import UserProfile from "./Pages/UserProfile";
import ApBooking from "./Components/ApBooking";
import Gallery from "./Pages/Gallery";
import Userprovider from "./auth/userAuth";
import Dashboard from "./Pages/Admin/Dashboard";
import AppointmentTable from "./Pages/Admin/AppointmentTable";
import ImagesUpload from "./Pages/Admin/ImagesUpload";
import Treatments from "./Pages/Treatments";
import FAQ from "./Pages/FAQ";
import LowerFooter from "./Components/LowerFooter";


const App = () => {

  return (
    <>
    <Userprovider>
      <Navbar />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
              <ApBooking />
              <About />
              <Services />
              <Contact />
              <FAQ />
            </>
          }
        />
        <Route
          exact
          path="/gallery" // Add a new route for the gallery page
          element={<Gallery />}
        />
        
        <Route
          exact
          path="/treatments" // Add a new route for the gallery page
          element={<Treatments />}
        />
        
        <Route
          exact
          path="/dashboard" // Add a new route for the gallery page
          element={<Dashboard />}
        />
        <Route
          exact
          path="/appointmenttable" // Add a new route for the gallery page
          element={<AppointmentTable />}
        />
        <Route
          exact
          path="/ImagesUpload" // Add a new route for the gallery page
          element={<ImagesUpload />}
        />

        <Route
          exact
          path="/dental-clinic/appointment"
          element={<Appointment />}
        />
        {/* <Route exact path="/dental-clinic/treatments" element={} /> */}
        {/* <Route exact path="/dental-clinic/contact" element={} /> */}
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dental-clinic/team" element={<Profile />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/dental-clinic/user/profile"
          element={<UserProfile />}
        />
        <Route
          exact
          path="/dental-clinic/user/chat_section"
          element={<ChatApp />}
        />
        <Route exact path="/your-dentist/appointments" element={<BookingHours />} />
        
        
      </Routes>
      <LowerFooter />
      </Userprovider>
    </>
  );
};

export default App;
