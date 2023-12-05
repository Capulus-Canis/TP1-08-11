const port = 8080;
const express = require("express");
const fs = require("fs");

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

let fileData = JSON.parse(fs.readFileSync(`users.json`));

app.get("/", (requisicao, resposta) => {
  resposta.render("index");
});
app.get("/barra", (requisicao, resposta) => {
  resposta.render("barra");
});
app.get("/JF", (requisicao, resposta) => {
  resposta.render("JF");
});
app.get("/passagem", (requisicao, resposta) => {
  resposta.render("passagem");
});
app.get("/visgueiro", (requisicao, resposta) => {
  resposta.render("visgueiro");
});

app.post("/salvar", (req, res) => {
  let nomeuser = req.body.nm;
  let locuser = req.body.loc;
  let valuser = req.body.val;
  let teluser = req.body.tel;

  let cd = { nm: nomeuser, loc: locuser, val: valuser, tel: teluser };
  console.log(cd);
  console.log("\n" + JSON.stringify(cd + ","));
  fileData.push(cd);
  resultado = fs.writeFileSync(`users.json`, JSON.stringify(fileData));
  res.redirect('/ler')
});
app.get("/ler", (req, res) => {
  const dados = fs.readFileSync("users.json", "utf8");
  const datajson = JSON.parse(dados)
  res.render("confirm", { data: datajson });
});
console.log("servidor funcionando na porta:", port);
app.listen(port);
