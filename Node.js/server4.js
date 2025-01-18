const express = require('express');
const {MongoClient} = require('mongodb');
const app = express();
const url = `mongodb://localhost:27017`;

const dbName = "Employee";

const client = new MongoClient(url);

async function connect4() {
    try{
        await client.connect();
        console.log('Database connected!'); 
        const db = client.db(dbName);
        const collection = db.collection('emp');
        
        const document = await collection.find({}).toArray();
        // console.log(document);

        const employes = await collection.find({}).project({_id:0,empno:1}).toArray();
        console.log(employes);
        console.log(employes.length);

        //Condition number 1
        const empsal = await collection.find({sal:{$gt:1500}}).project({_id:0,ename:1,sal:1,deptno:1,empno:1,job:1}).toArray();
        console.log('Condition 1: ',empsal);
        //Condition number 2 sal > 1500 and <4000
        const empsal2 = await collection.find({$and:[{sal:{$gt:1500}},{sal:{$lt:4000}}]}).project({_id:0,ename:1,empno:1,sal:1}).sort({sal:-1}).toArray();
        console.log('SEcond condition: ',empsal2);

        const empInc = await collection.find({sal:{$lt:4000}}).project({_id:0,empno:1,ename:1,sal:1,"Increment":{$add: ["$sal",1000 ]}}).toArray();
        console.log(empInc);

        const startwithk = await collection.find({$and:[{ename:{$regex: /^k/i}},{ename:{$regex: /g$/i}}]}).project({_id:0}).toArray();
        console.log(startwithk);
    }catch (err){
        console.log(err);
        console.error('Error connecting to mongodb');
    }finally{
        await client.close();
    }
}
connect4();
