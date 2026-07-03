import type {Product} from "./types";
import {Component} from "react";

type ProductCartClassProps = {
    product: Product,
    count: number,
    onIncrease: (id: number) => void,
    onDecrease: (id: number) => void
}

class ProductCartClass extends Component<ProductCartClassProps> {
    render() {
        const {product, count, onIncrease, onDecrease} = this.props

        return (
            <div className={"product-row"}>
                <p className={"product-title"}>{product.title}</p>
                <p>Price: {product.price} ₪</p>
                <span className={"product-quantity"}>

                <button className={"count-button"} onClick={() => {
                    if (count > 0) onDecrease(product.id)}}>-</button>
                <label>{count}</label>

                <button className={"count-button"} onClick={() => {onIncrease(product.id)}}>+</button>
                <p>Total: {(count * product.price).toFixed(2)} ₪</p>
            </span>

            </div>
        )
    }
}

export default ProductCartClass