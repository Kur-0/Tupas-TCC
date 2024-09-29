const mongoose = require('mongoose')

const TupasSchema = new mongoose.Schema({
    email: String,
    password: String
})

const TupasModel = mongoose.model("users", TupasSchema)
module.exports = TupasModel