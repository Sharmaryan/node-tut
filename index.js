const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect('mongodb://localhost:27017/E-comm');
    const ProductSchema = new mongoose.Schema({ name: String, price: Number, brand:String });

    const ProductModel = mongoose.model('products', ProductSchema);
    let data = new ProductModel({ name: 'laptop', price: 1000000, brand:'new brand' });
    let result = await data.save();
    console.log(result);


}
main();
