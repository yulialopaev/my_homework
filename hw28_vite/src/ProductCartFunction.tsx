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
            <label>{product.title} {product.price} NIS</label>
            <span className={"product-quantity"}>

                <button className={"count-button"} onClick={() => {
                    if (count > 0) onDecrease()}}>-</button>
                <label>{count}</label>

                <button className={"count-button"} onClick={() => {onIncrease()}}>+</button>
                <label>{(count * product.price).toFixed(2)} NIS</label>
            </span>

        </div>
    )
}

export default ProductCartFunction