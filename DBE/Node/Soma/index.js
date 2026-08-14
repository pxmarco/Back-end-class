const express = require('express');
const app = express();
const path = require('path');

// CONFIGURAR O EXPRESS PARA USAR ARQUIVOS ESTÁTICOS (HTML, CSS, JS)

app.use(express.static(path.join(__dirname, 'public', 'index.html')));

// ROTA PARA A PÁGINA INICIAL
app.get('/', (req, res) => {
    //ROTA
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//ROTA PARA A SOMA
app.get('/somar', (req, res) => {
    //ROTA DO MÉTODO SOMAR
    //RECUPERAR OS NÚMEROS ENVIADOS PELO FORMULÁRIO
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    //REALIZAR A SOMA
    const resultado = num1 + num2;

    //ENVIAR O RESULTADO COMO RESPOSTA
    res.send(`A soma de ${num1} e ${num2} é ${resultado}`);
});

//INICIANDO O SERVIDOR NA PORTA 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));