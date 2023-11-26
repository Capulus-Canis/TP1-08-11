const port = 8080
const express = require("express");
const app = express();
app.set("view engine", "ejs")

app.use('/public', express.static('public'));

app.get("/", (requisicao, resposta) => {
    resposta.render('index')
})
app.get("/barra", (requisicao, resposta) => {
    resposta.render('barra')
})
app.get("/JF", (requisicao,resposta) => {
    resposta.render('JF')
})
app.get("/passagem", (requisicao,resposta) => {
    resposta.render('passagem')
})
app.get("/visgueiro", (requisicao,resposta) => {
    resposta.render('visgueiro')
})
console.log("servidor funcionando na porta:", port)
app.listen(port)