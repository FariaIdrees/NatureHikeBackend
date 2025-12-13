import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter with email service configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

// Professional HTML email template with logo
const getBookingConfirmationTemplate = (bookingData) => {
  const logoUrl = 'https://naturehikepakistan.pk/wp-content/uploads/2021/08/Logo.png';
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Confirmation - Nature Hike Pakistan</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f4f4f4;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    .header {
      background: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%);
      padding: 30px 20px;
      text-align: center;
    }
    .logo {
      max-width: 200px;
      height: auto;
      margin-bottom: 15px;
    }
    .header h1 {
      color: #ffffff;
      font-size: 28px;
      font-weight: 600;
      margin-top: 10px;
    }
    .content {
      padding: 40px 30px;
    }
    .greeting {
      font-size: 18px;
      color: #2c5530;
      margin-bottom: 20px;
      font-weight: 600;
    }
    .message {
      font-size: 16px;
      color: #555;
      margin-bottom: 30px;
      line-height: 1.8;
    }
    .booking-details {
      background-color: #f8f9fa;
      border-left: 4px solid #4a7c59;
      padding: 25px;
      margin: 30px 0;
      border-radius: 5px;
    }
    .booking-details h2 {
      color: #2c5530;
      font-size: 20px;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #4a7c59;
    }
    .detail-row {
      display: flex;
      justify-content: space-between;
      padding: 12px 0;
      border-bottom: 1px solid #e0e0e0;
    }
    .detail-row:last-child {
      border-bottom: none;
    }
    .detail-label {
      font-weight: 600;
      color: #2c5530;
      flex: 1;
    }
    .detail-value {
      color: #555;
      flex: 2;
      text-align: right;
    }
    .status-badge {
      display: inline-block;
      padding: 6px 15px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
    }
    .status-pending {
      background-color: #fff3cd;
      color: #856404;
    }
    .status-confirmed {
      background-color: #d4edda;
      color: #155724;
    }
    .footer {
      background-color: #2c5530;
      color: #ffffff;
      padding: 30px;
      text-align: center;
    }
    .footer p {
      margin: 10px 0;
      font-size: 14px;
    }
    .footer a {
      color: #ffffff;
      text-decoration: underline;
    }
    .contact-info {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #4a7c59;
    }
    .contact-info p {
      margin: 5px 0;
      font-size: 14px;
    }
    .button {
      display: inline-block;
      padding: 12px 30px;
      background-color: #4a7c59;
      color: #ffffff;
      text-decoration: none;
      border-radius: 5px;
      margin-top: 20px;
      font-weight: 600;
    }
    @media only screen and (max-width: 600px) {
      .content {
        padding: 25px 20px;
      }
      .detail-row {
        flex-direction: column;
      }
      .detail-value {
        text-align: left;
        margin-top: 5px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <img src="${logoUrl}" alt="Nature Hike Pakistan Logo" class="logo" />
      <h1>Booking Confirmation</h1>
    </div>
    
    <div class="content">
      <div class="greeting">Dear ${bookingData.fullName},</div>
      
      <div class="message">
        Thank you for choosing Nature Hike Pakistan! We are delighted to confirm your tour booking. Your adventure awaits, and we are excited to be part of your journey through the beautiful landscapes of Pakistan.
      </div>
      
      <div class="booking-details">
        <h2>Booking Details</h2>
        
        <div class="detail-row">
          <span class="detail-label">Booking Status:</span>
          <span class="detail-value">
            <span class="status-badge status-${bookingData.bookingStatus || 'pending'}">
              ${(bookingData.bookingStatus || 'pending').toUpperCase()}
            </span>
          </span>
        </div>
        
        <div class="detail-row">
          <span class="detail-label">Tour Name:</span>
          <span class="detail-value">${bookingData.tourName}</span>
        </div>
        
        <div class="detail-row">
          <span class="detail-label">Full Name:</span>
          <span class="detail-value">${bookingData.fullName}</span>
        </div>
        
        ${bookingData.email ? `
        <div class="detail-row">
          <span class="detail-label">Email:</span>
          <span class="detail-value">${bookingData.email}</span>
        </div>
        ` : ''}
        
        <div class="detail-row">
          <span class="detail-label">Contact Number:</span>
          <span class="detail-value">${bookingData.contactNumber}</span>
        </div>
        
        <div class="detail-row">
          <span class="detail-label">Emergency Contact:</span>
          <span class="detail-value">${bookingData.emergencyContactNumber}</span>
        </div>
        
        ${bookingData.cnic ? `
        <div class="detail-row">
          <span class="detail-label">CNIC:</span>
          <span class="detail-value">${bookingData.cnic}</span>
        </div>
        ` : ''}
        
        ${bookingData.departureCity ? `
        <div class="detail-row">
          <span class="detail-label">Departure City:</span>
          <span class="detail-value">${bookingData.departureCity}</span>
        </div>
        ` : ''}
        
        <div class="detail-row">
          <span class="detail-label">Number of Adults:</span>
          <span class="detail-value">${bookingData.numberOfAdults}</span>
        </div>
        
        ${bookingData.numberOfKids > 0 ? `
        <div class="detail-row">
          <span class="detail-label">Number of Kids:</span>
          <span class="detail-value">${bookingData.numberOfKids}</span>
        </div>
        ` : ''}
        
        <div class="detail-row">
          <span class="detail-label">Booking Date:</span>
          <span class="detail-value">${new Date(bookingData.createdAt || Date.now()).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>
      </div>
      
      <div class="message">
        Our team will review your booking and contact you shortly to confirm the details and provide you with further information about your tour. Please keep this confirmation email for your records.
      </div>
      
      <div class="contact-info">
        <p><strong>If you have any questions or need to make changes to your booking, please don't hesitate to contact us.</strong></p>
        <p>We look forward to providing you with an unforgettable experience!</p>
      </div>
    </div>
    
    <div class="footer">
      <p><strong>Nature Hike Pakistan</strong></p>
      <p>Explore the beauty of Pakistan with us</p>
      <p>Visit us at: <a href="https://naturehikepakistan.pk">naturehikepakistan.pk</a></p>
      <p style="margin-top: 20px; font-size: 12px; opacity: 0.9;">
        This is an automated confirmation email. Please do not reply directly to this email.
      </p>
    </div>
  </div>
</body>
</html>
  `;
};

// Send booking confirmation email
export const sendBookingConfirmationEmail = async (bookingData) => {
  try {
    // Check if email is provided
    if (!bookingData.email) {
      console.log('No email provided for booking, skipping email notification');
      return { success: false, message: 'No email provided' };
    }

    // Validate email configuration
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Email configuration is missing. Please set EMAIL_USER and EMAIL_PASSWORD in .env file');
      return { success: false, message: 'Email configuration missing' };
    }

    const transporter = createTransporter();

    // Verify transporter configuration
    await transporter.verify();

    const mailOptions = {
      from: `"fariaidrees47@gmail.com" <${process.env.EMAIL_USER}>`,
      to: bookingData.email,
      subject: `Booking Confirmation - ${bookingData.tourName} | Nature Hike Pakistan`,
      html: getBookingConfirmationTemplate(bookingData),
      text: `
Dear ${bookingData.fullName},

Thank you for choosing Nature Hike Pakistan! We are delighted to confirm your tour booking.

BOOKING DETAILS:
- Booking Status: ${(bookingData.bookingStatus || 'pending').toUpperCase()}
- Tour Name: ${bookingData.tourName}
- Full Name: ${bookingData.fullName}
- Contact Number: ${bookingData.contactNumber}
- Emergency Contact: ${bookingData.emergencyContactNumber}
${bookingData.email ? `- Email: ${bookingData.email}` : ''}
${bookingData.cnic ? `- CNIC: ${bookingData.cnic}` : ''}
${bookingData.departureCity ? `- Departure City: ${bookingData.departureCity}` : ''}
- Number of Adults: ${bookingData.numberOfAdults}
${bookingData.numberOfKids > 0 ? `- Number of Kids: ${bookingData.numberOfKids}` : ''}
- Booking Date: ${new Date(bookingData.createdAt || Date.now()).toLocaleDateString()}

Our team will review your booking and contact you shortly.

Best regards,
Nature Hike Pakistan
https://naturehikepakistan.pk
      `.trim(),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Booking confirmation email sent successfully:', info.messageId);
    
    return { 
      success: true, 
      messageId: info.messageId,
      message: 'Email sent successfully' 
    };

  } catch (error) {
    console.error('Error sending booking confirmation email:', error);
    return { 
      success: false, 
      message: error.message,
      error: error 
    };
  }
};

export default {
  sendBookingConfirmationEmail,
  createTransporter,
};

