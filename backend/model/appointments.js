import mongoose from 'mongoose';
import validator from 'validator';

const appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3,]
    },
    phone: {
        type: String,
			required: [true, 'Phone is required'],
			trim: true,
			maxlength: [10, 'Phone number should have 10 characters'],
			minlength: [10, 'Phone number should have 10 characters'],
    },
    clinic: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    treatment: {
        type: String,
        enum: ['Dental Fillings', 'Orthodontic Treatment/Braces', 'Root Canal Treatment', 'Teeth Whitening', 'Dental Implants', 'Pediatric Dentistry', 'Dentures', 'Cosmetic Dentistry'],
        required: true
    },
    message: {
        type: String,
        trim: true,
        maxlength: [500, 'Message cannot exceed 500 characters'],
        minlength: [10, 'Message should have at least 10 characters'],
    },
    status: {
        type: String,
        default: 'Pending' // Set the default value for the status field to 'Pending'
    },
    
});

const Appointment = mongoose.model("Appointments", appointmentSchema);

export default Appointment;
