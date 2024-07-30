require('dotenv').config();
const mongoose = require('mongoose');

const mongourl = process.env.MONGO_URL
mongoose.connect(mongourl, {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => {
    console.log("mongodb connected...")
})
.catch(() => {
    console.log("failed to connect...")
})

const sellerSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    productDescription:{
        type: String,
        required: true
    },
    sellerName:{
        type: String,
        required: true
    }
}, {timestamps: true});

const authSchema = mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique: true
    },
    username:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    seller:{
        type: Boolean,
        default: false,
        required: false
    }
}, {timestamps: true});

const sellingData = new mongoose.model("sellerdatas", sellerSchema)
const authService = new mongoose.model("authdata", authSchema)

module.exports = {authService, sellingData}




