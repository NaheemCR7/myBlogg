const express = require('express')
const { logIn, logOut, signUp } = require('../controller/user')
const router =express.Router()
 
router.get('/login',logIn)
router.get('/logout',logOut)
router.post('/signup',signUp)
module.exports = router
