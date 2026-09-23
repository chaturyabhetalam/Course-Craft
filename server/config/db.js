// const mongoose = require("mongoose")

// async function connectDB(){
//     await mongoose.connect(process.env.MONGO_URL)
//     console.log("MongoDB connected successfully...")
// }

// module.exports = connectDB


// const mongoose =require('mongoose');

// async function connectDB() {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log(" Mongodb Connected successfully")
// }
// module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;