import type {Product} from "./types";
import {Component} from "react";

type ProductCartClassProps = {
    product: Product,
    count: number,
    onIncrease: () => void,
    onDecrease: () => void
}

class ProductCartClass extends Component<ProductCartClassProps> {
    render() {
        const {product, count, onIncrease, onDecrease} = this.props

        return (
            <div className={"product-row"}>
                <p className={"product-title"}>{product.title}</p>
                <p>Price: {product.price} NIS</p>
                <span className={"product-quantity"}>

                <button className={"count-button"} onClick={() => {
                    if (count > 0) onDecrease()}}>-</button>
                <label>{count}</label>

                <button className={"count-button"} onClick={() => {onIncrease()}}>+</button>
                <p>Total: {(count * product.price).toFixed(2)} NIS</p>
            </span>

            </div>
        )
    }
}

export default ProductCartClass