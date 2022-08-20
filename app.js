// --------------------IMPORT------------------
import express from 'express';
import mysql from 'mysql';
import fs from 'fs';
//import { myFunction } from './js/myFunction.js';







// --------------------VARIABLE------------------
const app = express();
const config = JSON.parse(fs.readFileSync("./data/config.json", 'utf8'));
const port = config.port;
const host = config.host;




const connection = mysql.createConnection(config.sql_database);

connection.connect(err => {
    if (err) throw err;
    console.log("Connected!") 
});


app.set('view engine', 'ejs')


    
// --------------------FUNCTION------------------
app.get('/',(req,res) => {
    res.render('home', {
        title: 'home',
        })
   
})

app.get('/about',(req,res) => {
    const url = req.url
    console.log(url); 
    
    res.render('about')
})

app.get('/wibu',(req,res) => {
    res.render('wibu')
})

app.get('/database',(req,res) => {
    switch (req.query.db) {
        case 'sql':
            connection.query('SELECT * FROM user_details', function (err, result) {
                if (err) throw err;
        
                res.render('database/sql', {
                  title: 'sql database',
                  data:result
                  })
            }); 
            break;
    
        default:
            res.render('database')
            break;
    }
})


app.use('/',(req,res)=>{
    res.status(404);
    res.render('error')
})





// --------------------MAIN------------------
app.listen(port,host,()=>{
    console.log(`server is listening in http://${host}:${port}`);
})








