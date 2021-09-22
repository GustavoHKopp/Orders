import TaxItem from "../isTaxItem/TaxItems"

export default class Beer extends TaxItem {
    constructor(description: string, price: number
    ) {
        super('Beer', description, price)
    }
    getTax(): number {
        return 0.2
    }
}