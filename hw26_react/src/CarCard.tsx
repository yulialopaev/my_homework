import {Car} from "./types";

type CarCardProps = Readonly<{
    car: Car
}>

function CarCard({car}: CarCardProps) {
    return(
        <article className = "car-card">
            <section className="car-content">
                <h2>{car.serialNumber}</h2>

                <dl className="car-details">
                    <div>
                        <dt>Manufacturer</dt>
                        <dd>{car.manufacturer}</dd>
                    </div>

                    <div>
                        <dt>Model</dt>
                        <dd>{car.model}</dd>
                    </div>

                    <div>
                        <dt>Year</dt>
                        <dd>{car.year}</dd>
                    </div>
                </dl>
            </section>
        </article>
    )
}

export default CarCard