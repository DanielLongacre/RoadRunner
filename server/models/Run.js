const {Schema, model} = require('mongoose');

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
        default: Date.now
    }
})

const Run = model('Run', runSchema)

module.exports = Run;