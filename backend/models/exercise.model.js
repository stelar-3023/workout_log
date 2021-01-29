const mongoose = require("mongoose")

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    exercise: {type: String, required: true},
    repetitions: {type: Number, required: false},
    weight: {type: Number, required: false},
    duration: {type: Number, required: false},
    distance: {type: Number, required: false},
}, {
    timestamps: true,
});

const Exercise = mongoose.model("Exercise", exerciseSchema)

module.exports = Exercise