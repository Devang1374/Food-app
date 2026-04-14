const testUserController = (req,res) => {
    try{
        res.status(200).send({
            success:true,
            message:"test user data API"
        });
    }catch(e){
        console.log("Error in Test API", e);
    }
};

//export
module.exports = {testUserController};