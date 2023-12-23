import express from 'express'
import { logger } from "./winston.js"

const app = express()
const PORT = 8080

app.get('/', (req, res) => {
    console.log("Probando logs.")
    //logger.error("Probando error.")
    //logger.warn("Probando warn.")
    //logger.info("Probando info.")
    //logger.http("Probando http.")
    //logger.verbose("Probando verbose.")
    //logger.debug("Probando debug.")
    //logger.silly("Probando silly.")
    logger.Fatal("Probando fatal.")
    logger.Warning("Probando warning.")
    logger.Information("Probando information.")
    res.send("Probando Winston.")
})

app.get('/sencilla', function(req, res) {
    let suma = 0
    for (let i = 0; i < 1000000; i++) {
        suma += i    
    }
    res.send({ suma })
})

app.get('/compleja', function(req, res) {
    let suma = 0
    for (let i = 0; i < 5e8; i++) {
        suma += i    
    }
    res.send({ suma })
})

app.listen(PORT, () => {
    logger.Information(`Escuchando el puerto ${PORT}.`)
})