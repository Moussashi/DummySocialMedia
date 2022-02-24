const mysql = require('mysql')

const connection = mysql.createConnection({
    connectionLimit: 20,
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'Vi-Motiv'
})
connection.connect( function(err) {
    if (!err) {
        console.log('connection to database');
    } else {
        console.log('connection to database failed');
    }
})

module.exports = connection