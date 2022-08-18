// --------------------IMPORT------------------
import express from 'express';
import path from 'path';
//import { myFunction } from './js/myFunction.js';







// --------------------VARIABLE------------------
const app = express();
const __dirname = path.resolve();
const port = 8000;
const host = '0.0.0.0';






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








