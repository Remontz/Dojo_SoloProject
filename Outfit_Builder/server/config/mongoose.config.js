const mongoose = require('mongoose')
const DB = "Outfit_Builder"

mongoose.connect(`mongodb://127.0.0.1/${DB}`)
.then(()=>console.log(`Success, connected to DB: ${DB}`))
.catch((err)=>console.log(`Failure connecting to DB: ${DB} Error: ${err}`))