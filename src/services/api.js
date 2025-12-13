const API_BASE_URL = 'http://localhost:5000/api';

export const getTourBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tours/slug/${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching tour:', error);
    throw error;
  }
};

export const bookTour = async (bookingData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to book tour');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error booking tour:', error);
    throw error;
  }
};
