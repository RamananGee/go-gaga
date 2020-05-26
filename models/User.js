const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    location: {
        type: String
    },
    current_relationship_status: {
        type: String
    }
});

module.exports = User = mongoose.model('User', UserSchema);