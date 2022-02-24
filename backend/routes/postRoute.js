const express = require('express')
const router = express.Router()
const { createPost, getAllPosts, getOnePost } = require('../controller/postCtrl')

router.get('/', getAllPosts)

router.get('/:id', getOnePost)

router.post('/',  createPost)


module.exports = router;