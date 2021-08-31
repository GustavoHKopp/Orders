import TaxItem from "../isTaxItem/TaxItems"

export default class Eletronic extends TaxItem{
    constructor(description: string,price: number,
        ){
            super('Eletronic',description,price)
        }
        getTax(): number{
            return 0.9
        }
    }