# Tour Booking System - Setup & Integration Guide

## Backend Setup

### Files Created
1. **Models:**
   - `src/models/Booking.js` - Booking schema with all required fields

2. **Controllers:**
   - `src/controllers/bookingControllers.js` - All booking operations

3. **Routes:**
   - `src/routes/bookingRoutes.js` - All booking API endpoints

4. **Updated:**
   - `src/server.js` - Added booking routes to Express app

### Start the Backend Server
```bash
npm run dev
```
The server will run on `http://localhost:4000`

---

## Frontend Setup

### Files Created for React
1. **Utility:**
   - `src/utils/bookingApi.js` - API call functions

2. **Hooks:**
   - `src/hooks/useBookingForm.js` - Custom hook for form handling

3. **Components:**
   - `src/components/BookingModal.jsx` - Complete booking form component

### Integration in Your React Component

#### Step 1: Add State for Modal
```javascript
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);
```

#### Step 2: Import and Use BookingModal Component
```javascript
import BookingModal from './components/BookingModal';

// In your component JSX:
<button onClick={openModal} className="bg-[#9fbd21] hover:bg-[#fcc900] ...">
  BOOK THIS TOUR
</button>

<BookingModal 
  tourId={tourId}  // Pass the tour ID
  isModalOpen={isModalOpen}
  closeModal={closeModal}
/>
```

#### Step 3: Pass Tour ID
Make sure the tour ID is available in your component:
```javascript
// If using URL parameters
import { useParams } from 'react-router-dom';
const { tourId } = useParams();

// Or from props
const { tourId } = props;
```

---

## Full Example Usage

### Tour Details Page Component
```javascript
import React, { useState, useEffect } from 'react';
import BookingModal from './components/BookingModal';

function TourDetailsPage() {
  const [tour, setTour] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Get tourId from URL or props
  const tourId = '507f1f77bcf86cd799439011'; // Replace with actual ID

  useEffect(() => {
    // Fetch tour details
    const fetchTour = async () => {
      const response = await fetch(`/api/tours/${tourId}`);
      const data = await response.json();
      setTour(data);
    };
    
    fetchTour();
  }, [tourId]);

  if (!tour) return <div>Loading...</div>;

  return (
    <div>
      {/* Your tour details here */}
      
      {/* Book This Tour Button */}
      <div className="flex flex-col items-center justify-center p-4 mb-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#9fbd21] hover:bg-[#fcc900] text-white font-bold py-3 px-6 rounded transition-colors duration-300"
        >
          BOOK THIS TOUR
        </button>

        {/* Booking Modal */}
        <BookingModal 
          tourId={tourId}
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default TourDetailsPage;
```

---

## API Endpoints

### Create Booking
```
POST /api/bookings
```

### Get All Bookings
```
GET /api/bookings
```

### Get Bookings for a Tour
```
GET /api/bookings/tour/:tourId
```

### Get Single Booking
```
GET /api/bookings/:bookingId
```

### Update Booking
```
PUT /api/bookings/:bookingId
```

### Update Booking Status
```
PATCH /api/bookings/:bookingId/status
```

### Delete Booking
```
DELETE /api/bookings/:bookingId
```

### Get Booking Statistics
```
GET /api/bookings/stats/:tourId
```

---

## Form Data Submission

The BookingModal component automatically handles:
- ✅ Form state management
- ✅ Field validation
- ✅ Loading states
- ✅ Error handling
- ✅ Success notifications
- ✅ API submission

### Form Fields
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Full Name | Text | ✓ | Max 100 chars |
| Contact Number | Tel | ✓ | E.g., +92-300-1234567 |
| Emergency Contact | Tel | ✓ | E.g., +92-300-7654321 |
| Email ID | Email | ✗ | Optional |
| CNIC | Text | ✗ | Optional |
| Departure City | Select | ✗ | Lahore, Islamabad, Karachi |
| No. of Adults | Number | ✓ | Minimum 1 |
| No. of Kids | Number | ✗ | Default 0 |
| Terms & Conditions | Checkbox | ✓ | Must be agreed |

---

## Environment Variables (Optional)

Create `.env` file in your React project root:
```
REACT_APP_API_URL=http://localhost:4000/api
```

If not set, defaults to `http://localhost:4000/api`

---

## Database Schema

### Booking Collection
```javascript
{
  _id: ObjectId,
  tourId: ObjectId,           // Reference to Tour
  fullName: String,
  contactNumber: String,
  emergencyContactNumber: String,
  email: String,
  cnic: String,
  departureCity: String,
  numberOfAdults: Number,
  numberOfKids: Number,
  agreedToTerms: Boolean,
  bookingStatus: String,      // pending, confirmed, cancelled
  createdAt: Date,
  updatedAt: Date
}
```

---

## Testing the API

### Using cURL

```bash
# Create a booking
curl -X POST http://localhost:4000/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "tourId": "507f1f77bcf86cd799439011",
    "fullName": "John Doe",
    "contactNumber": "+92-300-1234567",
    "emergencyContactNumber": "+92-300-7654321",
    "numberOfAdults": 2,
    "numberOfKids": 1,
    "agreedToTerms": true
  }'

# Get all bookings
curl http://localhost:4000/api/bookings

# Get bookings for a tour
curl http://localhost:4000/api/bookings/tour/507f1f77bcf86cd799439011

# Update booking status
curl -X PATCH http://localhost:4000/api/bookings/{bookingId}/status \
  -H "Content-Type: application/json" \
  -d '{"bookingStatus": "confirmed"}'
```

---

## Features

✅ **Automatic Form Handling** - The component manages all form state  
✅ **Real-time Validation** - Client-side validation before submission  
✅ **Error Handling** - Clear error messages displayed to users  
✅ **Loading States** - Button disabled during submission  
✅ **Success Feedback** - Confirmation message on successful booking  
✅ **Tour Verification** - Backend checks if tour exists before creating booking  
✅ **Status Management** - Track booking status (pending/confirmed/cancelled)  
✅ **Statistics** - Get booking stats per tour  
✅ **Responsive Design** - Mobile-friendly form layout  

---

## Troubleshooting

### "Failed to fetch bookings" Error
- Ensure backend server is running on `http://localhost:4000`
- Check CORS settings in `server.js`
- Verify MongoDB is connected

### "Tour not found" Error
- Make sure `tourId` is a valid MongoDB ObjectId
- Check that the tour exists in the database
- Verify the tour ID is being passed correctly to the component

### Form not submitting
- Check browser console for errors
- Verify all required fields are filled
- Check that Terms & Conditions checkbox is checked
- Ensure API endpoint is accessible

### CORS Issues
The server already has CORS enabled. If you still face issues:
```javascript
app.use(cors({
  origin: 'http://localhost:3000', // Your React app port
  credentials: true
}));
```

---

## Next Steps

1. ✅ Backend is ready with all CRUD operations
2. ✅ Frontend component is ready for integration
3. Test the booking submission end-to-end
4. Add confirmation emails (optional)
5. Add payment integration (if needed)
6. Create admin dashboard to manage bookings

---

## Support

For detailed API documentation, see `BOOKING_API_DOCS.md`
