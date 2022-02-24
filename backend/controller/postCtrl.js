const mysql = require('mysql')
const connection = require('../controller/DB')

const pool = mysql.createPool({
    connectionLimit: 20,
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'Vi-Motiv'
})

//GET ALL POSTS
const getAllPosts = async (req, res) => {
    pool.getConnection( async (err, connection) => {
        if (err) throw err

        connection.query('SELECT * from Posts', (err, rows) => {
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

//GET ONE POST
const getOnePost = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err

        //query
        connection.query('SELECT * from Posts WHERE id = ?' [req.params.id], (err, rows) => {
            connection.release() // return connection pool

            if (!err) {
                res.send(rows)
            } else {
                res.send(err)
            }
        })
    })
}

//CREATE POST

const createPost = (req, res) => {

    pool.getConnection((err, connection) => {
        //good date format
        const postdate = new Date().toISOString().slice(0, 19).replace('T', ' ')

        const params = {
            id_user: req.body.id_user,
            from_user: req.body.from_user,
            title: req.body.title,
            text: req.body.text,
            date: postdate
        }
        //query
        connection.query('INSERT INTO Posts SET ?', params, (err, rows) => {
            console.log('query passed');
            connection.release() //return connection pool
            console.log('connection release');
            if (!err) {
                res.send(`new post with the title ${params.title} has been added`)
            } else {
                res.json({
                    message: 'problem with creation'
                })
                throw err
            }
        })

    })
}

module.exports = {
    createPost,
    getAllPosts,
    getOnePost
}