const mongoose = require('mongoose');
exports.dbConn =()=>{
    const dbURL = "mongodb+srv://sanjeet:sanjeet3676@cluster0.of8micg.mongodb.net/coursedb?retryWrites=true&w=majority";
mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>{                 //warning 
    console.log('DB Cnnted')
}).catch((err)=>console.log(err));
}