const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const jobappliedSchema = new Schema({
    addedby:{
        type:String,
    },
    title:{
        type:String,
    },
    des:{
        type:String,
    },
    companyname:{
        type:String,
    },
    salary:{
        type:String,
    },
    appliedby:{
        type:String,
    },
});

const jobappliedModel = db.model('jobapplied',jobappliedSchema);
module.exports = jobappliedModel;
