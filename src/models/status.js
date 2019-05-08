const mongoose = require('mongoose');
const StatusSchema = new mongoose.Schema({
    codigo: { type: String, required: true },
    nome: { type: String, required: true },
 });

module.exports = mongoose.model('Status', StatusSchema);
