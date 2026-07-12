import {useState} from "react";
import type {WeatherStatus} from "./types.ts";
import Info from "./components/Info.tsx";
import WeatherForm from "./components/WeatherForm.tsx";
import {getWeatherByCity} from "./api/weather.ts";
import WeatherCard from "./components/WeatherCard.tsx";


// App - родительский компонент, получает данные из формы и пробрасывает в WeatherCard для отображения
// Info
// WeatherForm - сюда вводим city
// WeatherCard - отражать данные, который прилетят

function App() {
    const [city, setCity] = useState("")
    const [weatherStatus, setWeatherStatus] = useState<WeatherStatus>({
        type: "idle",
        message: "Enter a city name to see a current weather"
    })

// const [weather, setWeather] = useState()

    const handleWeatherRequest = async (requestCity: string) => {
        if (!requestCity) {
            setWeatherStatus({
                type: "error",
                message: "Please enter a city name"
            })
            return
        }

        setWeatherStatus({
            type: "loading",
            message: "Weather is loading"
        })

        try {
            const weather = await getWeatherByCity(requestCity)
            setWeatherStatus({type: "success", data: weather})
            setCity("")
        } catch (error) {
            setWeatherStatus({
                type: "error",
                message: error instanceof Error ? error.message : "Something went wrong. Try again"})
            }
        }


        return (
            <main className="page">
                <section className="app-shell">
                    <Info/>
                    <WeatherForm
                        city={city}
                        onCityChange={setCity}
                        onSubmit={handleWeatherRequest}
                        isLoading={weatherStatus.type === "loading"}
                    />
                    <WeatherCard status={weatherStatus}/>
                </section>
            </main>
        )
    }

    export default App
