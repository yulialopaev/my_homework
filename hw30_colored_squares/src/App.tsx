import SmallSquares from "./components/SmallSquares.tsx";
import BigSquare from "./components/BigSquare.tsx";
import {useState} from "react";


function App() {
    const [boxColor, setBoxColor] = useState("white")

    return (
        <main>
      <BigSquare color={boxColor}/>
       <SmallSquares onColorClick={setBoxColor}/>
    </main>
    )
}

export default App
