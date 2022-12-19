const express = require('express');
const app = express();

const requestFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send('please provide age');
    }
    else if(req.query.age < 18){
        res.send('you cannot access this page')
    }
    else {
        next();
    }
}

app.use(requestFilter);

app.get('/', (req, res) => {
    res.send('welcome to home page');
})

app.listen(5000);


