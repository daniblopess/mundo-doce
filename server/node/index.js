const express = require("express")
const cors = require('cors')

const router = require('./src/routes/routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

const porta = 4000

app.listen(porta, () =>{
    console.log(`Aplicação rodando na porta ${porta}`)
})