const express = require('express');
const http = require('http');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const OpenAI = require('openai');
//configuraciones
const app = express();
const server = http.createServer(app);
//instalar morgan
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

//asignacion de contenidos
const routerEstructura = require('./api/estructuras'); 
//middleware = app.use('/, function);
app.use('/', routerEstructura);



const port = 4000;

server.listen(port, () => {
    console.log('server is running on port 4000');
});

