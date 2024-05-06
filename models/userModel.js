const mongoose = require("mongoose");
var schema = mongoose.Schema;

const userModel = new schema({
    name: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    city: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('userModel', userModel);