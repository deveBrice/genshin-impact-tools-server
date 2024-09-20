const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
   // userId: {type: Schema.ObjectId, ref: 'User' },
    num: { type: Number, required: false },
    name: { type: String, required: true },
    element: { type: String, required: true },
    characterPicture: {
        url: { type: String, required: true },
        alt: { type: String, required: true }
    },
    weapon: { type: String, required: true },
    rarety: { type: String, required: true },
    region: { type: String, required: true },
    color: { type: String, required: true },
    weaponPicture: {
        url: { type: String, required: true },
        alt: { type: String, required: true }
    },
    elementPicture: {
        url: { type: String, required: true },
        alt: { type: String, required: true }
    }
});

module.exports = mongoose.model('Character', characterSchema);