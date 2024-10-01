const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use("/api/contatos", require("./routes/contatosRoutes"))

app.listen(port, ()=> {
    console.log(`Server rodando na porta ${port}`)
})