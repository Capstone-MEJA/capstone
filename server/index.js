// const mongoose = require('mongoose')
// const Post = require('./db/Posts')

// mongoose.connect('mongodb://127.0.0.1:27017/maps')

// async function run() {
//   const post = await Post.create({
//     title: 'post1',
//     description: 'content for post 1',
//     latitude: -25.344,
//     longitude: 131.031,
//   })
//   console.log(post)
// }

// run()

const { db } = require('./db')
const PORT = process.env.PORT || 8080
const app = require('./app')
const seed = require('../script/seed')

const init = async () => {
try {
if (process.env.SEED === 'true') {
await seed()
} else {
await db.sync()
}
// start listening (and create a 'server' object representing our server)
app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))
} catch (ex) {
console.log(ex)
}
}

init()