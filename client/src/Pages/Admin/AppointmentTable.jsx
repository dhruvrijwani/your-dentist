import React, { useState, useEffect } from 'react';
import './AppointmentTable.css'; // Import the CSS file
import Spinner from '../../Components/Spinner'; // Import the Spinner component
import { FiCalendar } from 'react-icons/fi';
import { useUserAuth } from '../../auth/userAuth'
import { useNavigate } from 'react-router-dom'

const AppointmentTable = () => {


  const navigate = useNavigate()
  const {token, user, logout} = useUserAuth()

  useEffect(()=>{
    if(!token) {
      navigate('/login')
    }
    
    }, [token, navigate])


    const [appointments, setAppointments] = useState([]);
    const [expandedAppointmentId, setExpandedAppointmentId] = useState(null);
    const [loadingAppointmentId, setLoadingAppointmentId] = useState(null); // State for loading specific appointment
  
    useEffect(() => {
      // Fetch appointments data from the server
      fetchAppointments();
    }, []);
  
    const fetchAppointments = async () => {
        try {
          const response = await fetch("http://localhost:5000/dental-clinic/appointments");
          const data = await response.json();
      
          // Reverse the order of appointments to display them in descending order
          const reversedAppointments = data
            .map(appointment => ({
              ...appointment,
              phone: `+91${appointment.phone}` // Add +91 country code to phone number
            }))
            .reverse();
      
          setAppointments(reversedAppointments);
        } catch (error) {
          console.error('Error fetching appointment data:', error);
        }
      };
      
  
    const handleExpand = appointmentId => {
      if (expandedAppointmentId === appointmentId) {
        setExpandedAppointmentId(null);
      } else {
        setExpandedAppointmentId(appointmentId);
      }
    };
  
    const handleAccept = async (appointmentId, phoneNumber) => {
      try {
        setLoadingAppointmentId(appointmentId); // Set loading state for the specific appointment ID
        // Add a 2-second delay
        setTimeout(async () => {
          // Construct the WhatsApp URL with the predefined message for accept
          const whatsappUrl = `https://wa.me/${phoneNumber}/?text=Your appointment has been accepted. We look forward to seeing you!`;
  
          // Redirect to the WhatsApp URL
          window.location.href = whatsappUrl;
  
          // Update the status of the appointment to "Accepted"
          await updateAppointmentStatus(appointmentId, 'Accepted');
          setLoadingAppointmentId(null); // Clear loading state after action is completed
        }, 2000); // 2-second delay
      } catch (error) {
        console.error('Error accepting appointment and redirecting to WhatsApp:', error);
        setLoadingAppointmentId(null); // Clear loading state if there's an error
      }
    };
  
    const handleReject = async (appointmentId, phoneNumber) => {
      try {
        setLoadingAppointmentId(appointmentId); // Set loading state for the specific appointment ID
        // Add a 2-second delay
        setTimeout(async () => {
          // Construct the WhatsApp URL with the predefined message for reject
          const whatsappUrl = `https://wa.me/${phoneNumber}/?text=We regret to inform you that your appointment has been rejected. Please contact us for further assistance.`;
  
          // Redirect to the WhatsApp URL
          window.location.href = whatsappUrl;
  
          // Update the status of the appointment to "Rejected"
          await updateAppointmentStatus(appointmentId, 'Rejected');
          setLoadingAppointmentId(null); // Clear loading state after action is completed
        }, 2000); // 2-second delay
      } catch (error) {
        console.error('Error rejecting appointment and redirecting to WhatsApp:', error);
        setLoadingAppointmentId(null); // Clear loading state if there's an error
      }
    };
  
    const updateAppointmentStatus = async (appointmentId, status) => {
      try {
        const response = await fetch(`http://localhost:5000/dental-clinic/appointments/${appointmentId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status }),
        });
        if (response.ok) {
          // If update successful, fetch appointments data again to reflect changes
          fetchAppointments();
        } else {
          console.error('Failed to update status');
        }
      } catch (error) {
        console.error('Error updating status:', error);
      }
    };
  
    return (
      <div class="table-container">
      <div className='appointment-heading'>
      <h1><FiCalendar /> Appointments</h1>
      </div>

      <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {appointments.map(appointment => (
      <React.Fragment key={appointment._id}>
        <tr>
          <td>{appointment.name}</td>
          <td className={appointment.status === 'Accepted' ? 'accepted' : 'rejected'}>{appointment.status}</td>
          <td>
            <button className='expand' onClick={() => handleExpand(appointment._id)}>
              {expandedAppointmentId === appointment._id ? 'Show-Less' : 'Details'}
            </button>
          </td>
        </tr>
        {expandedAppointmentId === appointment._id && (
          <tr key={`${appointment._id}-details`} className="appointment-details">
            <td colSpan="3">
              {/* <p>Email: {appointment.email}</p> */}
              <p>Clinic: {appointment.clinic}</p>
              <p>Phone Number: {appointment.phone}</p>
              <p>Treatment: {appointment.treatment}</p>
              <p>Gender: {appointment.gender}</p>
              <p>Message: {appointment.message}</p>
              <div className="appointment-buttons">
                <button className='action-accept'
                  onClick={() => handleAccept(appointment._id, appointment.phone)}
                  disabled={loadingAppointmentId === appointment._id}
                >
                  {loadingAppointmentId === appointment._id ? <Spinner /> : 'Accept'}
                </button>
                <button className='action-reject'
                  onClick={() => handleReject(appointment._id, appointment.phone)}
                  disabled={loadingAppointmentId === appointment._id}
                >
                  {loadingAppointmentId === appointment._id ? <Spinner /> : 'Reject'}
                </button>
              </div>
            </td>
          </tr>
        )}
      </React.Fragment>
    ))}
  </tbody>
</table>
</div>

    );
  };
  
  export default AppointmentTable;
