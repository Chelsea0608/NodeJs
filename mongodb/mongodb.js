const { MongoClient } = require('mongodb');
const url= 'mongodb+srv://chelseadabre:MeHf3d75As6b3H9y@cluster0.vgzhwmu.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

module.exports = async function connectDB() {
    let result = await client.connect();
    let db = result.db('e-com');
    return db.collection('products');
}

// async function getData() {
//     let data = await connectDB();
//     data =  await data.find({}).toArray();
//     console.log(data);
// }

// async function insertData(){
//     let data = await connectDB();
//     let inserted = await data.insertMany([
//         {name:'max 5',brand:'micromax',price:420,category:'mobile'},
//         {name:'max 6',brand:'iphone',price:520,category:'mobile'},
//         {name:'max 7',brand:'samsung',price:620,category:'mobile'},
//     ])
//     if(inserted.acknowledged)
//     {
//         console.log("data is inserted")
//     }

// }


// async function updateData(){
//     let data = await connectDB();
//     let res = await data.updateOne(
//         { name: 'max 7'},
//         {
//                 $set: {
//                 name: 'max 8',
//                 brand: 'pixel',
//                 price: 800,
//                 }
//         }
//     )
//     console.log(res);
// }

// const deleteData=async ()=>{
//     let data = await connectDB();
//     let result = await data.deleteMany({name:'max 7'})
//     console.log(result)
    
//     }
     
   


// getData();
// // insertData();
// updateData();
// deleteData();