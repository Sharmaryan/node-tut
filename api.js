const express = require('express');
const dbConnect = require('./mongodb');

const app = express();
app.use(express.json())

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
});

app.post('/', async (req, res) => {
    console.log(req.body)
    let data = await dbConnect();
    let result = await data.insert(req.body);
    res.send(result);
})

app.put('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.updateOne({ name: "laptop" }, { $set: req.body })
    console.log(result)
    res.send({ result: 'update' })
})

app.delete('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.deleteOne(req.body)
    console.log(result)
    res.send({ result: 'deleted' })
})


app.listen(5000)
