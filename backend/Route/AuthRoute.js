const express = require('express')
const router = express.Router()
const {Signup, Login} = require('../controller/AuthController')
const {SignupValidation, LoginValidation} = require('../Middlewares/UserValidation')

router.post('/signup', SignupValidation ,Signup)
router.post('/login', LoginValidation ,Login)


module.exports = router;