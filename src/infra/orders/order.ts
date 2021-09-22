import { ItemDTO } from './../../interfaces/ItemItenterface';
import TaxItem from "../category/isTaxItem/TaxItems"
import OrderDTO from "../../interfaces/orderIterface"
import Item from '../category/isTaxItem/Items';

export default class Order {

  orderList: OrderDTO[] = []

  //added
  //tested
  getOrders(): OrderDTO[] {
    return this.orderList
  }

  //added
  //tested
  addItem(item: ItemDTO, orderCode: string): OrderDTO | void {
    for (let order of this.orderList) {
      if (orderCode === order.code) {
        order.items.push(item)
        return order
      }
    }
    throw new Error('order Undefined, try create a new order')
  }

  //added
  //tested
  addOrder(productList: ItemDTO[]): OrderDTO {
    let newOrder = {
      code: `${Math.floor(Math.random() * (5000000000 - 1))}`,
      items: productList
    }

    this.orderList.push(newOrder)
    return newOrder
  }

  //added
  //tested
  getOrderByCode(orderCode: string): {} {
    const order = this.orderList.filter(({ code }) => code === orderCode)
    const value = this.getTotal(orderCode)
    return { order, value: value }
  }

  //added
  //tested
  getSubTotal(orderCode: string): number {
    let SubTotal = 0
    for (const order of this.orderList) {
      if (orderCode === order.code) {
        SubTotal = order.items.reduce((sum, { price }) => sum + price, 0)
      }
    }
    return SubTotal
  }

  //added
  getTaxes(orderCode: string): number {
    let taxes = 0
    for (const order of this.orderList) {
      if (orderCode === order.code) {
        for (const item of this.orderList) {
          if (item instanceof TaxItem) {
            taxes += item.getTax()
          }
        }
      }
    }
    return taxes
  }

  //added
  getTotal(orderCode: string): number {
    let total = 0
    for (const order of this.orderList) {
      if (orderCode === order.code) {
        total = this.getTaxes(orderCode) + this.getSubTotal(orderCode)
      }
    }
    return total
  }

  //added
  //tested
  removeItem(id: string, orderCode: string) {
    for (const order of this.orderList) {
      if (order.code === orderCode) {
        order.items = order.items.filter((item) => item.id !== id)
        return order
      }
    }
    throw new Error('Order must be defined and exist on db')
  }

  //added
  //tested
  removeOrder(orderCode: string) {
    this.orderList = this.orderList.filter(({ code }) => code !== orderCode)
  }
}