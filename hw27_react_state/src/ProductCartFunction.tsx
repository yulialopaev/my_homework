import {Product} from "./types";

type ProductCardFunctionProps = {
    product: Product,
    count: number,
    onIncrease: () => void,
    onDecrease: () => void
}

function ProductCartFunction({product, count, onIncrease, onDecrease}: ProductCardFunctionProps) {
    // const [count, setCount] = useState(0)

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

export default ProductCartFunction