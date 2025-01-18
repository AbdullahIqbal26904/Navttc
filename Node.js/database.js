const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'test'
});

connection.connect((err) =>{
    if(err) throw err;
    console.log('Connected to mysql server');
});
// const createTableQuery = `
// CREATE TABLE IF NOT EXISTS Users(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     Name varchar(100),
//     email varchar(100)
// )`;

// connection.query(createTableQuery, (err,result)=> {
//     if(err) {
//         throw err;
//     }else{
//         console.log('Table created successfully');
//     }
// })


// const insertQuery = `INSERT INTO Users(Name,Email) VALUES ('John Doe','John@example.com')`;
// connection.query(insertQuery, (err,result)=> {
//     if(err) {
//         throw err;
//     }else{
//         console.log('Value inserted successfully');
//     }
// })

// const selectQuery = `SELECT * FROM Users`
// connection.query(selectQuery, (err,result)=> {
//     if(err) {
//         throw err;
//     }else{
//         console.log('displayed');
//         console.log(result);
//     }
// })

const UpdateQuery = `UPDATE Users SET Name = 'ABDULLAH',Email = 'Abdullah@example.com' WHERE id = 1`;
connection.query(UpdateQuery, (err,result)=> {
    if(err) {
        throw err;
    }else{
        console.log('Updated');
    }
});

const deletQuery = `DELETE FROM Users WHERE id = 2`;
connection.query(deletQuery, (err,result)=> {
    if(err) {
        throw err;
    }else{
        console.log('deleted');
    }
});


