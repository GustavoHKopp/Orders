import Item  from './Items'

export default abstract class TaxItem extends Item{
    constructor(category: string,description: string,price: number
        ){
            super(category,description,price)
    }
    caulculateTax(): number{
        return  this.price * this.getTax()
    }
    abstract getTax(): number
}