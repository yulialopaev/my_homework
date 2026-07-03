import {Component} from "react";

type CartSummaryClassProps = {
    totalQuantity: number,
    totalPrice: number
}

class CardSummaryClass extends Component<CartSummaryClassProps> {
    render() {
        const {totalQuantity, totalPrice} = this.props


    return (
        <div className="cart-summary">
            <h2>Total Summary:</h2>
            <label>Total items: {totalQuantity}</label>
            <label>Total price: {totalPrice.toFixed(2)} NIS</label>
        </div>
    )
}}

export default CardSummaryClass