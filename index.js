const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123321',
    database: 'Demo'
})

connection.connect(function (err){
    if (err){
        console.log(err.message)
    }
    else {
        console.log('success')
    }
})

const sqlSelect = 'SELECT * FROM customer'
connection.query(sqlSelect,(err,result,fields)=>{
    if (err) throw err;
    console.log(result)
})

const sqlWhere = "SELECT * FROM customer WHERE address = 'QN'"
connection.query(sqlWhere,(err,result,fields)=>{
    if (err) throw err;
    console.log(result)
})

const sqlLimit = 'SELECT * FROM customer LIMIT 4';
connection.query(sqlLimit,(err,result,fields)=>{
    if (err) throw err;
    console.log(result, 'limit')
})