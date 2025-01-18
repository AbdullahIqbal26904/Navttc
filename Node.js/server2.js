const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'test'
});

db.connect((err) =>{
    if(err) {console.log('error',err); throw err;}
    else console.log('my sql is connected');
});

app.get('/abc',(req,res) => {
    let sql = 'SELECT * FROM Users';
    db.query(sql,(err,result) => {
        if(err) throw err;
        // show the output in key value pair
        res.json(result);
        console.log(res.json(result));
    })
});

app.listen(3000,() => {
    console.log('server running at http://localhost:3000/Client');
})

// var selectquery = 'SELECT * FROM Users';
// db.query(selectquery,(err,result) => {
//     if(err) throw err;
//     console.log(result)
// })