import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Enter a valid Email"],
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        unique: false,
    },
});
const User = mongoose.model("Users",userSchema)

export default User;

