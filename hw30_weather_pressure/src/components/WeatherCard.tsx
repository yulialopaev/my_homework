import type {WeatherStatus} from "../types.ts";
import WeatherTime from "./WeatherTime.tsx";

type WeatherCardProps = {
    status: WeatherStatus
}

function WeatherCard({status}: WeatherCardProps) {
    if (status.type === "idle" || status.type === "loading") {
        return (
            <section className="message-card">{status.message}</section>
        )
    }

    if (status.type === "error") {
        return <section className="message-card message-card--error">{status.message}</section>
    }

    const {data} = status

    return (
        <section className="message-card">
            <div>
                <p className="message-card__label">Location</p>
                <h2>
                    {data.city}, {data.country}
                </h2>
                <p className="weather-card__description">{data.description}</p>
            </div>
            <p className="weather-card__temp">{Math.round(data.temperature)} °C</p>
            <dl className="weather-grid">
                <div>
                    <dt>Feels like: </dt>
                    <dd>{Math.round(data.feels_like)} °C</dd>
                </div>
                <div>
                    <dt>Pressure: </dt>
                    <dd>{data.pressure} hPa</dd>
                </div>
                <div>
                    <dt>Humidity: </dt>
                    <dd>{data.humidity} %</dd>
                </div>
                <div>
                    <dt>Wind: </dt>
                    <dd>{data.windSpeed} m/s</dd>
                </div>
                <div>
                    <dt>Sunset: </dt>
                    <dd><WeatherTime time={Number(data.sunset)} timezone={Number(data.timezone)} /></dd>
                </div>
            </dl>
        </section>
    )
}

export default WeatherCard