import React from "react";

type WeatherTimeProps = {
    time: number;      // Время заката/восхода в секундах (например, data.sunset)[cite: 1, 2]
    timezone: number;  // Сдвиг таймзоны в секундах (data.timezone)
}

const WeatherTime: React.FC<WeatherTimeProps> = ({ time, timezone }) => {
    // 1. Переводим всё в миллисекунды.
    // Складываем базовое время и сдвиг города, чтобы получить "местное" время
    const localTimeInMs = (time + timezone) * 1000;

    // 2. Создаем объект даты
    const targetDate = new Date(localTimeInMs);

    // 3. Форматируем по стандарту UTC!
    // Поскольку мы уже вручную прибавили сдвиг города,
    // говоримintl отображать чистый UTC, иначе браузер добавит еще и твою зону.
    const formattedTime = targetDate.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC" // Это заставит JS не использовать часовой пояс твоего ПК
    });

    return <>{formattedTime}</>;
};

export default WeatherTime;