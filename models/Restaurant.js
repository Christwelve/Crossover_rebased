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
    city: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    img:{
        type: String,
        required: true,
        minlength:1,
    }
});


const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

export default Restaurant;