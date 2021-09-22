import { Categories } from './../../infra/category/index';
import { Router, Request, Response } from "express";
import Order from "../../infra/orders/order";
import { products } from '../products/products'

const route = Router()
const order = new Order()
const category = new Categories()

////////get////////


///get all Orders///
route.get('/order', (_: Request, res: Response) => {
    res.json(order.getOrders())
})

///get Order and prices///
route.get('/order/:code', (req: Request, res: Response) => {
    res.json(order.getOrderByCode(req.params.code))
})

///get total///
route.get('/order/price/:code', (req: Request, res: Response) => {
    const { code } = req.params
    res.json(order.getTotal(code))
})

///get Taxes///
route.get('/order/taxes/:code', (req: Request, res: Response) => {
    const { code } = req.params
    res.json(order.getTaxes(code))
})

///get Subtotal///
route.get('/order/subtotal/:code', (req: Request, res: Response) => {
    const { code } = req.params
    res.json(order.getSubTotal(code))
})

///get Category///
route.get('/category', (_: Request, res: Response) => {
    res.json(category.getCategory)
})


////////post////////


///new Order///
route.post('/add-order', (req: Request, res: Response) => {
    const productList = req.body
    res.json(order.addOrder(productList))
})

///new Item in Order///
route.post('/order/:code/:id', (req: Request, res: Response) => {
    const { code, id } = req.params
    const [product] = products.getById(id)
    res.json(order.addItem(product, code))
})


////////delete////////


///delete Item in Order///
route.delete('/order/:code/:id', (req: Request, res: Response) => {
    const { code, id } = req.params
    res.json(order.removeItem(id, code))
})

///delete full Order///
route.delete('/order/:code', (req: Request, res: Response) => {
    const { code } = req.params
    order.removeOrder(code)
    res.json({ message: 'No content', code: 204 })
})

export { route }

