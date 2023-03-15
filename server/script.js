const mongoose = require('mongoose')
const Post = require('./db/Posts')

mongoose.connect('mongodb://127.0.0.1:27017/maps')

async function run() {
  const post = await Post.create({
    title: 'post1',
    description: 'content for post 1',
    latitude: -25.344,
    longitude: 131.031,
  })
  console.log(post)
}

run()
