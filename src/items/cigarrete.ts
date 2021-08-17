import TaxItem from "../isTaxItem/TaxItems"

export default class Cigarette extends TaxItem{
    constructor(description: string,price: number
        ){
            super('Cigarette',description,price)
        }
        getTax(): number{
            return 0.4
        }
    }