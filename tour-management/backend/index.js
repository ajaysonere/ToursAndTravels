// express server
import  express  from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from "cookie-parser";

import tourRoute from './routers/tour.js';
import userRoute from "./models/User.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 3500;

// database connection
const connect = async()=>{
    try{
          await mongoose.connect(process.env.MONGODB_URL , {
          useNewUrlParser:true,
          useUnifiedTopology:true,
       });

       console.log("Database is connected ");

    }catch(err){
       console.log(`Mongodb connection failed `);
    }
}



// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/tours' , tourRoute);
app.use('/users' , userRoute);

 
app.listen(port , ()=>{
    connect();
    console.log(`Server is running at http://localhost:${port}`);
})