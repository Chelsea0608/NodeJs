const express = require('express')

const app = express();


const filterPath = (req,resp,next) =>{
    if(!req.query.age){
        resp.send(`<h1>No age</h1>`)
    }
    else{
        next();
    }
}

///app.use(filterPath);

app.get('/about', filterPath, (req, resp) => {     //single route middleware
    resp.send(`<h1>about page</h1>`)
});


app.get('', (req, resp) => {
    resp.send(`<h1>Home page</h1>`)
});


app.listen(5000);

