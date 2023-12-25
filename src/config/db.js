const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log("failed" + err);
})