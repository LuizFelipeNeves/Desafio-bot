const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const StatusSchema = new mongoose.Schema({
    id: Number,
    codigo: { type: String, required: true },
    nome: { type: String, required: true },
 }, { _id: false, timestamps: { createdAt: 'created_at' } });

StatusSchema.plugin(AutoIncrement,{ id: 'status', inc_field: '_id'});
module.exports = mongoose.model('Status', StatusSchema);
