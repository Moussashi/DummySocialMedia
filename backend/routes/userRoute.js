const express = require('express')
const router = express.Router()
const { addUser, getUsers } = require('../controller/userCtrl')

router.get('/', getUsers);
router.post('/', addUser);

module.exports = router;