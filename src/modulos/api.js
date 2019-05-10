/* eslint-disable no-nested-ternary */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const bd = require('./bd'); // database

const app = express();

const dotenv = require('dotenv');
dotenv.config();

// set env : BDCONFIG=URL
mongoose.connect(process.env.BDCONFIG, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

app.use((error, req, res, next) => {
  if (error !== null) return res.json({ err: ['invalid json'] });
  return next();
});

/*
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
*/

// routes

/*
app.post('/api/fretes/', async (req, res) => res.json({ data: await bd.Insertdb(req.body) }));
app.get('/api/veiculos/', async (req, res) => res.json({ data: await bd.ListData(req.body, 'veiculo') }));
app.get('/api/carroceria/', async (req, res) => res.json({ data: await bd.ListData(req.body, 'carroceria') }));
app.get('/api/estadoso', async (req, res) => res.json({ data: await bd.ListData(req.body, 'estadoorigem') }));
app.get('/api/estadosd', async (req, res) => res.json({ data: await bd.ListData(req.body, 'estadodestino') }));

app.get('/api/cidadeo/:estado', async (req, res) => {
  if (!req.params.estado) res.json({ err: 'Insira o estado' });
  return res.json({ data: await bd.ListCidadesO(req.params.estado) });
});

app.get('/api/cidaded/:estado', async (req, res) => {
  if (!req.params.estado) res.json({ err: 'Insira o estado' });
  return res.json({ data: await bd.ListCidadesD(req.params.estado) });
});

// alterar front >> /api/:id
app.post('/api/filtro/', async (req, res) => {
  // Filtros
  const filtro = {};
  const err = [];
  if (req.body.cidadeorigem) {
    if (req.body.estadoorigem) {
      filtro.cidadeorigem = req.body.cidadeorigem;
      filtro.estadoorigem = req.body.estadoorigem;
    } else err.push('Insira o estado de origem');
  }
  if (req.body.cidadedestino) {
    if (req.body.estadodestino) {
      filtro.cidadedestino = req.body.cidadedestino;
      filtro.estadodestino = req.body.estadodestino;
    } else err.push('Insira o estado de destino');
  }
  if (req.body.veiculo) filtro.veiculo = req.body.veiculo;
  if (req.body.carroceria) filtro.carroceria = req.body.carroceria;

  // Busca os Itens
  const page = req.body.page ? req.body.page > 0 ? req.body.page : 1 : 1;
  const data = await bd.Listdb(filtro, page, 20);
  const maxitens = await bd.Finddb(filtro);
  await res.json({ data, maxitens, err });
});
*/
app.get('/time/', async (req, res) => res.json({ data: { time: await bd.GetTime() }}));

app.delete('/status/:id', async (req, res) => res.json({ data: await bd.DeleteStatus(req.params.id) }));

app.get('*', (req, res) => {
  res.send('<h2>API - Online<h2/>');
});

const porta = (process.env.PORT || 5000)
app.listen(porta, ()=> console.log(`API on port: ${porta}`));

// eslint-disable-next-line no-multi-assign
exports = app;
