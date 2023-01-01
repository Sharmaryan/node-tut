const mongoose = require('mongoose');

const saveInDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/E-comm');
    const ProductSchema = new mongoose.Schema({ name: String, price: Number, brand: String });

    const ProductModel = mongoose.model('products', ProductSchema);
    let data = new ProductModel({ name: 'laptop', price: 1000000, brand: 'new brand' });
    let result = await data.save();
    console.log(result);


}


const updateInDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/E-comm');
    const ProductSchema = new mongoose.Schema({ name: String, price: Number, brand: String });
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne({ name: 'laptop' }, { $set: { price: '80000' } });
}
updateInDB();