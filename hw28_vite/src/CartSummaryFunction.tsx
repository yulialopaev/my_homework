import type {SelectedCartItem} from "./types.ts";
// import {products} from "./data.ts";

type CartSummaryFunctionProps = {
    totalQuantity: number,
    totalPrice: number,
    selectedProducts: SelectedCartItem[];
}
function CardSummaryFunction({totalQuantity, totalPrice, selectedProducts}: CartSummaryFunctionProps) {
    return (
        <div className="cart-summary">
            <h2>Cart Summary:</h2>
            {selectedProducts.length > 0 && (
                <ul className="cart-summary-items">
                    {selectedProducts.map(({ product, quantity}) => (
                        <li key={product.id}>
                            <span>{product.title}</span>
                            <strong>{quantity}</strong>
                        </li>
                    ))}
                </ul>
            )}

            <p><strong>Items in cart:</strong> {totalQuantity}</p>
            <p><strong>Total:</strong> {totalPrice.toFixed(2)} ₪</p>
        </div>
    )
}

export default CardSummaryFunction