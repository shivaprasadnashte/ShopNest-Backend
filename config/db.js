const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://Shivaprasad:Pass123@cluster0.cwxauli.mongodb.net/ecom?retryWrites=true&w=majority"
        );
        console.log('badhai ho MongoDB connected successfully...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    } 
}
module.exports = connectDB;