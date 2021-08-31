import { ItemDTO } from "../../interfaces/ItemItenterface";

export default class Products {
    productList: ItemDTO[] = []

    getProduct(): ItemDTO[] {
        return this.productList
    }
    addProduct(item: ItemDTO): void {
        this.productList.push(item)
    }
    getById(id: string): ItemDTO[] {
        let product = this.productList.filter((item) => item.id === id)
        return product
    }
    removeByID(id: string): void {
        this.productList = this.productList.filter((item) => item.id !== id)
    }
}
