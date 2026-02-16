const express = require('express')
const router = express.Router()
const {UserGet, UserRegistrationInfo} = require('../controller/AuthRegisController');
const { fetchUserInfo } = require('../Middlewares/FetchUser');
const { RegistrationValidation } = require('../Middlewares/UserValidation');


router.get('/fetchuser',fetchUserInfo ,UserGet )
router.post('/Registration',fetchUserInfo,RegistrationValidation ,UserRegistrationInfo )

module.exports = router;