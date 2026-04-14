const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');

//Register
const registerController = async (req,res) =>{
    try{
        const {userName, email, password, address, phone} = req.body;

        //validation
        if(!userName || !email || !password || !phone){
            return res.status(500).send({
                success:false,
                message:"Please provide all fields",
            })
        }

        //check user
        const exisiting = await userModel.findOne({email});
        if(exisiting){
            console.log("error roerer");
            return res.status(500).send({
                success:false,
                message:"Email Already Registerd please login"
            })
           
        }

        //hashing password
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hash(password, salt);

        //create new user
        try{
            const user = await userModel.create({
                userName,
                email,
                password:hashPassword,
                address,
                phone
            });
            res.status(200).send({
                success:true,
                message:"Successfully registered",
                user
            })
        }catch(e){
            console.log(e);
        }
    }catch(e){
        console.log('RegisterController error ',e);
        res.status(500).send({
            success:false,
            message:'Error in register API',
            e
        })
    }
}

//LOGI
const loginController = async (req,res) => {
    const {email,password} = req.body;

    //validation
    if(!email || !password){
        return res.status(500).send({
            success:false,
            message:"Please Enter Email and Password"
        })
    }

    const user = await userModel.findOne({email});
    if(!user){
        return res.status(404).send({
            success:false,
            message:"Email is Wrong!"
        })
    }

    //check user password
    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch){
        return res.status(500).send({
            success:false,
            message:"Please Enter Right Password"
        })
    }

    res.status(200).send({
        success:true,
        message:"Login successfully",
        user
    })
}

//export
module.exports = {registerController, loginController};