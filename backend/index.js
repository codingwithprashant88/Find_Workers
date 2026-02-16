const express = require('express');
const app = express();
const dotenv = require('dotenv');
const AuthRoute = require('./Route/AuthRoute')
const AuthRegisRoute = require('./Route/AuthRegisRoute')
const AuthJobs = require('./Route/AuthJobs')
const AuthHiring = require('./Route/AuthHiring')
const cors = require('cors')
require('./Models/db')

dotenv.config();

const port = process.env.PORT || 5000;
app.use(express.json())
app.use(cors())
app.use('/auth', AuthRoute)
app.use('/api', AuthRegisRoute)
app.use('/find', AuthJobs)
app.use('/hiring', AuthHiring)


app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});