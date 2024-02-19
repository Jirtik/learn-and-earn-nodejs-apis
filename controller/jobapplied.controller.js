const jobappliedService = require('../services/jobapplied.service');

exports.registerjobapplied = async(req,res,next)=>{
    try{
        const {addedby,title,des,companyname,salary,appliedby} = req.body;
        await jobappliedService.registerjobapplied(addedby,title,des,companyname,salary,appliedby);
        res.json({status:true,sucess:"job registered Sucessfully"});
    } catch (e){
        console.log(e)
        res.json({status:false,sucess:"server error controller register"});
    }
}


exports.getalljobapplied = async(req,res,next)=>{
    try{
        const a = await jobappliedService.getalljobapplied();
        res.status(200).json({status:true,data:a});
    } catch (e){
        console.log(e)
        res.json({status:false,sucess:"server error controller register"});
    }
}
