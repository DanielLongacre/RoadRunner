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
    }
})

const Run = model('Run', runSchema)

module.exports = Run;