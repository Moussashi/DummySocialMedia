const mysql = require('mysql')
const connection = require('../controller/DB')
const brypt = require('bcryptjs')
const bcrypt = require('bcryptjs/dist/bcrypt')
const jwt = ('jsonwebtoken')

const pool = mysql.createPool({
    connectionLimit: 20,
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'Vi-Motiv'
})

/*****************************************
 ***************  Signup  ****************
 *****************************************/

const addUser = async (req, res) => {

    //hashing passwords
    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = {
        "username": req.body.username,
        "email": req.body.email,
        "password": hashedPassword,
        "profile_picture": req.body.profile_picture
    }

    //query
    connection.query('INSERT INTO users SET ?', user, (err, results) => {
        if (err) {
            res.json({
                status: false,
                message: 'problem registering new user'
            })
        } else {
            res.json({
                status: true,
                data: results,
                message: 'New user registered sucessfully'
            })
        }
    })


}

/*****************************************
 ***************  Login  *****************
 *****************************************/



/*****************************************
 ***********  Get All Users  *************
 *****************************************/

 const getUsers =  async (req, res) => {

    pool.getConnection( async (err, connection) => {
        if (err) throw err

        connection.query('SELECT * from users', (err, rows) => {
            connection.release()

            if(!err) {
                res.header()
                res.send(rows)
            }else {
                res.status(401).json({
                    message: 'error in query'
                })
            }
        })
    })
 }

 module.exports = {
     addUser,
     getUsers
 }