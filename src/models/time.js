const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const TimeSchema = new mongoose.Schema({ _id: Number, time: { type: Number, required: true }, }, { _id: false, timestamps: { createdAt: 'created_at' } });

TimeSchema.plugin(AutoIncrement);
module.exports = mongoose.model('Time', TimeSchema);
