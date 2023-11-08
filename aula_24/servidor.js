const express = require("express");
const app = express();
app.set("view engine","ejs")

app.get('/', (requisicao, resposta) => {
    resposta.render('index')
})
app.get('/obj', (requisicao, resposta) => {
    resposta.render('obj')
})
app.get('/tec', (requisicao, resposta) => {
    resposta.render('tec')
})
app.use((request, response, next) => {
    response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
    console.log(`Servidor funcionando. http://${ip}:${port}`);
});

app.listen(8080)