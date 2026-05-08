console.log("-----Sportloto with Svetlana -----")
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
    // функция получает одно рандомное значение
}

function getSportlotoNumbers(count, min, max) {
    const numbers = []

    while (numbers.lenght < count) {
        const number = getRandomNumber(min, max)

        if (!numbers.includes(number)) {
            numbers.push(number)
        }
    }
    return numbers.sort((a,b) => b - a) // сортировка по убыванию b - a
}

function getMinValue(numbers) {
    return Math.min(...numbers)
    // ...numbers вытряхивает номера из массива
}

function getMaxValue(numbers) {
    return Math.max(...numbers)
}

function getAverageValue(numbers) {
    let sum = 0

    for (const number of numbers) {
        sum += number
    }

    return sum / numbers.length
}

function getEvenCount(numbers) {
    let count = 0

    for (const number in numbers) {
        if (number %2 === 0) {
            count ++
        }
    }
    return count
    )
}

function gerOddCount(numbers) {
    return numbers.length - getEvenCount(numbers)
}

function Statistic(numbers, minFunction, maxFunction, averageFunction) {
    return {
        "Min value": minFunction(numbers),
        "Max value": minFunction(numbers),
        "Average value": Number(averageFunction(numbers).toFixed(1),
        "Even count": getEvenCount(numbers),
        "Odd count": gerOddCount(numbers)
    }
}

