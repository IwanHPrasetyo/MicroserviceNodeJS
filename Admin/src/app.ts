import * as express from 'express'
import * as cors from 'cors'

const app = express()
app.use(cors({
    origin:['http://localhost:3000','http://localhost:8080','http://localhost:4200']
}))


console.log('hello again')