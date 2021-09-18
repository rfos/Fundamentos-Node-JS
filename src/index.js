const express = require('express');

const app = express();

app.use(express.json());

// app.get('/', function(req, res) {
//     return res.json({success: "Está funcionando"})
// })

app.get('/courses', function(req, res) {

    // Query Params
    // Vai buscar o paramentro enviado na URL, neste caso é determinado pela paginação

    const query = req.query;
    console.log(query);
    
    return res.json(["Curso 1", "Curso 2"])
})



app.post('/courses', function(req, res) {

    const body = req.body;
    console.log(body);

    return res.json(["Resposta do POST 1", "Resposta do POST 2", "Resposta do POST 3"])
})

app.put('/courses/:id', function(req, res) {
    
    // Route Params
    // Vai buscar o paramentro enviado na URL, neste caso é determinado pelo ID

    const RouterParams = {id: req.params.id};
    console.log(RouterParams);

    return res.json(["Curso 16", "Curso 26", "Curso 36"])
})

app.patch('/courses/:id', function(req, res) {
    return res.json(["Curso 32", "Curso 52", "Curso 72"])
})

app.delete('/courses/:id', function(req, res){
    return res.json(["Curso deletado"])
})



app.listen(3333);