import express from 'express'
import { route as productRoutes } from './products/products'
import { route as orderRoutes } from './order/order'
import cors from 'cors'
const app = express()
const port = 3333
app.use(express.json())
app.use(cors())
app.use(productRoutes, orderRoutes)


app.listen(port, () => {
    console.log(`Sever runing at http://localhost:${port}`)
})




