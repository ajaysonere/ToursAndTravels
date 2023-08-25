import express from 'express';
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourController.js';

const router = express.Router();

// create a tour
router.post('/', createTour);
// update a tour
router.put('/:id',updateTour);
// delete a tour
router.delete('/:id',deleteTour);
// get a single tour details
router.get('/:id' , getSingleTour);
// get all tour details
router.get('/' , getAllTour);

// get tour by search
router.get('/search/getTourBySearch' , getTourBySearch);
router.get('/search/getFeaturedTours' , getFeaturedTour);
router.get('/search/getTourCount' , getTourCount);

export default router;