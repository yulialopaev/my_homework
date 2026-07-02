import {Product} from "./types";
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
                <p>{product.title} {product.price} NIS</p>
                <div className={"product-quantity"}>

                    <button onClick={() => {
                        if (count > 0) onDecrease()}}>-</button>
                    <p>{count}</p>

                    <button onClick={() => {onIncrease()}}>+</button>
                    <p>{(count * product.price).toFixed(2)} NIS</p>
                </div>

            </div>
        )
    }
}

export default ProductCartClass