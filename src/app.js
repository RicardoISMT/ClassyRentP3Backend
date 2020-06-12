const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

//módulos body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//módulo das rotas
const router = require('./routes/route.main');
app.use('/', router);

//servidor
app.listen(port, () => console.log('Servidor iniciado!'))