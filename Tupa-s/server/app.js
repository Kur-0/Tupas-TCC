const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const TupasModel = require('./models/tupas')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/tupas");

app.post('/register', (req, res) => {
    TupasModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Servidor rodando!")
})