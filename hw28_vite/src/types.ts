export type Product = {
    id:number,
    title: string,
    price: number
}

export type CartState = {
    [productId: number]: number
}

export type SelectedCartItem = {
    product: Product,
    quantity: number
}