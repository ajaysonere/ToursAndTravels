import User from '../models/User.js'; // Make sure to import your User model here

export const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(200).json({ success: true, message: 'User successfully created', data: savedUser });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ success: false, message: 'Failed to create User' });
    }
};


// update User
export const updateUser = async (req, res)=>{
    try {
        const id = req.params.id;
        const updateUser = await User.findByIdAndUpdate(id,{
            $set:req.body
        } , {new:true});
        res.status(200).json({
            success:true, 
            message:"Successfully updated", data:updateUser
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Failed to updating User' });
    }
}

// delete User
export const deleteUser = async (req, res)=>{
    try {
        const id = req.params.id;
        await User.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:"deleted successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Failed to deleting User' });
    }
}

// get songle User
export const getSingleUser = async (req, res)=>{
    try {
        const id = req.params.id;
        const getSingleUserData = await User.findById(id);
        res.status(200).json({
            success:true,
            data:getSingleUserData
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Failed to get single User' });
    }
}

// get all Users
export const getAllUser = async (req, res)=>{
    try {
        const users = await User.find({});
        const getAllUserData = await users.find({});
        res.status(200).json({
            success:true,
            data:getAllUserData
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Failed to get all Users' });
    }
}