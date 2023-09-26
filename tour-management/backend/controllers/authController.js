import Users from '../models/Users.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sendEmail from './../utils/mailer.js';


export const register = async (req , res)=>{

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    

    try{
        const newUser = new Users({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo:req.body.photo,
        })

        await newUser.save();
        sendEmail(req.body.email);
        res.status(200).json({
            success:true,
            message:'successfully created'
        });

    }catch(err){
       res.status(500).json({
          success:false,
          message:'Failed to create',
       })
    }
} 

export const login = async(req , res)=>{
    const email = await req.body.email;
    // console.log(email);
    try {
        const user = await Users.findOne({email});
        // if user does not exist
        // console.log(user);

        if(!user){
            return res.status(404).json({
                success:false,
                message:'User not found'
            });
        }
        // if user exist than we compare the 
        const checkCorrectPassword = await bcrypt.compare(req.body.password , user.password);

        // if password is incorrect
        if(!checkCorrectPassword){
            return res.status(401).json({
                success:false,
                message:'Incorrect email or password'
            });
        }
         
        const {password , role, ...rest} = user._doc;
        const token = jwt.sign({id:user._id , role:user.role}, process.env.JWT_SECRET_KEY , {expiresIn:'15d'});


        // set token in the browser cookies and send the response to the client

        res.cookie('accessToken' , token, {
            httpOnly:true,
            expires:token.expiresIn
        }).status(200).json({
            success:true,
            message:'succesfully login',
            data:{...rest}
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            message:'Failed to login'
        })
    }
}