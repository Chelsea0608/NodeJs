const dbConnect = require('./mongodb');
const express = require('express')
const app = express();

app.get("/",async (req,resp)=>{
    let data = await dbConnect();
    data = await data.find({}).toArray();
    resp.send(data);

    // resp.send(data);
})

app.put("/insert",async (req,resp)=>{
    let data = await dbConnect();
    data = await data.updateOne(
        {"name": "max 8"},
        {
            $set:{
                "name": "max 8",
                "brand": "pixel8",
                "price": 800,
            }
        }
    )
    console.log(data)

})





// app.post("/", async (req,resp)=>{
//     let data = await dbConnect();
//     let result = await data.insertOne(req.body)
//     resp.send(result)

// })


// app.put("/:name", async (req, resp) => {
//     console.log(req.body)
//     const data = await dbConnect();
//     let result = data.updateOne(
//         { name: req.params.name },
//         { $set: req.body }
//     )
//     resp.send({ status: "updated" })
// })


// app.delete("/:id", async (req,resp)=>{
//     console.log(req.params.id);
//     const data = await dbConnect();
//     const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
//     resp.send(result)
// })

app.listen(5000)