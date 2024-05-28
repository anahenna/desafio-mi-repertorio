import express from 'express'
import 'dotenv/config'
import path from 'path';
import cancionRoutes from './routes/cancion.route.js'

const app = express()

const __dirname = import.meta.dirname
app.use(express.static(__dirname + '/public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', cancionRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`)
})
