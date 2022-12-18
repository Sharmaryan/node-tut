const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, 'public');
const app = express();

app.get('/', (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`);
});

app.get('/about', (_, resp) => {
    resp.sendFile(`${publicPath}/about.html`);
});

app.get('/help', (_, resp) => {
    resp.sendFile(`${publicPath}/help.html`);
});

app.listen(5000);


