export interface IMenu {
    [key: string]: IMenuItem[]
}

export interface IMenuItem {
    name: string
    price: number
    description?: string
}
