const express = require('express');

// const app = express();

app.get('/',(req,res) => {
    res.send('hello world');
})

app.get('/abc',(req,res) => {
    res.send('hello world2');
})

app.listen(3003,() => {
    console.log('server running at localhost:3003')
})