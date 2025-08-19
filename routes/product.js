import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct , } from '../controllers/product.js';

const Productrouter = express.Router();

// Sample product route
Productrouter.get('/', getAllProducts);
Productrouter.post('/', createProduct);
Productrouter.get('/:id', getProductById);  
Productrouter.put('/:id', updateProduct);
Productrouter.delete('/:id', deleteProduct);

export default Productrouter;

