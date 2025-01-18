const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index3.html');
});
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
app.post('/add-data',(req,res)=>{
    const {name,cnic,course,grade,cgpa} = req.body;
    const query = `INSERT INTO stds(Name,CNIC,Course,Grade,GPA) VALUES(?,?,?,?,?)`;
    db.query(query,[name,cnic,course,grade,cgpa],(err,res)=>{
        if(err) throw err;
        console.log(res);
    })
})
const PORT = 3000;
app.listen(PORT,() => {
    console.log('server running at http://localhost:3000');}
)