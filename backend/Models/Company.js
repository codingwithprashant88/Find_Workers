const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Company = new Schema(
    {
      title:{
         type: String,
         required: true,
      },
      project:{
         type: String,
         required: true,
      },
      work:{
         type: String,
         required: true,
         index: true
      },
     price:{
         type: Number,
         required: true,
      },
     required:{
         type: Number,
         required: true,
      },
     category:{
         type: String,
         required: true,
      },
     location:{
         type: String,
         required: true,
      },
     
    }
)

const CompanyModal = mongoose.model('companys-details', Company);
module.exports = CompanyModal;
