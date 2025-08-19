import express from 'express'
import { createEnquiry, deleteEnquiry, getEnquiry, updateEnquiry } from '../controllers/enquiry.js';
const enquiryRouter=express.Router();

enquiryRouter.get('/',getEnquiry)
enquiryRouter.post('/',createEnquiry)
enquiryRouter.put('/:id',updateEnquiry)
enquiryRouter.delete('/:id',deleteEnquiry)

export default  enquiryRouter