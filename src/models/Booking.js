import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
 
   tourName: { type: String, required: true },
  fullName: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  emergencyContactNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: null
  },
  cnic: {
    type: String,
    default: null
  },
  departureCity: {
    type: String,
    default: null
  },
  numberOfAdults: {
    type: Number,
    required: true,
    min: 1
  },
  numberOfKids: {
    type: Number,
    default: 0,
    min: 0
  },
  agreedToTerms: {
    type: Boolean,
    required: true
  },
  bookingStatus: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Booking = mongoose.model('Booking', BookingSchema);
export default Booking;
