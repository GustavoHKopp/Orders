import Item  from '../isTaxItem/Items'

export default class Water extends Item{
    constructor(description: string,price: number){
            super('water',description,price)
        }
}
