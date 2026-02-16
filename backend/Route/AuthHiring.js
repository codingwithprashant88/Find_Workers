const express = require('express');
const { workerHiring, getCompany } = require('../controller/AuthCompany');
const router = express.Router()

router.post('/api', workerHiring )
router.get('/get', getCompany )

module.exports = router;