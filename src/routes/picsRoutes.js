import express from 'express';


import {
  getHome,
  getSkardu6DaysFaqData,
  getSkardu7DaysImages,
  getSkardu7DaysFaqData,
  getSkardu10DaysImages,
  getSkardu10DaysFaqData,
  getTour,
  getPublicTour,
  getHunzaTours,
  getHunzaAirTours,
  getHunzaPackageTours,
  getHunzadata,
  getHunzaActivities,
  getSlides,
  getHunzaDay5,
  getHunzafaqData,
  getHunza6DaysImages,
  getHunza6FaqData,
  getHunzaSkarduDay8,
  getHunzaSkarduImages,
  getHunzaSkardu10DaysData,
  getHunzaSkardu10DaysImages,
  getSkarduGroup8Images,
  getSkarduGroup8Faq,
  getSkarduAir4DaysImages,
  getSkarduAir4DaysData,
  getAirHunzaSkarduFairy10DaysImages,
  getAirHunzaSkarduFairy10DaysData,
  getFairyHunzaSkardu15DaysImages,
  getFairyHunzaSkardu15DaysData,
  getAirHunza4DaysImages,
  getAirHunza4DaysData,
  getAirHunza5DaysImages,
  getAirHunza5DaysData,
  getAirHunza6DaysImages,
  getAirHunza6DaysData,
  getAirHunza7DaysImages,
  getAirHunza7DaysData,
  getHunzaGroup5images,
  getHunzaGroup5Faq,
  getHunzaGroup8images,
  getHunzaGroup8Faq,
  getSkarduTours,
  getSkarduAirTours,
  getSkarduPackageTours,
  getSkarduData,
  getSwatTours,
  getSwatPublicTours,
  getSwatData,
  getSwatFaqData,
  getKalam2DaysImages,
  getKalam3DaysImages,
  getKalam4DaysImages,
  getKalam5DaysImages,
  getKalam5DaysMalamJabbaImages,
  getKalam5DaysMalamJabbaData,
  getKalam7DaysImages,
  getKalam2DaysData,
  getKalam3DaysData,
  getKalam4DaysData,
  getKalam5DaysData,
  getKalam7DaysData,
  getNaranHeroImages,
  getNaranPackages,
  getNaranData,
  getNaranFaqData,
  getBabusarTopImages,
  getBabusarTopFaqData,
  getKunharRiverImages,
  getKunharRiverFaqData,
  getShogranImages,
  getShogranFaqData,
  getSiriPayeImages,
  getSiriPayeFaqData,
  getLahoreHeroImages,
  getLahorePlaces,
  getLahoreMoreImg,
  getLahoreOtherNames,
  getLahoreRulers,
  getLahoreGates,
  getLahoreFaqData,
  getLahoreServicesIncluded,
  getHistoricLahoreStreetsImages,
  getLahoreFortImages,
  getShalimarGardenImages,
  getWazirKhanImages,
  createItem,
  updateItem,
  deleteItem,
  updateArray,
} from '../controllers/picsControllers.js';

const router = express.Router();

// Home
router.get('/home', getHome);

// Skardu Tours
router.get('/skardu-6-days-faq-data', getSkardu6DaysFaqData);
router.get('/skardu-7-days-images', getSkardu7DaysImages);
router.get('/skardu-7-days-faq-data', getSkardu7DaysFaqData);
router.get('/skardu-10-days-images', getSkardu10DaysImages);
router.get('/skardu-10-days-faq-data', getSkardu10DaysFaqData);
router.get('/skardu-tours', getSkarduTours);
router.get('/skardu-air-tours', getSkarduAirTours);
router.get('/skardu-package-tours', getSkarduPackageTours);
router.get('/skardu-data', getSkarduData);
router.get('/skardu-group-8-images', getSkarduGroup8Images);
router.get('/skardu-group-8-faq', getSkarduGroup8Faq);
router.get('/skardu-air-4-days-images', getSkarduAir4DaysImages);
router.get('/skardu-air-4-days-data', getSkarduAir4DaysData);

// General Tours
router.get('/tour', getTour);
router.get('/public-tour', getPublicTour);
router.get('/slides', getSlides);

// Hunza Tours
router.get('/hunza-tours', getHunzaTours);
router.get('/hunza-air-tours', getHunzaAirTours);
router.get('/hunza-package-tours', getHunzaPackageTours);
router.get('/hunza-data', getHunzadata);
router.get('/hunza-activities', getHunzaActivities);
router.get('/hunza-day-5', getHunzaDay5);
router.get('/hunza-faq-data', getHunzafaqData);
router.get('/hunza-6-days-images', getHunza6DaysImages);
router.get('/hunza-6-faq-data', getHunza6FaqData);
router.get('/hunza-skardu-day-8', getHunzaSkarduDay8);
router.get('/hunza-skardu-images', getHunzaSkarduImages);
router.get('/hunza-skardu-10-days-data', getHunzaSkardu10DaysData);
router.get('/hunza-skardu-10-days-images', getHunzaSkardu10DaysImages);
router.get('/hunza-group-5-images', getHunzaGroup5images);
router.get('/hunza-group-5-faq', getHunzaGroup5Faq);
router.get('/hunza-group-8-images', getHunzaGroup8images);
router.get('/hunza-group-8-faq', getHunzaGroup8Faq);

// Air Tours
router.get('/air-hunza-skardu-fairy-10-days-images', getAirHunzaSkarduFairy10DaysImages);
router.get('/air-hunza-skardu-fairy-10-days-data', getAirHunzaSkarduFairy10DaysData);
router.get('/air-hunza-4-days-images', getAirHunza4DaysImages);
router.get('/air-hunza-4-days-data', getAirHunza4DaysData);
router.get('/air-hunza-5-days-images', getAirHunza5DaysImages);
router.get('/air-hunza-5-days-data', getAirHunza5DaysData);
router.get('/air-hunza-6-days-images', getAirHunza6DaysImages);
router.get('/air-hunza-6-days-data', getAirHunza6DaysData);
router.get('/air-hunza-7-days-images', getAirHunza7DaysImages);
router.get('/air-hunza-7-days-data', getAirHunza7DaysData);

// Fairy Meadows
router.get('/fairy-hunza-skardu-15-days-images', getFairyHunzaSkardu15DaysImages);
router.get('/fairy-hunza-skardu-15-days-data', getFairyHunzaSkardu15DaysData);

// Swat Kalam Tours
router.get('/swat-tours', getSwatTours);
router.get('/swat-public-tours', getSwatPublicTours);
router.get('/swat-data', getSwatData);
router.get('/swat-faq-data', getSwatFaqData);
router.get('/kalam-2-days-images', getKalam2DaysImages);
router.get('/kalam-3-days-images', getKalam3DaysImages);
router.get('/kalam-4-days-images', getKalam4DaysImages);
router.get('/kalam-5-days-images', getKalam5DaysImages);
router.get('/kalam-5-days-malam-jabba-images', getKalam5DaysMalamJabbaImages);
router.get('/kalam-5-days-malam-jabba-data', getKalam5DaysMalamJabbaData);
router.get('/kalam-7-days-images', getKalam7DaysImages);
router.get('/kalam-2-days-data', getKalam2DaysData);
router.get('/kalam-3-days-data', getKalam3DaysData);
router.get('/kalam-4-days-data', getKalam4DaysData);
router.get('/kalam-5-days-data', getKalam5DaysData);
router.get('/kalam-7-days-data', getKalam7DaysData);

// Naran Kaghan
router.get('/naran-hero-images', getNaranHeroImages);
router.get('/naran-packages', getNaranPackages);
router.get('/naran-data', getNaranData);
router.get('/naran-faq-data', getNaranFaqData);
router.get('/babusar-top-images', getBabusarTopImages);
router.get('/babusar-top-faq-data', getBabusarTopFaqData);
router.get('/kunhar-river-images', getKunharRiverImages);
router.get('/kunhar-river-faq-data', getKunharRiverFaqData);
router.get('/shogran-images', getShogranImages);
router.get('/shogran-faq-data', getShogranFaqData);
router.get('/siri-paye-images', getSiriPayeImages);
router.get('/siri-paye-faq-data', getSiriPayeFaqData);

// Lahore
router.get('/lahore-hero-images', getLahoreHeroImages);
router.get('/lahore-places', getLahorePlaces);
router.get('/lahore-more-img', getLahoreMoreImg);
router.get('/lahore-other-names', getLahoreOtherNames);
router.get('/lahore-rulers', getLahoreRulers);
router.get('/lahore-gates', getLahoreGates);
router.get('/lahore-faq-data', getLahoreFaqData);
router.get('/lahore-services-included', getLahoreServicesIncluded);
router.get('/historic-lahore-streets-images', getHistoricLahoreStreetsImages);
router.get('/lahore-fort-images', getLahoreFortImages);
router.get('/shalimar-garden-images', getShalimarGardenImages);
router.get('/wazir-khan-images', getWazirKhanImages);

// ============================================
// CREATE, UPDATE AND DELETE ROUTES
// ============================================
// IMPORTANT: Specific routes (with literal paths like /update) must come BEFORE dynamic routes (with params)

// UPDATE ENTIRE ARRAY - Replace whole array
// PUT /api/pics/:route/update
// Example: PUT /api/pics/home/update
// Body: [{...}, {...}, {...}] (complete array)
router.put('/:route/update', updateArray);

// CREATE - Add new item to array
// POST /api/pics/:route
// Example: POST /api/pics/home
// Body: { "img": "...", "title": "...", "title1": "..." }
router.post('/:route', createItem);

// UPDATE - Update specific item by index
// PUT /api/pics/:route/:index
// Example: PUT /api/pics/home/0
// Body: { "title": "Updated Title", "img": "..." }
router.put('/:route/:index', updateItem);

// DELETE - Delete item by index
// DELETE /api/pics/:route/:index
// Example: DELETE /api/pics/home/0
router.delete('/:route/:index', deleteItem);

export default router;


