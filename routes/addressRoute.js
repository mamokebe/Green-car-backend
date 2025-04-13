import express from 'express';
import { addAddress, getAddress,  deleteAddress } from '../controllers/addressController.js';
import authUser from '../middlewares/authUser.js';

const addressRouter = express.Router();

// Add Address
addressRouter.post('/add', authUser, addAddress); // Add a new address
// Get Address by User ID
addressRouter.get('/get', authUser, getAddress); // Get address by user ID
// Delete Address by ID
addressRouter.delete('/:id', authUser, deleteAddress); // Delete address by ID
// Update Address by ID
export default addressRouter;