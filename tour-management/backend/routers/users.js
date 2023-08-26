import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
const router = express.Router();


// update a user
router.put('/:id', updateUser);
// delete a user
router.delete('/:id', deleteUser);
// get a single user details
router.get('/:id', getSingleUser);
// get all user details
router.get('/', getAllUser);

export default router;