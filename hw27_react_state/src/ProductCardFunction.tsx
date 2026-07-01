import {Product} from "./types";
import {useState} from "react";

type ProductCardFunctionProps = {
    product: Product
}

function ProductCardFunction({product}: ProductCardFunctionProps) {
    const [count, setCount] = useState(0)

    return (
        <div className={"product-row"}>
            <p>{product.title} {product.price} NIS</p>
            <div className={"product-quantity"}>
                <button onClick={() => setCount(count > 0? count - 1: 0)}>-</button>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>+</button>
                <p>{(count * product.price).toFixed(2)} NIS</p>
            </div>

        </div>
    )
}

export default ProductCardFunction