// const express = require('express');
// const path = require('path')

// const getpath = path.join(__dirname,"public")
// const app = express();
// app.use(express.static(getpath));



const express = require('express');
const path = require('path');

const dirName = path.join(__dirname,"public")
const app = express();



app.use(express.static(dirName));

app.listen(4000);








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