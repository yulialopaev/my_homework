import type {Product} from "./types";

type ProductCardFunctionProps = {
    product: Product,
    count: number,
    onIncrease: (id: number) => void,
    onDecrease: (id: number) => void
}

function ProductCartFunction({product, count, onIncrease, onDecrease}: ProductCardFunctionProps) {
    // const [count, setCount] = useState(0)

    return (
        <div className={"product-row"}>
            <p className={"product-title"}>{product.title}</p>
                <p>Price: {product.price} ₪</p>
            <span className={"product-quantity"}>

                <button className={"count-button"} onClick={() => {
                    if (count > 0) onDecrease(product.id)}}>-</button>
                <label>{count}</label>

                <button
                    className={"count-button"}
                    onClick={() => {onIncrease(product.id)}}>+</button>
                <p>Total: {(count * product.price).toFixed(2)} ₪</p>
            </span>

        </div>
    )
}

export default ProductCartFunction