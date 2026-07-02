type CartSummaryFunctionProps = {
    totalQuantity: number,
    totalPrice: number
}
function CardSummaryFunction({totalQuantity, totalPrice}: CartSummaryFunctionProps) {
    return (
        <div className="cart-summary">
            <h2>Total Summary:</h2>
            <p>Total items: {totalQuantity}</p>
            <p>Total price: {totalPrice.toFixed(2)} NIS</p>
        </div>
    )
}

export default CardSummaryFunction