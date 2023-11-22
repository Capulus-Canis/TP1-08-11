const express = require('express')
const app = express ()
app.set("view engine", "ejs")

app.get("/JF", (request, response) => {
    response.render('JF')
})
app.get("/barra", (request, response) => {
    response.render('barra')
})
app.get("/visgueiro", (request, response) => {
    response.render('visgueiro')
})
app.get("/", (request, response) => {
    response.render('inicio')
})

app.listen(8080)