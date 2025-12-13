import * as picsData from '../data/pics.js';

// Helper function to convert camelCase to kebab-case
const toKebabCase = (str) => {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

// Create a handler for each exported array
const createHandler = (data) => {
  return (req, res) => {
    try {
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
};

// Export handlers for all arrays
export const getHome = createHandler(picsData.home);
export const getSkardu6DaysFaqData = createHandler(picsData.Skardu6DaysFaqData);
export const getSkardu7DaysImages = createHandler(picsData.Skardu7DaysImages);
export const getSkardu7DaysFaqData = createHandler(picsData.Skardu7DaysFaqData);
export const getSkardu10DaysImages = createHandler(picsData.Skardu10DaysImages);
export const getSkardu10DaysFaqData = createHandler(picsData.Skardu10DaysFaqData);
export const getTour = createHandler(picsData.tour);
export const getPublicTour = createHandler(picsData.publictour);
export const getHunzaTours = createHandler(picsData.HunzaTours);
export const getHunzaAirTours = createHandler(picsData.HunzaAirTours);
export const getHunzaPackageTours = createHandler(picsData.HunzaPackageTours);
export const getHunzadata = createHandler(picsData.Hunzadata);
export const getHunzaActivities = createHandler(picsData.HunzaActivities);
export const getSlides = createHandler(picsData.slides);
export const getHunzaDay5 = createHandler(picsData.HunzaDay5);
export const getHunzafaqData = createHandler(picsData.HunzafaqData);
export const getHunza6DaysImages = createHandler(picsData.Hunza6DaysImages);
export const getHunza6FaqData = createHandler(picsData.Hunza6FaqData);
export const getHunzaSkarduDay8 = createHandler(picsData.HunzaSkarduDay8);
export const getHunzaSkarduImages = createHandler(picsData.HunzaSkarduImages);
export const getHunzaSkardu10DaysData = createHandler(picsData.HunzaSkardu10DaysData);
export const getHunzaSkardu10DaysImages = createHandler(picsData.HunzaSkardu10DaysImages);
export const getSkarduGroup8Images = createHandler(picsData.SkarduGroup8Images);
export const getSkarduGroup8Faq = createHandler(picsData.SkarduGroup8Faq);
export const getSkarduAir4DaysImages = createHandler(picsData.SkarduAir4DaysImages);
export const getSkarduAir4DaysData = createHandler(picsData.SkarduAir4DaysData);
export const getAirHunzaSkarduFairy10DaysImages = createHandler(picsData.AirHunzaSkarduFairy10DaysImages);
export const getAirHunzaSkarduFairy10DaysData = createHandler(picsData.AirHunzaSkarduFairy10DaysData);
export const getFairyHunzaSkardu15DaysImages = createHandler(picsData.FairyHunzaSkardu15DaysImages);
export const getFairyHunzaSkardu15DaysData = createHandler(picsData.FairyHunzaSkardu15DaysData);
export const getAirHunza4DaysImages = createHandler(picsData.AirHunza4DaysImages);
export const getAirHunza4DaysData = createHandler(picsData.AirHunza4DaysData);
export const getAirHunza5DaysImages = createHandler(picsData.AirHunza5DaysImages);
export const getAirHunza5DaysData = createHandler(picsData.AirHunza5DaysData);
export const getAirHunza6DaysImages = createHandler(picsData.AirHunza6DaysImages);
export const getAirHunza6DaysData = createHandler(picsData.AirHunza6DaysData);
export const getAirHunza7DaysImages = createHandler(picsData.AirHunza7DaysImages);
export const getAirHunza7DaysData = createHandler(picsData.AirHunza7DaysData);
export const getHunzaGroup5images = createHandler(picsData.HunzaGroup5images);
export const getHunzaGroup5Faq = createHandler(picsData.HunzaGroup5Faq);
export const getHunzaGroup8images = createHandler(picsData.HunzaGroup8images);
export const getHunzaGroup8Faq = createHandler(picsData.HunzaGroup8Faq);
export const getSkarduTours = createHandler(picsData.SkarduTours);
export const getSkarduAirTours = createHandler(picsData.SkarduAirTours);
export const getSkarduPackageTours = createHandler(picsData.SkarduPackageTours);
export const getSkarduData = createHandler(picsData.SkarduData);
export const getSwatTours = createHandler(picsData.SwatTours);
export const getSwatPublicTours = createHandler(picsData.SwatPublicTours);
export const getSwatData = createHandler(picsData.SwatData);
export const getSwatFaqData = createHandler(picsData.SwatFaqData);
export const getKalam2DaysImages = createHandler(picsData.Kalam2DaysImages);
export const getKalam3DaysImages = createHandler(picsData.Kalam3DaysImages);
export const getKalam4DaysImages = createHandler(picsData.Kalam4DaysImages);
export const getKalam5DaysImages = createHandler(picsData.Kalam5DaysImages);
export const getKalam5DaysMalamJabbaImages = createHandler(picsData.Kalam5DaysMalamJabbaImages);
export const getKalam5DaysMalamJabbaData = createHandler(picsData.Kalam5DaysMalamJabbaData);
export const getKalam7DaysImages = createHandler(picsData.Kalam7DaysImages);
export const getKalam2DaysData = createHandler(picsData.Kalam2DaysData);
export const getKalam3DaysData = createHandler(picsData.Kalam3DaysData);
export const getKalam4DaysData = createHandler(picsData.Kalam4DaysData);
export const getKalam5DaysData = createHandler(picsData.Kalam5DaysData);
export const getKalam7DaysData = createHandler(picsData.Kalam7DaysData);
export const getNaranHeroImages = createHandler(picsData.NaranHeroImages);
export const getNaranPackages = createHandler(picsData.NaranPackages);
export const getNaranData = createHandler(picsData.NaranData);
export const getNaranFaqData = createHandler(picsData.NaranFaqData);
export const getBabusarTopImages = createHandler(picsData.BabusarTopImages);
export const getBabusarTopFaqData = createHandler(picsData.BabusarTopFaqData);
export const getKunharRiverImages = createHandler(picsData.KunharRiverImages);
export const getKunharRiverFaqData = createHandler(picsData.KunharRiverFaqData);
export const getShogranImages = createHandler(picsData.ShogranImages);
export const getShogranFaqData = createHandler(picsData.ShogranFaqData);
export const getSiriPayeImages = createHandler(picsData.SiriPayeImages);
export const getSiriPayeFaqData = createHandler(picsData.SiriPayeFaqData);
export const getLahoreHeroImages = createHandler(picsData.LahoreHeroImages);
export const getLahorePlaces = createHandler(picsData.LahorePlaces);
export const getLahoreMoreImg = createHandler(picsData.LahoreMoreImg);
export const getLahoreOtherNames = createHandler(picsData.LahoreOtherNames);
export const getLahoreRulers = createHandler(picsData.LahoreRulers);
export const getLahoreGates = createHandler(picsData.LahoreGates);
export const getLahoreFaqData = createHandler(picsData.LahoreFaqData);
export const getLahoreServicesIncluded = createHandler(picsData.LahoreServicesIncluded);
export const getHistoricLahoreStreetsImages = createHandler(picsData.HistoricLahoreStreetsImages);
export const getLahoreFortImages = createHandler(picsData.LahoreFortImages);
export const getShalimarGardenImages = createHandler(picsData.ShalimarGardenImages);
export const getWazirKhanImages = createHandler(picsData.WazirKhanImages);

// ============================================
// ROUTE NAME TO DATA MAPPING
// ============================================
const routeToDataMap = {
  'home': 'home',
  'skardu-6-days-faq-data': 'Skardu6DaysFaqData',
  'skardu-7-days-images': 'Skardu7DaysImages',
  'skardu-7-days-faq-data': 'Skardu7DaysFaqData',
  'skardu-10-days-images': 'Skardu10DaysImages',
  'skardu-10-days-faq-data': 'Skardu10DaysFaqData',
  'tour': 'tour',
  'public-tour': 'publictour',
  'hunza-tours': 'HunzaTours',
  'hunza-air-tours': 'HunzaAirTours',
  'hunza-package-tours': 'HunzaPackageTours',
  'hunza-data': 'Hunzadata',
  'hunza-activities': 'HunzaActivities',
  'slides': 'slides',
  'hunza-day-5': 'HunzaDay5',
  'hunza-faq-data': 'HunzafaqData',
  'hunza-6-days-images': 'Hunza6DaysImages',
  'hunza-6-faq-data': 'Hunza6FaqData',
  'hunza-skardu-day-8': 'HunzaSkarduDay8',
  'hunza-skardu-images': 'HunzaSkarduImages',
  'hunza-skardu-10-days-data': 'HunzaSkardu10DaysData',
  'hunza-skardu-10-days-images': 'HunzaSkardu10DaysImages',
  'skardu-group-8-images': 'SkarduGroup8Images',
  'skardu-group-8-faq': 'SkarduGroup8Faq',
  'skardu-air-4-days-images': 'SkarduAir4DaysImages',
  'skardu-air-4-days-data': 'SkarduAir4DaysData',
  'air-hunza-skardu-fairy-10-days-images': 'AirHunzaSkarduFairy10DaysImages',
  'air-hunza-skardu-fairy-10-days-data': 'AirHunzaSkarduFairy10DaysData',
  'fairy-hunza-skardu-15-days-images': 'FairyHunzaSkardu15DaysImages',
  'fairy-hunza-skardu-15-days-data': 'FairyHunzaSkardu15DaysData',
  'air-hunza-4-days-images': 'AirHunza4DaysImages',
  'air-hunza-4-days-data': 'AirHunza4DaysData',
  'air-hunza-5-days-images': 'AirHunza5DaysImages',
  'air-hunza-5-days-data': 'AirHunza5DaysData',
  'air-hunza-6-days-images': 'AirHunza6DaysImages',
  'air-hunza-6-days-data': 'AirHunza6DaysData',
  'air-hunza-7-days-images': 'AirHunza7DaysImages',
  'air-hunza-7-days-data': 'AirHunza7DaysData',
  'hunza-group-5-images': 'HunzaGroup5images',
  'hunza-group-5-faq': 'HunzaGroup5Faq',
  'hunza-group-8-images': 'HunzaGroup8images',
  'hunza-group-8-faq': 'HunzaGroup8Faq',
  'skardu-tours': 'SkarduTours',
  'skardu-air-tours': 'SkarduAirTours',
  'skardu-package-tours': 'SkarduPackageTours',
  'skardu-data': 'SkarduData',
  'swat-tours': 'SwatTours',
  'swat-public-tours': 'SwatPublicTours',
  'swat-data': 'SwatData',
  'swat-faq-data': 'SwatFaqData',
  'kalam-2-days-images': 'Kalam2DaysImages',
  'kalam-3-days-images': 'Kalam3DaysImages',
  'kalam-4-days-images': 'Kalam4DaysImages',
  'kalam-5-days-images': 'Kalam5DaysImages',
  'kalam-5-days-malam-jabba-images': 'Kalam5DaysMalamJabbaImages',
  'kalam-5-days-malam-jabba-data': 'Kalam5DaysMalamJabbaData',
  'kalam-7-days-images': 'Kalam7DaysImages',
  'kalam-2-days-data': 'Kalam2DaysData',
  'kalam-3-days-data': 'Kalam3DaysData',
  'kalam-4-days-data': 'Kalam4DaysData',
  'kalam-5-days-data': 'Kalam5DaysData',
  'kalam-7-days-data': 'Kalam7DaysData',
  'naran-hero-images': 'NaranHeroImages',
  'naran-packages': 'NaranPackages',
  'naran-data': 'NaranData',
  'naran-faq-data': 'NaranFaqData',
  'babusar-top-images': 'BabusarTopImages',
  'babusar-top-faq-data': 'BabusarTopFaqData',
  'kunhar-river-images': 'KunharRiverImages',
  'kunhar-river-faq-data': 'KunharRiverFaqData',
  'shogran-images': 'ShogranImages',
  'shogran-faq-data': 'ShogranFaqData',
  'siri-paye-images': 'SiriPayeImages',
  'siri-paye-faq-data': 'SiriPayeFaqData',
  'lahore-hero-images': 'LahoreHeroImages',
  'lahore-places': 'LahorePlaces',
  'lahore-more-img': 'LahoreMoreImg',
  'lahore-other-names': 'LahoreOtherNames',
  'lahore-rulers': 'LahoreRulers',
  'lahore-gates': 'LahoreGates',
  'lahore-faq-data': 'LahoreFaqData',
  'lahore-services-included': 'LahoreServicesIncluded',
  'historic-lahore-streets-images': 'HistoricLahoreStreetsImages',
  'lahore-fort-images': 'LahoreFortImages',
  'shalimar-garden-images': 'ShalimarGardenImages',
  'wazir-khan-images': 'WazirKhanImages',
};

// Helper function to get data array by route name
const getDataByRouteName = (routeName) => {
  console.log('🔍 Looking for route:', routeName);
  const dataName = routeToDataMap[routeName];
  console.log('📍 Mapped data name:', dataName);
  
  if (dataName && picsData[dataName]) {
    console.log('✅ Data found! Array length:', picsData[dataName].length);
    return picsData[dataName];
  }
  
  // Fallback: try direct match (for routes that match data property names exactly)
  if (picsData[routeName]) {
    console.log('✅ Direct match found for:', routeName);
    return picsData[routeName];
  }
  
  console.log('❌ No data found for route:', routeName);
  console.log('Available routes in map:', Object.keys(routeToDataMap).slice(0, 10), '...');
  return null;
};

// ============================================
// CREATE, UPDATE AND DELETE FUNCTIONS
// ============================================

// CREATE - ADD ITEM TO ARRAY
export const createItem = (req, res) => {
  try {
    const { route } = req.params;
    const newItem = req.body;
    
    const data = getDataByRouteName(route);
    
    if (!data) {
      return res.status(404).json({ 
        message: `Data not found for route: ${route}` 
      });
    }
    
    if (!Array.isArray(data)) {
      return res.status(400).json({ 
        message: `Route ${route} does not contain an array` 
      });
    }
    
    // Add the new item to the array
    data.push(newItem);
    
    res.status(201).json({
      message: 'Item created successfully',
      route: route,
      newItem: newItem,
      index: data.length - 1,
      data: data
    });
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE - UPDATE SPECIFIC ITEM BY INDEX
export const updateItem = (req, res) => {
  try {
    const { route, index } = req.params;
    const updateData = req.body;
    
    console.log('===========================================');
    console.log('UPDATE REQUEST RECEIVED');
    console.log('Route:', route);
    console.log('Index (string):', index);
    console.log('Update Data:', JSON.stringify(updateData, null, 2));
    console.log('===========================================');
    
    // Validate index
    const itemIndex = parseInt(index);
    if (isNaN(itemIndex)) {
      console.log('ERROR: Index is not a number:', index);
      return res.status(400).json({ 
        message: `Invalid index: ${index}. Index must be a number.` 
      });
    }
    
    // Get data array
    const data = getDataByRouteName(route);
    
    if (!data) {
      console.log('ERROR: Data not found for route:', route);
      return res.status(404).json({ 
        message: `Data not found for route: ${route}`,
        availableRoutes: Object.keys(routeToDataMap).slice(0, 10) // Show first 10 for debugging
      });
    }
    
    if (!Array.isArray(data)) {
      console.log('ERROR: Data is not an array. Type:', typeof data);
      return res.status(400).json({ 
        message: `Route ${route} does not contain an array` 
      });
    }
    
    console.log('Array length:', data.length, 'Requested index:', itemIndex);
    
    // Validate index range
    if (itemIndex < 0 || itemIndex >= data.length) {
      console.log('ERROR: Index out of range');
      return res.status(400).json({ 
        message: `Invalid index: ${index}. Array has ${data.length} items (valid range: 0-${data.length - 1})` 
      });
    }
    
    // Store original item for logging
    const originalItem = JSON.parse(JSON.stringify(data[itemIndex])); // Deep copy
    console.log('Original item:', JSON.stringify(originalItem, null, 2));
    
    // Update the item
    if (typeof data[itemIndex] === 'object' && data[itemIndex] !== null && !Array.isArray(data[itemIndex])) {
      // If it's an object, merge the update data
      data[itemIndex] = { ...data[itemIndex], ...updateData };
      console.log('✅ Updated item (object):', JSON.stringify(data[itemIndex], null, 2));
    } else if (Array.isArray(data[itemIndex])) {
      // If it's an array, replace it
      data[itemIndex] = updateData;
      console.log('✅ Updated item (array):', JSON.stringify(data[itemIndex], null, 2));
    } else {
      // If it's a string or primitive, replace it
      data[itemIndex] = updateData.value !== undefined ? updateData.value : (typeof updateData === 'object' ? updateData : updateData);
      console.log('✅ Updated item (primitive):', data[itemIndex]);
    }
    
    console.log('===========================================');
    console.log('UPDATE SUCCESSFUL');
    console.log('===========================================');
    
    res.json({
      success: true,
      message: 'Item updated successfully',
      route: route,
      index: itemIndex,
      originalItem: originalItem,
      updatedItem: data[itemIndex],
      arrayLength: data.length
    });
    
  } catch (err) {
    console.error('===========================================');
    console.error('UPDATE ERROR:', err);
    console.error('Stack:', err.stack);
    console.error('===========================================');
    res.status(500).json({ 
      message: err.message,
      error: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
};

// DELETE - DELETE ITEM BY INDEX
export const deleteItem = (req, res) => {
  try {
    const { route, index } = req.params;
    const itemIndex = parseInt(index);
    
    const data = getDataByRouteName(route);
    
    if (!data) {
      return res.status(404).json({ 
        message: `Data not found for route: ${route}` 
      });
    }
    
    if (!Array.isArray(data)) {
      return res.status(400).json({ 
        message: `Route ${route} does not contain an array` 
      });
    }
    
    if (isNaN(itemIndex) || itemIndex < 0 || itemIndex >= data.length) {
      return res.status(400).json({ 
        message: `Invalid index: ${index}. Array has ${data.length} items (0-${data.length - 1})` 
      });
    }
    
    // Store deleted item for response
    const deletedItem = data[itemIndex];
    
    // Delete the item
    data.splice(itemIndex, 1);
    
    res.json({
      message: 'Item deleted successfully',
      route: route,
      deletedIndex: itemIndex,
      deletedItem: deletedItem,
      data: data
    });
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE ENTIRE ARRAY
export const updateArray = (req, res) => {
  try {
    const { route } = req.params;
    const newData = req.body;
    
    const data = getDataByRouteName(route);
    
    if (!data) {
      return res.status(404).json({ 
        message: `Data not found for route: ${route}` 
      });
    }
    
    if (!Array.isArray(newData)) {
      return res.status(400).json({ message: 'Request body must be an array' });
    }
    
    if (!Array.isArray(data)) {
      return res.status(400).json({ 
        message: `Route ${route} does not contain an array` 
      });
    }
    
    // Clear and replace array
    data.length = 0;
    data.push(...newData);
    
    res.json({
      message: 'Array updated successfully',
      route: route,
      data: data
    });
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
