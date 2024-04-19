import React, { useEffect, useState } from 'react';
import './UserProfile.css';

function UserProfile() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const url = "https://yd-backend.onrender.com/dental-clinic/appointments";
    const getDatas = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching appointment data:', error);
      }
    };
    getDatas();
  }, []);

  return (
    <>
      <div className="profile_section">
        <div className="user_data_container">
          {apiData.map((appointment, index) => (
            <div key={index} className="data_values" data-aos="fade-right">
              <p>
                <span className="appointment_label">Name:</span>
                {appointment.name}
              </p>
              <p>
                <span className="appointment_label">Phone:</span>
                {appointment.phone}
              </p>
              <p>
                <span className="appointment_label">Clinic:</span>
                {appointment.clinic}
              </p>
              <p>
                <span className="your_date">Date:</span>
                {appointment.date}
              </p>
              <p>
                <span className="appointment_label">Gender:</span>
                {appointment.gender}
              </p>
              <p>
                <span className="appointment_label">Treatment:</span>
                {appointment.treatment}
              </p>
              <p>
                <span className="appointment_label">Message:</span>
                {appointment.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
