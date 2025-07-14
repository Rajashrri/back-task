const mongoose = require("mongoose");
const URI = "mongodb+srv://rajashrichougule:ENzLAEIi7RA7eZkE@cluster0.luemvjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const URI = "mongodb+srv://digihost2021:E1IBiNmZzhWtKDyB@cluster0.c1qye.mongodb.net/test";
// mongoose.connect(URI);

const connectDB = async () => {
    try {

       await mongoose.connect(URI);
       console.log('connection successful to DB');
        
    } catch (error) {

        console.error(error,"databse connection failed");
        process.exit(0);
        
    }
};

module.exports = connectDB; 
