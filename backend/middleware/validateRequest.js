const { validationResult } = require("express-validator");

module.exports = async (req, res, next)=>{
    const err = await validationResult(req);

    if(!err.isEmpty()){
        return res.status(400).json({
            status:"validation faild",
            errors:err.array(),
            success:false
        }) ;
    }

    next();
};