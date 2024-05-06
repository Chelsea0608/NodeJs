const fs = require('fs');
const path = require('path');

const dirName = path.join(__dirname,'/Crud');
console.log(dirName)


fs.writeFileSync(dirName+'/hello.txt',"HelloCD")

fs.readFile(dirName+'/hello.txt', 'utf-8', function(err,item){
    console.log(item)
})


// fs.appendFile(dirName+'/hello.txt',"dfff" , function(err){

// })

// fs.rename(dirName+'/hello2.txt', dirName+'/hello.txt' ,function(err,item){
//     console.log(item);
// })

// fs.unlink(dirName+'/hello.txt' ,function(err,item){
//     console.log(item);
// })