const courseService = require('../services/course.service');

exports.registercourse = async(req,res,next)=>{
    try{
        const {img,des,rating,student,title,ins} = req.body;
        const response = await courseService.registercourse(img,des,rating,student,title,ins);
        res.json({status:true,sucess:"course registered Sucessfully"});
    } catch (e){
        console.log(e)
        res.json({status:false,sucess:"server error controller register"});
    }
}

exports.getalldata = async(req,res,next)=>{
    try{
        const a = await courseService.getall();
        if(!a){
            res.status(200).json({status:false,message:"no data found"});
        } else{
            res.status(200).json({status:true,data:a});
        }
    } catch (e){
        console.log(e)
        res.json({status:false,sucess:"server error controller login"});
    }
}

