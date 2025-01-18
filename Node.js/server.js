const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
// const server = http.createServer((req,res) => {
//     //set response header with a status code and content type
//     res.writeHead(200,{'content-type': 'text/Plain'});
//     //send response hello world
//     res.end('Hello world23')


// });
const server = http.createServer((req,res)=>{
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error\n');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }else if(req.method === 'POST' && req.url === '/submit'){
        let body = '';
        req.on('data',chunk =>{
            body += chunk.toString();
            console.log('first')
        });
        req.on('end', ()=>{
            const parsedData = querystring.parse(body);
            const csvLine = `${parsedData.name},${parsedData.email},${parsedData.message}\n`;
            console.log('first')
            fs.appendFile('data.csv', csvLine, (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Server Error\n');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Form data saved to CSV file\n');
                }
            });
        })
    }else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found\n');
    }
})



// const fs = require('fs');

// const server = http.createServer((req,res) => {
//     fs.readFile('index.html',(err,data) => {
//         if(err){
            // res.writeHead(500,{'Content-Type': 'text/Plain'});
            // res.end('Server Error\n');
//         }else{
//             res.writeHead(200,{'Content-Type': 'text/html'});
//             res.end(data);
//         }
//     })
// })


// fs.readFile('example.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log('Error reading this file:', err);
//     }else{
//         console.log('file content:',data);
//     }
// })

// fs.writeFile('example.txt','this is initial content',(err)=>{
//     if(err){
//         console.log('Error reading this file:', err);
//     }else{
//         console.log('file created successfully.');
//     }
// })

// fs.appendFile('example.txt','\nHello world',(err)=>{
//     if(err){
//         console.log('Error reading this file:', err);
//     }else{
//         console.log('file created successfully.');
//     }
// })

// fs.unlink('example.txt',(err)=>{
//     if(err){
//         console.log('error',err);
//     }else{
//         console.log('file deleted.')
//     }
// })


server.listen(3000,() => {
    console.log('Server running at http://localhost:3000/');
})


// const url = ''


// const url = require('url');

// http.createServer((req,res) => {
//     const parsedUrl = url.parse(req.url,true);
//     const pathname = parsedUrl.pathname;

//     res.setHeader('Content-Type','text/html');


//     if(pathname == '/'){
//         fs.readFile('index.html',(err,data)=>{
//             if(err){
//                 res.writeHead(500);
//                 res.end('Error loading the home page.');
//             }else{
//                 res.writeHead(200);
//                 res.end(data); 
//             }
//         })
//     }else if(pathname == '/about'){
//         fs.readFile('about.html',(err,data)=>{
//             if(err){
//                 res.writeHead(500);
//                 res.end('Error loading the home page.');
//             }else{
//                 res.writeHead(200);
//                 res.end(data); 
//             }
//         })
//     }else{
//         fs.readFile('Error.html',(err,data)=>{
//             if(err){
//                 res.writeHead(500);
//                 res.end('Error loading the home page.');
//             }else{
//                 res.writeHead(200);
//                 res.end(data); 
//             }
//         })
//     }
// }).listen(3000,() => {
//     console.log('Server running')
// })

// const EventEmitter = require('events');
// const fs = require('fs');
// class Taskprocessor extends EventEmitter{};
// const task = new Taskprocessor();
// class Taskprocessor extends EventEmitter{
//     start() {
//         console.log('Task started');
//         this.emit('start');

//         setTimeout(() => {
//             console.log('Task in process');
//             this.emit('progress',50);


//             setTimeout(() => {
//                 console.log('Task Completed');
//                 this.emit('completed');
//             },2000)
//         },2000)
//     }
// }


// const task = new Taskprocessor();
// task.on('start',()=> {
//     return;
// });
// task.on('progress',(percent)=> console.log(`Event: task is ${percent}% complete.`));
// task.on('completed', ()=> {return;});

// task.start();

// fs.watchFile('example.txt',(curr,prev) => {
//     console.log('file has been changed');
// })
// console.log('watching for changes in file');


