import { ItemDTO } from './../interfaces/ItemItenterface'
import TaxItem from "../isTaxItem/TaxItems"
import OrderDTO from "../interfaces/orderIterface"

export default class Order implements OrderDTO{
    code: number
    items: ItemDTO[]

    constructor(){
        this.code = Math.floor(Math.random() * (5000000000 - 1))
        this.items = []
    }

    addItem(item: ItemDTO) {
        this.items.push(item)
      }

      getOrders(): OrderDTO {
        const order = { items: this.items, code: this.code }
        return order
      }

    getItems(): ItemDTO[]{
        return this.items
    }

    getSubTotal(): number{
        return this.items.reduce((sum, {price}) => sum + price, 0)
    }

    getTaxes(): number {
        let taxes = 0
        for (const item of this.items) {
          if (item instanceof TaxItem) {
            taxes += item.getTax()
          }
        }
        return taxes
    }

    getTotal(): number{
        return this.getSubTotal() + this.getTaxes()
    }

    removeItem(id: number){
      return this.items = this.items.filter((item) => item.id !== id)
    }
}

