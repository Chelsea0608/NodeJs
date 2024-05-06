//const data = require('./data.js');
//const http = require('http');
import * as http from 'http'; //ES 6
import {data} from "./data.js"

http.createServer( function(req,res){
    res.writeHead(200, 'Content-Type:Application/json');
    res.write(JSON.stringify(data))
    res.end();
}

).listen(4000)