const port = 8080
const express = require("express");
const fs = require("fs");

const app = express();
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
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

app.post('/salvar', (req, res) => {
    let nomeuser = req.body.nm
   
    let cadastro = {nm: nomeuser}
    let fileData = JSON.parse(fs.readFileSync(`users.json`))
    fileData.push(cadastro)
    resultado = fs.writeFileSync(`users.json`, JSON.stringify(fileData))
    res.render('index', { resultado })
})
console.log("servidor funcionando na porta:", port)
app.listen(port)