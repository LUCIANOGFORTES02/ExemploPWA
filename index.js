var express = require('express');
var app = express();

app.set('view engine','ejs');//Qual template engine vamos usar 
//Esse midleware é usado para servir arquivos estáticos
app.use(express.static('public'));//Configuração para servir arquivos estáticos a partir do diretório 'public'

app.get('/page2',function(req,res){
    res.render('../views/page2');
})

app.get('/',function(req,res){
    res.render('../views/index');
})

app.get('/offlinePage',function(req,res){
    res.render('../views/offlinePage');
})

app.listen(3000,function (){
    console.log('Executando na porta 3000');
})