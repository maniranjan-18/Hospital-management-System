import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "first name must contain at leats 3 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "last name must contain at leats 3 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "please provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "must contain exact 11 digits"],
    maxLength: [11, "must contain exact 11 digits"],
  },
  message: {
    type: String,
    required: true,
    minLength: [10, "must contain exact 10 characters"],
  },
});
export const Message = mongoose.model("Message", messageSchema);
