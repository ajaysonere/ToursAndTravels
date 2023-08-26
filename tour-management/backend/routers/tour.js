import express from 'express';
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourController.js';

import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// create a tour
router.post('/',verifyAdmin, createTour);
// update a tour
router.put('/:id',verifyAdmin, updateTour);
// delete a tour
router.delete('/:id', verifyAdmin , deleteTour);
// get a single tour details
router.get('/:id' , getSingleTour);
// get all tour details
router.get('/' , getAllTour);

// get tour by search
router.get('/search/getTourBySearch' , getTourBySearch);
router.get('/search/getFeaturedTours' , getFeaturedTour);
router.get('/search/getTourCount' , getTourCount);

export default router;