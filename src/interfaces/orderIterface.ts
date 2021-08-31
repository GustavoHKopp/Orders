import { ItemDTO } from './ItemItenterface';

export default interface OrderDTO {
  code: string
  items: ItemDTO[]
}