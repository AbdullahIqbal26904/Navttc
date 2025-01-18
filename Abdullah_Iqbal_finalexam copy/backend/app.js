const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.json());

const url = `mongodb+srv://abdullahiqbal1505:6kktWOHfQwZNpQ4H@cluster0.l3fjv.mongodb.net/`;
const dbName = `restaurant`;

const client = new MongoClient(url);
const db = client.db(dbName); // select database
async function connectToMongodb() {
  try {
    await client.connect();
    console.log('Successfully connected to MongoDB.');
    console.log(`Database: ${db.databaseName} is ready.`);
    const collections = await db.collection('restaurants'); // select table name
    const orders = await collections.find({}).toArray();
    console.log('Orders:', orders);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToMongodb();

app.get('/getdata', async (req, res) => {

  try {
    const collections = await db.collection('restaurants'); // select table name
    const alldata = await collections.find({}).toArray();
    // console.log('Orders:', orders);
    res.json(alldata);
  }
  catch (err) {
    console.log('error', err);
  }
})


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
