const mongoose = require("mongoose")

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    set: {type: Number, required: false},
    repetitions: {type: Number, required: false},
    exercise: {type: String, required: true},
    weight: {type: Number, required: false},
    duration: {type: Number, required: false},
    distance: {type: Number, required: false},
    date: {type: Date, required: true}
}, {
    timestamps: true,
});

const Exercise = mongoose.model("Exercise", exerciseSchema)

module.exports = Exercise