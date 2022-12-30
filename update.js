const dbConnect = require('./mongodb');

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.update({ brand: 'dell' }, { $set: { brand: 'new dell' } });
    console.log(result)
}

updateData();