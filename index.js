const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/E-comm');
const ProductSchema = new mongoose.Schema({ name: String, price: Number, brand: String });

const saveInDB = async () => {

    const ProductModel = mongoose.model('products', ProductSchema);
    let data = new ProductModel({ name: 'laptop', price: 1000000, brand: 'new brand' });
    let result = await data.save();
    console.log(result);


}


const updateInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne({ name: 'laptop' }, { $set: { price: '80000' } });
}
// updateInDB();

const deleteInDB = async () => {
    const Product = mongoose.model('products',ProductSchema);
    let data = await Product.deleteOne({id:'63b11fea87d970bed2d29e1d'});
    console.log(data)
}


const findInDB = async () => {
    const Product = mongoose.model('products',ProductSchema);
    let data = await Product.find();
    console.log(data)
}







