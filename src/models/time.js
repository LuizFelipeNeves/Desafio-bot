const mongoose = require('mongoose');
const TimeSchema = new mongoose.Schema({ time: Number });

module.exports = mongoose.model('Time', TimeSchema);
