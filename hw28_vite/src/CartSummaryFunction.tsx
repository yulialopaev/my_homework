type CartSummaryFunctionProps = {
    totalQuantity: number,
    totalPrice: number
}
function CardSummaryFunction({totalQuantity, totalPrice}: CartSummaryFunctionProps) {
    return (
        <div className="cart-summary">
            <h2>Total Summary:</h2>
            <label>Total items: {totalQuantity}</label>
            <label>Total price: {totalPrice.toFixed(2)} NIS</label>
        </div>
    )
}

export default CardSummaryFunction