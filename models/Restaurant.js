import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100,
        trim: true
    },
    address: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    city_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    img:{
        type: String,
        required: true,
        minlength:1,
    },
    location: {
        longitude: {
            type: Number
        },
        latitude: {
            type: Number
        }
    } 
});


const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

export default Restaurant;