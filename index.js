const express = require('express');
const app = express();

app.listen(5000);

app.get('/',(req,res) => {
    res.send('this is home page');
});

app.get('/about',(req,res) => {
    res.send('this is about page');
});

app.get('/help',(req, res) => {
    res.send('this is help page');
});
