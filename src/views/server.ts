import express from 'express'
import { Request, Response } from 'express'

const app = express()
const port = 3333
app.use(express.json())

app.get('/', (_:Request, res:Response) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Sever runing at https://localhost:${port}`)
})

let ProductsMock = [
    {
        name:'Garrafa de agua 500ml',
        id: Math.floor(Math.random() * (5000000000 - 1))
    },
    {
        name:'Caneta preta bic transparente',
        id: Math.floor(Math.random() * (5000000000 - 1))
    },
    {
        name:'lata de tinta Dacar Preto Fosco 900ml',
        id: Math.floor(Math.random() * (5000000000 - 1))
    },
    {
        name:'Girassol de pelucia tocanod saxofone',
        id: Math.floor(Math.random() * (5000000000 - 1))
    },
    {
        name:'Dusha Inox 20cm com Desviador',
        id: Math.floor(Math.random() * (5000000000 - 1))
    }
]

