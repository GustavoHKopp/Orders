import { ItemInterface } from "./interface"


abstract class Item implements ItemInterface{
    category: string
    description: string
    price: number
    id: number
    constructor(category: string,description: string,price: number,
        ){
            this.category = category
            this.description = description
            this.price = price 
            this.id = Math.floor(Math.random() * (5000000000 - 1))
        }
    }


    class Water extends Item{
        constructor(description: string,price: number){
                super('water',description,price)
            }
    }


abstract class TaxItem extends Item{
    constructor(category: string,description: string,price: number
        ){
            super(category,description,price)
    }
    caulculateTax(): number{
        return  this.price * this.getTax()
    }
    abstract getTax(): number
}



class Beer extends TaxItem{
constructor(description: string,price: number
    ){
        super('Beer',description,price)
    }
    getTax(): number{
        return 0.2
    }
}


class Cigarette extends TaxItem{
constructor(description: string,price: number
    ){
        super('Cigarette',description,price)
    }
    getTax(): number{
        return 0.4
    }
}


class Eletronic extends TaxItem{
constructor(description: string,price: number,
    ){
        super('Eletronic',description,price)
    }
    getTax(): number{
        return 0.9
    }
}

class Order{
    code: number 
    itemsList: ItemInterface[]
    taxItems: TaxItem[]

    constructor(){
        this.code = Math.floor(Math.random() * (5000000000 - 1))
        this.taxItems = []
        this.itemsList = []
    }

    getItems(): ItemInterface[]{
        return this.itemsList
    }

    getSubTotal(): number{
        return this.itemsList.reduce((sum, {price}) => sum + price, 0)
    }

    getTaxes(): number{
        return this.taxItems.reduce((sumTax, {getTax}) => sumTax + getTax(), 0)
    }
}


