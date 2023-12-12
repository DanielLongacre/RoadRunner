const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const runSchema = new Schema({
    distance: {
        type: Number,
        required: true,
        trim: true
    },
    time: {
        type: Number,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    }
})

const Run = model('Run', runSchema)

module.exports = Run;