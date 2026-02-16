
const { required } = require('joi');
const  mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const RegistrationInfo = new Schema({
   user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
     name:{
        type: String,
        required: true,
     },
     age:{
        type: Number,
        required: true,
     },
     phone:{
        type: Number,
        required: true,
     },
     email:{
        type: String,
        required: true,
        unique: true,
     },
     category:{
        type: String,
        required: true,
     },
})

const RegistrationInfoModel = mongoose.model("registred-user", RegistrationInfo)

module.exports = RegistrationInfoModel;