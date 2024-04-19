import React from "react";
import { HashLink } from "react-router-hash-link";
const apBooking = () => {
  return (
    <>
      <HashLink
        to="/your-dentist/appointments"
        className="sticky_container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          height: "67px",
          position: "fixed",
          zIndex: "100",
          background: "#14647D",
          bottom: "0",
          textDecoration: "none",
        }}
      >
        <h3 style={{ color: "#fff", fontSize: "18px" }}>BOOK APPOINTMENT</h3>
      </HashLink>
    </>
  );
};

export default apBooking;
