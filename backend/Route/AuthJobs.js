const express = require('express');
const { seedJobs, getJobs, deleteData  } = require('../controller/FindJob');
const router = express.Router()


router.post('/jobs',  seedJobs )
router.get('/get', getJobs )
router.delete('/delete/:id', deleteData )

module.exports = router;