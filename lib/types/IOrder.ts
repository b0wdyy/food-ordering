import { IUser } from './IUser'

export interface IOrder {
    items: IOrderItem[]
    user: IUser
    createdAt: Date
}

export interface IOrderItem {
    name: string
    amount: number
    description?: string
    price: number
}
