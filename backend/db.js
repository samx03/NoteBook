const mongoose = require('mongoose');
mongoURI = "mongodb+srv://sameer:1234@cluster0.0acjeaq.mongodb.net/test"

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo successfully");
    });
}

module.exports = connectToMongo;