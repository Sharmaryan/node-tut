const dbConnect = require('./mongodb');

const deleteData = async() => {
    let data = await dbConnect();
    let result = await data.deleteMany({brand:'new lenovo'})
    // console.log(data);
    if(result.acknowledged){
        console.log('records deleted')
    }
}

deleteData();