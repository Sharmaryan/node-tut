const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, 'public');
const app = express();

app.set('view engine','ejs');

app.get('/', (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`);
});

app.get('/profile', (_, resp) => {
    const user = {name:'aryan', lastName:'sharma',city:'ghaziabad'};
    resp.render('profile',{user});
});

app.get('/about', (_, resp) => {
    resp.sendFile(`${publicPath}/about.html`);
});

app.get('/help', (_, resp) => {
    resp.sendFile(`${publicPath}/help.html`);
});

app.get('*', (_, resp) => {
    resp.sendFile(`${publicPath}/pagenotfound.html`);
});

app.listen(5000);


