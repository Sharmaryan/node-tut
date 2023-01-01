const express = require('express');
require('./config');

const Products = require('./product');

const app = express();
app.use(express.json());

app.post('/create', async (req, res) => {
    let data = new Products(req.body);
    let result = await data.save();
    console.log(result)
    res.send(result)
})

app.get('/list', async (req, res) => {
    let data = await Products.find();
    res.send(data);

})

app.delete('/delete/:_id', async (req, res) => {
    let data = await Products.deleteOne(req.params);
    res.send(data);

})

app.put('/update/:_id', async (req, res) => {
    let data = await Products.updateOne(req.params,{$set:{name:'y 20'}});
    res.send(data);

})





app.listen(5000);