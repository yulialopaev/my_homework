type SmallSquaresProps = {
    onColorClick: (c: string) => void
}

function SmallSquares({onColorClick}: SmallSquaresProps) {

    return (
        <div className={"small-container"}>
        <button id="red-button"
                type="button"
                onClick={() => onColorClick("red")}></button>
        <button id="blue-button"
                type="button"
                onClick={() => onColorClick("blue")}></button>
        <button id="green-button"
                type="button"
                onClick={() => onColorClick("green")}
                ></button>
        <button id="yellow-button"
                type="button"
                onClick={() => onColorClick("yellow")}
                ></button>
    </div>
    )
}

export default SmallSquares

