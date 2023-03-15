const User = require('../server/models/User')
const Post = require('../server/models/Post')
const db = require('../server/db/db')
const mongoose = require('mongoose')

async function seed() {
    //dropping the db
    //if this does not work we could google more stuff later
    //--------------THIS IS THE PROBLEM-------------
    await User.deleteMany({})
    await Post.deleteMany({})
    // await db.Post.drop()
    // creating 
    const users = await Promise.all([
        User.create({ username: 'jessie', password: '123' }),
        User.create({ username: 'mandy', password: '123' }),
        User.create({ username: 'erica', password: '123' }),
        User.create({ username: 'alicia', password: '123' }),
        ])
    const posts = await Promise.all([
        Post.create({ title: 'Hi, its me', description: 'im the problem, its me',
        tags: ['#food', '#life', '#song'], latitude: 234, longitude: 345.963 
        })
    ])
    }

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