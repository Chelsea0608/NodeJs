// // const {MongoClient} = require('mongodb')
// // const url= 'mongodb+srv://chelseadabre:ijFBeKoBAfaBxS8k@cluster0.vgzhwmu.mongodb.net/?retryWrites=true&w=majority';
// // const databaseName='e-com'
// // const client= new MongoClient(url);

// // async function getData()
// // {
// //     let result = await client.connect();
// //     db= result.db(databaseName);
// //     collection = db.collection('products');
// //     let data = await collection.find({}).toArray();
// //     console.log(data)


// // }

// //  getData();


// const  { MongoClient } = require('mongodb');
// const url = 'mongodb+srv://chelseadabre:ijFBeKoBAfaBxS8k@cluster0.vgzhwmu.mongodb.net/?retryWrites=true&w=majority'

// const client = new MongoClient(url);

//  function getData(){

//     let result =  client.connect();
//     db= result.db('e-com');
//     collection = db.collection('products');
//     let data =  collection.find({}).toArray();
//     console.log(data)


// }

// getData()

const dbConnect= require('./mongodb');

dbConnect().then((resp)=>{
resp.find({name:''}).toArray().then((data)=>{
console.log(data)
})
})

const main=async ()=>{
   let data = await dbConnect();
   data = await data.find({}).toArray();
   console.log(data)
}

main()
