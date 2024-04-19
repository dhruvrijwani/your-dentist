import express from "express";
import {config} from "dotenv"
import cors from 'cors';
import Appointment from "./model/appointments.js";
import router from './Routes/routers.js';
import { dbConnection } from "./Database/dbConnection.js";
import { fileURLToPath } from 'url';  //for uploads/images
import path from 'path';     //for uploads/images


const __filename = fileURLToPath(import.meta.url);     //for uploads/images
const __dirname = path.dirname(__filename);         //for uploads/images



config({ path: './.env' });

// Create Express app
const app = express();
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));   //for uploads/images

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes
app.use('/api', router);


app.get('/', (req, res) => {
  res.json({ message: 'Hello from server....{i am god}' });
}); 


app.post('/dental-clinic/slot/', async (req, res) => {
  try {
    // Create the new appointment
    const newAppointment = new Appointment({
      date: req.body.date,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      clinic: req.body.clinic,
      gender: req.body.gender,
      treatment: req.body.treatment,
      message: req.body.message,
    });

    // Save the new appointment
    const savedAppointment = await newAppointment.save();

    if (savedAppointment) {
      console.log(req.body);
      return res
        .status(201)
        .json({ message: 'Successfully made an appointment' });
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: 'An error occurred while processing your request' });
  }
});

app.get('/dental-clinic/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while fetching appointments' });
  }
});


app.patch('/dental-clinic/appointments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Find the appointment by ID and update its status
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      { status: status },
      { new: true } // To return the updated appointment after the update operation
    );

    if (!updatedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.json({ message: 'Appointment status updated successfully', appointment: updatedAppointment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while updating appointment status' });
  }
});




// Start the server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

dbConnection();














