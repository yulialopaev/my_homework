type BigSquareProps = {
    color: string
}

function BigSquare({color}: BigSquareProps) {


    return (
        <div className={"big-container"}>
            <div className={"big-square"} style={{backgroundColor: color}}></div>
        </div>
    )
}

export default BigSquare
