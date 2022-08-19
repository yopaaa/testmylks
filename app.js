// --------------------IMPORT------------------
import express from 'express';
import path from 'path';
import mysql from 'mysql';
import fs from 'fs';
//import { myFunction } from './js/myFunction.js';







// --------------------VARIABLE------------------
const app = express();
const __dirname = path.resolve();
const config = JSON.parse(fs.readFileSync("./data/config.json", 'utf8'));
const port = config.port;
const host = config.host;


const connection = mysql.createConnection(config.sql_database);

connection.connect(function(err){

if(!err) {
    console.log("Database is connected ... ");    
} else {
    console.log("Error connecting database ... ");    
}
});


// --------------------FUNCTION------------------
app.get('/',(req,res) => {
    res.sendFile('./souce/index.html', {root: __dirname})
})

app.get('/about',(req,res) => {
    const url = req.url
    console.log(url); 
    
    res.sendFile('./souce/about.html', {root: __dirname})
})

app.get('/wibu',(req,res) => {
    res.sendFile('./souce/wibu.html', {root: __dirname})
})

app.get('/json',(req,res) => {
    res.json({
        sya:"sbsbsbsbsb"
    })
})


app.use('/',(req,res)=>{
    res.status(404);
    res.sendFile('./souce/error.html', {root: __dirname})
})





// --------------------MAIN------------------
app.listen(port,host,()=>{
    console.log(`server is listening in http://${host}:${port}`);
})








