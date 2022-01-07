import * as express from 'express'
import { Request, Response } from 'express'
import * as cors from 'cors'
import {createConnection} from 'typeorm'
import {Product} from "./entity/product"

createConnection().then((db)=>{

const productRepository = db.getRepository(Product)
const app = express()

app.use(cors({
    origin:['http://localhost:3000','http://localhost:8080','http://localhost:4200']
}))

app.use(express.json())

app.get('/api/products', async (req:Request, res:Response)=>{
    const products = await productRepository.find()
    res.json(products)
})

app.post('/api/products', async(req:Request, res:Response)=>{
    const products = await productRepository.create(req.body)
    const result = await productRepository.save(products)
    return res.json(result)
})

app.get('/api/products/:id', async (req:Request, res:Response)=>{
    const products =  await productRepository.findOne(req.params.id)
    return res.send(products)
})

// app.put('')


console.log(`Listening to port 8000`)
app.listen(8000)

})


