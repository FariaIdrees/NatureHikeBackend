import mongoose from 'mongoose';
import Booking from '../models/Booking.js';
import Tour from '../models/Tour.js';
import { sendBookingConfirmationEmail } from '../services/emailService.js';

// CREATE NEW BOOKING
export const createBooking = async (req, res) => {
  try {
    const {
      tourName,
      fullName,
      contactNumber,
      emergencyContactNumber,
      email,
      cnic,
      departureCity,
      numberOfAdults,
      numberOfKids,
      agreedToTerms
    } = req.body;

    // Required fields validation
    if (!tourName || !fullName || !contactNumber || !emergencyContactNumber || !agreedToTerms) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const booking = await Booking.create({
      tourName,
      fullName,
      contactNumber,
      emergencyContactNumber,
      email,
      cnic,
      departureCity,
      numberOfAdults,
      numberOfKids,
      agreedToTerms
    });

    // Send confirmation email if email is provided
    if (email) {
      console.log('📬 Processing email for booking:', email);
      try {
        const emailResult = await sendBookingConfirmationEmail({
          ...booking.toObject(),
          createdAt: booking.createdAt
        });
        
        if (emailResult.success) {
          console.log('✅ Email sent successfully to:', email);
        } else {
          console.warn('⚠️ Failed to send confirmation email:', emailResult.message);
          // Don't fail the booking if email fails, just log the warning
        }
      } catch (emailError) {
        console.error('❌ Error sending confirmation email:', emailError);
        // Continue even if email fails - booking is still successful
      }
    } else {
      console.log('ℹ️ No email provided in booking, skipping email notification');
    }

    res.status(201).json({
      message: "Booking created successfully",
      booking
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// GET ALL BOOKINGS
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find(); // no populate
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET BOOKING BY ID
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate( 'title type price duration img');
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE BOOKING
export const updateBooking = async (req, res) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    ).populate( 'title type price duration img');

    if (!updatedBooking) return res.status(404).json({ message: "Booking not found" });
    res.json({ message: "Booking updated successfully", booking: updatedBooking });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE BOOKING
export const deleteBooking = async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    if (!deletedBooking) return res.status(404).json({ message: "Booking not found" });
    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
