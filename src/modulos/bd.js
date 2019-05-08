/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
const mongoose = require('mongoose');
const moment = require('moment');
moment.locale('pt-br');

const Time = require('../models/time');
const CPU = require('../models/cpu');
const Status = require('../models/status');

require('dotenv').config({path:'.env'})

// BDCONFIG= URL

mongoose.connect(process.env.BDCONFIG, { useNewUrlParser: true });

module.exports = {
  async  GetTime() {
    const data = await Time.findOne({});
    if(!data) {
      const json = {time: 5}
      await Time.create(json);
      return await json.time;
    }
    return await data.time
  },
  async Listdb(query, pages, perPage) {
    return CPU.find(query).skip(perPage * (pages - 1)).limit(perPage);
  },
  async RandomStatus() {
    const data = moment().format('LLL');
    const qtd = await Status.countDocuments({});
    const random = await Math.floor((Math.random() * qtd) + 1);
    const nome = await Status.findOne({}).skip(random-1)
    if(nome) if(nome.codigo !== null) return { data, 'codigo': nome.codigo };
    return { data, 'codigo': 'indefinido' };
  },
  async UpdateCPU(id, body) {
    await console.log(id, body);
    return CPU.updateOne({ _id: id }, { $set: body })
  },
  async NewStatus(nome, codigo) {
    await Status.create({ nome, codigo });
  },
  async UpdateStatus(id, body) {
    return Status.updateOne({ _id: id }, { $set: body })
  },
  async DeleteStatus(id) {
    return Status.deleteOne({ _id: id })
  },   
  async NewCPU(body) {
    await CPU.create(body);
  },
  async DeleteCPU(id) {
    return CPU.deleteOne({ _id: id })
  }
};
