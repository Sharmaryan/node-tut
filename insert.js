const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insert([
        {
        name: 'laptop', brand: 'lenovo', price: 40000
    },
        {
        name: 'laptop', brand: 'dell', price: 400000
    },
        {
        name: 'laptop', brand: 'apple', price: 40000000
    },
        {
        name: 'laptop', brand: 'kuch bhi', price: 40000
    },

])
    console.log(result)
    if (result.acknowledged) {
        console.log('data inserted')
    }
    // console.log('insert function')
}

insert();