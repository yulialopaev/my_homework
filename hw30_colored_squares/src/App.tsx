import {useState} from 'react'
import BigSquare from './components/BigSquare'
import SmallSquares from "./components/SmallSquares.tsx";
import {generateRandomColor} from "./use_cases/generateRandomColor.ts";
import RandomColorSquare from "./components/RandomColorSquare.tsx";


function App() {
    const [color, setColor] = useState("white")

    const handleChangeColor = (color: string) => {
        setColor(color)
    }

    const handleRandomColor = () => {
        setColor(generateRandomColor())
    }

    return (
        <>
            <BigSquare color={color}/>
            <SmallSquares backgroundColor={color} onClick={handleChangeColor}/>
            <RandomColorSquare backgroundColor={color} onClick={handleRandomColor}/>
        </>
    )
}

export default App
