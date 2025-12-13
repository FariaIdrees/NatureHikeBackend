import express from 'express';
import {
  createTour,
  getAllTours,
  getTourById,
  updateTour,
  deleteTour
} from '../controllers/tourControllers.js';

const router = express.Router();

// tourRoutes.js
router.get('/', getAllTours);   // GET all tours
router.post('/', createTour);   // POST new tour
router.get('/:id', getTourById); // GET single tour
router.put('/:id', updateTour); // PUT update tour
router.delete('/:id', deleteTour); // DELETE tour


export default router;
