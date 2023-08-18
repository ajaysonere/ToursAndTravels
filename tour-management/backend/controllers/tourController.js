import Tour from '../models/Tour.js'; // Make sure to import your Tour model here

export const createTour = async (req, res) => {
    try {
        const newTour = new Tour(req.body);
        const savedTour = await newTour.save();
        res.status(200).json({ success: true, message: 'Tour successfully created', data: savedTour });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ success: false, message: 'Failed to create tour' });
    }
};


// update tour
export const updateTour = async (req, res)=>{
    try {
        const id = req.params.id;
        const updateTour = await Tour.findByIdAndUpdate(id,{
            $set:req.body
        } , {new:true});
        res.status(200).json({
            success:true, 
            message:"Successfully updated", data:updateTour
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Failed to updating tour' });
    }
}

// delete tour
export const deleteTour = async (req, res)=>{
    try {
        const id = req.params.id;
        await Tour.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:"deleted successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Failed to deleting tour' });
    }
}

// get songle tour
export const getSingleTour = async (req, res)=>{
    try {
        const id = req.params.id;
        const getSingleTourData = await Tour.findById(id);
        res.status(200).json({
            success:true,
            data:getSingleTourData
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Failed to get single tour' });
    }
}

// get all tours
export const getAllTour = async (req, res)=>{
    try {
        const getAllTourData = await Tour.find({});
        res.status(200).json({
            success:true,
            data:getAllTourData
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Failed to get all tours' });
    }
}

