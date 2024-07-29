import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import errorHandler from './handlers/errorHandler.js'

import {
    registerUserHandler,
    errorHandler,
} from './handlers/index.js'

const { PORT, MONGODB_URL } = process.env

const jsonBodyParser = express.json({ strict: true, type: 'application/json' })

mongoose.connect(MONGODB_URL)
    .then(() => {
        const api = express()
        api.use(cors())

        api.get('/', (_, res) => {
            res.send('hello world')
        })

        api.post('/users', jsonBodyParser, registerUserHandler)

        api.use(errorHandler)

        api.listen(PORT, () => console.log(`Tamo laiiiffff on http://localhost:${PORT}`))
    })
    .catch(error => console.error(error))