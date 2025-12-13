# Email Setup Guide for Booking Confirmation Emails

This guide will help you configure the email system to send professional booking confirmation emails when tours are booked.

## Features

- ✅ Automatic email sending on tour booking
- ✅ Professional HTML email template
- ✅ Nature Hike Pakistan logo included
- ✅ Responsive design for mobile and desktop
- ✅ Booking details formatted beautifully
- ✅ Works with Gmail, Outlook, and other SMTP services

## Configuration Steps

### 1. Create `.env` File

Create a `.env` file in the root directory of your project with the following variables:

```env
# Email Configuration for Booking Confirmation Emails
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
PORT=4000
```

### 2. Gmail Setup (Recommended)

If you're using Gmail, follow these steps:

1. **Enable 2-Step Verification** on your Google Account:
   - Go to: https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Click "Generate"
   - Copy the 16-character password (use this as `EMAIL_PASSWORD`)

3. **Update `.env` file**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx  # Use the App Password here
   ```

### 3. Outlook/Office 365 Setup

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

### 4. Other SMTP Services

For other email providers, update the SMTP settings accordingly:
- **Yahoo**: `smtp.mail.yahoo.com:587`
- **Custom SMTP**: Use your provider's SMTP settings

## Testing

After configuring your `.env` file:

1. Start your server:
   ```bash
   npm run dev
   ```

2. Create a booking with an email address through your API or frontend.

3. The booking confirmation email will be automatically sent to the provided email address.

## Email Template Features

The email includes:
- **Header** with Nature Hike Pakistan logo
- **Professional greeting** with customer's name
- **Booking details** including:
  - Booking status badge
  - Tour name
  - Customer information
  - Contact numbers
  - Number of adults/kids
  - Booking date
- **Footer** with company information
- **Responsive design** that works on all devices

## Troubleshooting

### Email not sending?

1. **Check environment variables**: Make sure `.env` file exists and has correct values
2. **Verify SMTP credentials**: Double-check email and password
3. **Check console logs**: Look for error messages in server console
4. **Gmail users**: Make sure you're using App Password, not regular password
5. **Check spam folder**: Emails might end up in spam initially

### Common Errors

- **"Invalid login"**: Wrong email or password
- **"Connection timeout"**: Check SMTP_HOST and SMTP_PORT
- **"Authentication failed"**: For Gmail, make sure 2-Step Verification is enabled and you're using App Password

## Security Notes

- Never commit `.env` file to version control
- Keep your email credentials secure
- Use App Passwords instead of main account passwords when possible
- Regularly rotate your email passwords

## Support

If you encounter any issues, check:
1. Server console for error messages
2. Email service logs
3. Make sure nodemailer package is installed: `npm install nodemailer`

