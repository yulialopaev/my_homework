import {Component} from "react";
import {Car} from "./types";

type CarCardClassProps = {
    car: Car
}

export class CarCardClass extends Component<CarCardClassProps> {
    render() {
        const {car} = this.props

        return (
            <article className="car-card">
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
}

export default CarCardClass
