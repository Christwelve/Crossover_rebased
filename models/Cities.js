import mongoose from "mongoose";

const CitySchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 30,
        trim: true
    }
});

const City = mongoose.model('City', CitySchema);

export default City;