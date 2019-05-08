/* eslint-disable import/no-unresolved */
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const CPUSchema = new mongoose.Schema({
  _id: Number,
  nome: { type: String, required: true },
  status: { 
    data: { type: String, required: true },
    codigo: { type: String, required: true },
  },
}, { _id: false, timestamps: { createdAt: 'created_at' } });

CPUSchema.plugin(AutoIncrement);
module.exports = mongoose.model('CPU', CPUSchema);