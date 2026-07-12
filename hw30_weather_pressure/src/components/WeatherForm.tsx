import type {FormEvent} from "react";

type WeatherFormProps = {
    city: string
    onCityChange: (city: string) => void
    onSubmit: (city: string) => void
    isLoading: boolean
}

function WeatherForm({city, onCityChange, onSubmit, isLoading}: WeatherFormProps) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit(city.trim())
    }

    return (
        <form className="weather-form" onSubmit={handleSubmit}>
            <label htmlFor="city">City</label>
            <div className="weather-form__row">
                <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Haifa"
                    value={city}
                    onChange={(e) => onCityChange(e.target.value)}/>
                <button disabled={isLoading} type="submit">
                    {isLoading ? "Loading..." : "Show Weather"}
                </button>
            </div>
        </form>
    )
}

export default WeatherForm