import { ItemDTO } from './ItemItenterface';

export default interface OrderDTO {
  code: number
  items: ItemDTO[]
}