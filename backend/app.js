const express = require('express')
const helmet = require('helmet')
const app = express()
const path = require('path')
const postRoute = require('./routes/postRoute.js')
const commentRoute = require('./routes/commentRoute.js')
const userRoute = require('./routes/userRoute.js')
const cors = require('cors')
require('dotenv').config


app.use(helmet()) // security middleware
app.use(cors())

//middlewares
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, 'images')))

//headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    )
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    )
    next()
  })

const port = process.env.PORT || 3000

//Routes
app.use('/vimotiv/posts', postRoute)
app.use('/vimotiv/comments', commentRoute)
app.use('/vimotiv/users', userRoute)

app.listen(port, () => {
    console.log('server listening...')
})