import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.js';
import Productrouter from './routes/product.js';
import cors from 'cors';
import pageRouter from './routes/page.js';
import enquiryRouter from './routes/enquiry.js';
import settingRouter from './routes/setting.js';
import connectDB from './config/db.js';
import contentRouter from './routes/content.js';

const app = express();
const PORT =  process.env.PORT || 5001;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.urlencoded({ extended: true }));


// MongoDB connection
connectDB();


// Sample route

app.use('/api/users', userRouter);
app.use('/api/products', Productrouter);
app.use('/api/pages' , pageRouter)
app.use('/api/enquiry',enquiryRouter)
app.use('/api/setting',settingRouter)
app.use('/api/content',contentRouter)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
export default app; 


