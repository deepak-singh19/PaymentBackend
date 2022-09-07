const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    collegeName: {
        type: String,
        required: true,
    },
    yop: {
        type: String,
        required: true,
    },
    stream: {
        type: String,
        required: true,
    },
    tech: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
    streetAddress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    linkedin: {
        type: String,
        required: true,
    },


})

const Student = mongoose.model("MOC", studentSchema);

module.exports = Student;