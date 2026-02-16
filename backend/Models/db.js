const mongoose = require('mongoose')
require('dotenv').config();

const mongo_url = process.env.MONGOOSE_URL;

mongoose.connect(mongo_url).then(() => {
    console.log("MongoDB Connected SuccessFully...");
    
}).catch((error)=> {
    console.log("MongoDB Connection Error:", error);
    
})