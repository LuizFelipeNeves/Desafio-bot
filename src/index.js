const http = require('http');

require('./modulos/api');

// don`t sleep heroku, get every 5 minutes (300000)
//setInterval(() => { http.get('http://pcsdevapi.herokuapp.com'); }, 300000);