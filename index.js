const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('Muito Bem, Rodou!');
});

app.listen(port, function () {
    console.log('Rodando na porta ' + port);
});
