import express from 'express';
import { createTour, deleteTour, getAllTour, getSingleTour, getTourBySearch, updateTour } from '../controllers/tourController.js';

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


export default router;