import type {Product} from "./types";

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

export default ProductCartFunction