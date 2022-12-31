const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect('localhost:27017/E-comm');
    const ProductSchema = new mongoose.Schema({ name: String });

    const ProductModel = mongoose.model('products', ProductSchema);
    let data = new ProductModel({ name: 'laptop', price: 1000000 });
    let result = await data.save();
    console.log(result);


}
main();
