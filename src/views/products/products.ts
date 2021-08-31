import { Router, Request, Response } from 'express'
import Products from '../../infra/products/product'
import { Cigarette, Beer, Eletronic, Water } from '../../infra/category/items'

const route = Router()
export const products = new Products()

////////get////////


///get productList///
route.get('/products', (_: Request, res: Response) => {
    res.json(products.getProduct())
})

///get product by id///
route.get('/product/:id', (req: Request, res: Response) => {
    res.json(products.getById(req.params.id))
})


////////post////////


///post cigar///
route.post('/product/cigar', (req: Request, res: Response) => {
    const { description, price } = req.body
    const newCigar = new Cigarette(description, price)
    products.addProduct(newCigar)
    res.json(newCigar)
})

///post beer///
route.post('/product/beer', (req: Request, res: Response) => {
    const { description, price } = req.body
    const newBeer = new Beer(description, price)
    products.addProduct(newBeer)
    res.json(newBeer)
})

///post eletronic///
route.post('/product/eletronic', (req: Request, res: Response) => {
    const { description, price } = req.body
    const newEletronic = new Eletronic(description, price)
    products.addProduct(newEletronic)
    res.json(newEletronic)
})

///post water///
route.post('/product/water', (req: Request, res: Response) => {
    const { price, description } = req.body
    const newWater = new Water(description, price)
    products.addProduct(newWater)
    res.json(newWater)
})


////////delete////////


///delete product///
route.delete('/product/:id', (req: Request, res: Response) => {
    const { id } = req.params
    try {
        products.removeByID(id)
        res.json({ message: 'No content', code: 204 })
    } catch (error) {
        res.json({ error: error, code: 400 })
    }
})

export { route }
