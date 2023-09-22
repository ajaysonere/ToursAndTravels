// express server
import  express  from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from "cookie-parser";
import tourRoute from './routers/tour.js';
import authRoute from './routers/auth.js';
import userRoute from "./models/User.js";
import reviewRoute from './routers/reviews.js';
import bookingRoute from './routers/bookings.js';


dotenv.config();
const app = express();
const port = process.env.PORT || 3500;

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with the actual origin of your frontend
    credentials: true, // Allow credentials (cookies, HTTP authentication)
};

app.use(cors(corsOptions));
// database connection
const connect = async()=>{
    try{
          await mongoose.connect(process.env.MONGODB_URL , {
          useNewUrlParser:true,
          useUnifiedTopology:true,
       });

       console.log("Database is connected ");

    }catch(err){
        console.log(err);
       console.log(`Mongodb connection failed `);
    }
}



// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/tours' , tourRoute);
app.use('/api/v1/auth' , authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);


 
app.listen(port , ()=>{
    connect();
    console.log(`Server is running at http://localhost:${port}`);
})