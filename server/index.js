// const db = require('./db/db')
const PORT = process.env.PORT || 3000
const app = require('./app')
const seed = require('../script/seed')
const mongoose = require('mongoose')

// const db = mongoose.connect('mongodb://127.0.0.1:27017/maps')

const init = async () => {
try {
if (process.env.SEED === 'true') {
await seed()
} else {
    // await mongoose.connect('mongodb://127.0.0.1:27017/maps')
// await db.sync()
}
// start listening (and create a 'server' object representing our server)
app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))
} catch (ex) {
console.log(ex)
}
}

init()