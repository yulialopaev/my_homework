type SmallSquareProps = {
    backgroundColor: string
    onClick: (backgroundColor: string) => void
}

function SmallSquares({backgroundColor, onClick}: SmallSquareProps) {
    const colors = ["red", "blue", "green", "yellow", "black", "brown"]

    const SmallButtons = colors.map(color =>
        <button type={"button"}
                key={color}
                style={{
                    backgroundColor: color,
                border: color === backgroundColor ? "5px solid rgba(55, 65, 81, 0.3)" : "5px solid white"}}
                onClick={() => onClick(color)}></button>)
    return (
        <div className={"small-container"}>
            {SmallButtons}
        </div>

    )
}
export default SmallSquares