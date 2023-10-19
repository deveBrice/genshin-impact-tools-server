const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
   // userId: {type: Schema.ObjectId, ref: 'User' },
    num: { type: Number, required: true },
    name: { type: String, required: true },
    picture: { type: String, required: true },
    alt: { type: String, required: true },
    location: { type: String, required: true },
    rarety: { type: String, required: true },
    color: { type: String, required: true },
    weapon: {
        picture: { type: String, required: true },
        alt: { type: String, required: true }
    },
    element: {
        picture: { type: String, required: true },
        alt: { type: String, required: true }
    }
});

module.exports = mongoose.model('Character', characterSchema);