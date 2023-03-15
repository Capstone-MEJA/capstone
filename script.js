const mongoose = require('mongoose')
const User = require('./User')

mongoose.connect('mongodb://127.0.0.1:27017/maps')

async function run() {
  const user = await User.create({
    name: 'Alicia',
    password: '123',
    posts: ['this is the first post', 'second'],
  })
  console.log(user)
}

run()
