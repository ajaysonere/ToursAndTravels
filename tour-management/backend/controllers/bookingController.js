import booking from '../models/booking.js';

// book tour
export const createBooking = async(req,res)=>{
    const newBooking = new booking(req.body);
    try {
        const savedBooking = await newBooking.save();
        res.status(200).json({
            success:true,
            message:'your tour is booked',
            data:savedBooking
        })
    } catch (err){
        res.status(500).json({
            success:false,
            message:'Internal server error'
        })
    }
}

// get one booking
export const getBooking = async(req,res)=>{
    const id = req.params.id;
    try {
        const book = await booking.findById(id);
        res.status(200).json({
            success:true,
            message:"Successful",
            data:book
        })
    } catch (err) {
        res.status(404).json({
            success:false,
            message:'Not found booking'
        })
    }
}

// get all booking

export const getAllBooking = async(req,res)=>{
    try {
        const book = await booking.find();
        res.status(200).json({
            success:true,
            message:"Successful",
            data:book
        })
    } catch (err) {
        res.status(404).json({
            success:false,
            message:'Not found bookings'
        })
    }
}