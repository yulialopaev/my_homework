export type WeatherStatus =
    | { type: "idle", message: string }
    | { type: "loading", message: string }
    | { type: "success", data: WeatherInfo }
    | { type: "error", message: string }


export type WeatherInfo = {
    city: string,
    country: string,
    temperature: number,
    feels_like: number,
    // uvi: number,
    pressure: number,
    humidity: number,
    windSpeed: number,
    description: string,
    sunset: number,
    timezone: number
}

export type OpenWeatherResponse = {
    name: string
    timezone: number
    weather: Array<{ description: string }>
    main: {
        temp: number
        feels_like: number
        pressure: number
        humidity: number
        // uvi: number
    }
    wind: { speed: number }
    sys: {
        country: string
        sunset: number
    }
    cod: number | string
    message?: string
}