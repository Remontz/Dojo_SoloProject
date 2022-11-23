const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000

require('./config/mongoose.config')

app.use(cors(
    { origin: 'http://localhost:3000' }
))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./config/mongoose.config')
require('./routes/user.routes')(app)

app.listen(port, () => console.log(`Listening on port: ${port}`))