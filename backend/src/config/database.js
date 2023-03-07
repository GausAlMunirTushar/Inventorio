const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://admin:tushar@cluster0.bstsr.mongodb.net/inventro-app';
mongoose.set('strictQuery', false);
const connectDB = () => {
    mongoose.connect(MONGO_URI)
    .then(
        console.log(`Connected to MongoDB`)
    ).catch((err) => {
        console.log(err)
    })

    
}

module.exports = connectDB;