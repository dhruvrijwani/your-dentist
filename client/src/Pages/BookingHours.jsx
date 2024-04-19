import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "./BookingHours.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";

const BookingHours = () => {
  const url = "http://localhost:5000/dental-clinic/slot/";
  const navigate = useNavigate();
  const [loader, setLoader] = useState("none");
  const [activeUser, setActiveUser] = useState({
    name: "",
    phone: "",
    clinic: "",
    date: "",
    gender: "",
    treatment: "",
    message: "",
  });
  const [btn, setBtn] = useState(0);
  const [aces, setACES] = useState(-1);
  const [ace, setACE] = useState(-1);

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setActiveUser({ ...activeUser, [name]: value });
  };

  function checkDate(selectedDate) {
    var now = new Date();
    var formattedDate = now.toISOString().split("T")[0];
    console.log(formattedDate);
    if (selectedDate < formattedDate) {
      alert("Date must be in the future");
      return false;
    }

    return true;
  }

  const handleValidation = () => {
    const { name, phone, clinic, date, gender, treatment, message } =
      activeUser;
    if (name === "") {
      toast.error("Enter your name", toastOptions);
      return false;
    } else if (phone === "") {
      toast.error("Enter Your Currect Phone No", toastOptions);
      return false;
    } else if (clinic === "") {
      toast.error("Select Clinic", toastOptions);
      return false;
    } else if (date === "") {
      toast.error("Select date", toastOptions);
      return false;
    } else if (gender === "") {
      toast.error("Choose your gender", toastOptions);
      return false;
    } else if (treatment === "") {
      toast.error("Select A Treatment", toastOptions);
      return false;
    } else if (message === "") {
      toast.error("Enter the message", toastOptions);
      return false;
    } else if (
      name === "" ||
      phone === "" ||
      clinic === "" ||
      date === "" ||
      gender === "" ||
      treatment === "" ||
      message === ""
    ) {
      toast.error("Please Enter Your All Details", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, phone, clinic, date, gender, treatment, message } =
      activeUser;
    const requestOptions = {
      name,
      phone,
      clinic,
      date,
      gender,
      treatment,
      message,
    };

    console.log(requestOptions);

    if (handleValidation()) {
      setBtn(1);
      setLoader("flex");

      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestOptions),
        });

        if (res.status === 201) {
          console.log("Your data submitted to the server.");
          toast.success("Successfully made an appointment", toastOptions);

          const form = event.target;
          form.reset();

          setTimeout(() => {
            navigate("/");
          }, 4000);
        } else if (res.status === 401) {
          const data = await res.json();
          toast.error(data.message, toastOptions);
        } else {
          console.error("An error occurred while processing your request.");
          toast.error(
            "An error occurred while processing your request.",
            toastOptions
          );
        }
      } catch (err) {
        console.error(err);
        toast.error(
          "An error occurred while processing your request.",
          toastOptions
        );
      } finally {
        setBtn(0);
        setLoader("none");
      }
    }
  };

  return (
    <>
      <div className="container1">
        <div className="heading">Appointment Form</div>
        <form method="POST" onSubmit={handleSubmit} className="form1">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="input"
            min="3"
            value={activeUser.name}
            onChange={handleInputs}
            required
          />

          <label>Your Phone </label>
          <input
            type="number"
            placeholder="Phone No"
            name="phone"
            className="input"
            value={activeUser.phone}
            onChange={handleInputs}
            onKeyPress={(event) => {
              if (event.target.value.length >= 10) {
                event.preventDefault();
              }
            }}
            required
          />

          <label>Clinic</label>
          <select
            name="clinic"
            className="input"
            value={activeUser.clinic}
            onChange={handleInputs}
            required
          >
            <option value="">Select Clinic</option>
            <option value="sama">Sama</option>
            <option value="nizampura">Nizampura</option>
          </select>

          <label>Choose Date</label>
          <input
            type="date"
            placeholder="Select Date"
            name="date"
            className="input"
            style={{ color: "black" }}
            value={activeUser.date}
            onChange={(event) => {
              const selectedDate = event.target.value;
              console.log(selectedDate);
              if (checkDate(selectedDate)) {
                handleInputs(event);
              }
            }}
            required
          />

          <label>Select Gender</label>
          <select
            name="gender"
            className="input"
            value={activeUser.gender}
            onChange={handleInputs}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label>Treatment</label>
          <select
            name="treatment"
            className="input"
            value={activeUser.treatment}
            onChange={handleInputs}
            required
          >
            <option value="">Select Treatment</option>
            <option value="Dental Fillings">Dental Fillings</option>
            <option value="Orthodontic Treatment/Braces">
              Orthodontic Treatment/Braces
            </option>
            <option value="Root Canal Treatment">Root Canal Treatment</option>
            <option value="Teeth Whitening">Teeth Whitening</option>
            <option value="Dental Implants">Dental Implants</option>
            <option value="Pediatric Dentistry">Pediatric Dentistry</option>
            <option value="Dentures">Dentures</option>
            <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
          </select>

          <label>Message</label>
          <textarea
            name="message"
            className="input"
            placeholder="Enter your message"
            min="3"
            value={activeUser.message}
            onChange={handleInputs}
            required
          />

          <button className="login-button" id="bcb" type="submit">
            <span style={btn === 1 ? { display: "none" } : {}}>Submit</span>
            <Spinner id="sb_loader" style={loader} />
          </button>
        </form>

        <ToastContainer />
      </div>
    </>
  );
};

export default BookingHours;





