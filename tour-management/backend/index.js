// express server
import  express  from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT || 3500;

app.listen(process.env.PORT , ()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
})