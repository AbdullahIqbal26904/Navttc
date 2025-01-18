// const {MongoClient} = require('mongodb');
const express = require('express');
const {MongoClient}  = require('mongodb');
// const bodyparser = require('body-parser');

const app = express();
const port = 3000;

// app.use(bodyparser.json());

const url = `mongodb://localhost:27017`;
const dbName = "Employee";
let db;

MongoClient.connect(url)
.then((client) => {
    db = client.db(dbName);
    console.log('Mongo db connected.');
})
.catch((err) => {
    console.log('Error occured.',err);
})

app.get('/getdata',async (req,res) => {
    try {
        const employeesCollection = db.collection('emp'); 
        const employees = await employeesCollection.find().project({_id:0}).toArray(); 
        console.log(employees);
        res.json(employees); 
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employees', error });
    } 
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
