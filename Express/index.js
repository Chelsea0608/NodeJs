// const express = require('express');
// const app = express();

// app.get('', (req,resp)=>{
//     console.log(req.query.name);
//     resp.send(`
//     <h1>Hello home</h1>
//     <input type = "text" value = ${req.query.name} />
//     <a href = "/about"> Go to about </a>
//     `)

// })

// app.get('/about', (req,resp)=>{
//     resp.send("Hello about")
// })

// app.listen(5000);


const express = require('express')
const app = express();
const mongoose = require('mongoose')



console.log(mongoose.version); 

app.get('',(req,resp)=>{
    const param = req.query.name;
    resp.send("Hello Welocme" +" "+param)
})

app.get('/about',(req,resp)=>{
    resp.send(`
    <h1>About us</h1>
    <a href="/input">Goto input</a>
    `)
})

app.get('/input',(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="type here"></input>
    <button>Button</button>
    `)
})

app.listen(5000);