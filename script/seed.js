const User = require('../server/models/User')
const Post = require('../server/models/Post')
const db = require('../server/db/db')
const mongoose = require('mongoose')

// this is the seed function
async function seed() {
    console.log('deleting table content!')
    await User.deleteMany({})
    await Post.deleteMany({})
    console.log('table contents have been deleted!')
    
    console.log('seeding users')
    
    const users = await Promise.all([
        User.create({ username: 'jessie', password: '123' }),
        User.create({ username: 'mandy', password: '123' }),
        User.create({ username: 'erica', password: '123' }),
        User.create({ username: 'alicia', password: '123' }),
      ])
    console.log('user seeded')

    console.log('seeding posts')
    const posts = await Promise.all([
        Post.create({ title: 'Hi, its me', description: 'im the problem, its me',
        tags: ['#food', '#life', '#song'], latitude: 234, longitude: 345.963 
        })
    ])
    console.log('posts seeded')
    }

// this is the function that runs the seed
    async function runSeed() {
        console.log('seeding...')
        try {
          await seed()
        } catch (err) {
          console.error(err)
          process.exitCode = 1
        } 
        finally {
          console.log('closing db connection')
          await mongoose.disconnect()
          console.log('db connection closed')
        }
    }

runSeed()