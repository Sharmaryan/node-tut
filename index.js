const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/random.txt`;

// write file
// fs.writeFileSync(filePath,'this is random text file');

// read file
// fs.readFile(filePath,'utf-8',(err,file) => {
// console.log(file);
// });

// update file
// fs.appendFile(filePath,'updated file with this text',(err) => {
//     if(!err)
//     console.log('file update successfully');
// })

// rename file

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if (!err)
//         console.log('file renamed successfully');
// })

// delete file

// fs.unlinkSync(`${dirPath}/fruit.txt`);

