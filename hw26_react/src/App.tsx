import CarCard from "./CarCard";
import {cars} from "./cars"

function App () {
    return (
        <main>
            <header className="page-header">
                <p className="page-label">React + TypeScript</p>
                <h1>Car List</h1>
                <p className="page-intro">
                    List of cars
                </p>
            </header>


            <div>
                {cars.map(car => (
                    <CarCard key={car.serialNumber} car={car}/>
                ))}
            </div>
            <footer className="page-footer">
                <p>Homework 26 · React </p>
            </footer>
        </main>
    )
}

export default App