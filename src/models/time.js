const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const TimeSchema = new mongoose.Schema({
    _id: Number,
    time: Number 
}, { _id: false, timestamps: { createdAt: 'created_at' } });

TimeSchema.plugin(AutoIncrement,{ id: 'time', inc_field: '_id'});
module.exports = mongoose.model('Time', TimeSchema);

