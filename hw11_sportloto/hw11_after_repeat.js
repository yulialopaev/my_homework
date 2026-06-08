let min = 1
let max = 36

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// const number = getRandomInteger(min, max)
// console.log(number)

let results = []
while (results.length < 5) {
    let result = getRandomInteger(min, max)
    if (!results.includes(result)) {
        results.push(result)
    }
}
results.sort((a,b) => {
    return a-b
})


console.log(results)

function getMin(array) {
    let minValue = array[0]
    for (let i = 0; i < array.length; i++) {
        let currentValue = array[i]
        if (currentValue < minValue) {
            minValue = currentValue
        }

    }
    return minValue
}

console.log(getMin(results))

function getMax(array) {
    let maxValue = array[0]
    for (let i = 0; i < array.length; i++) {
        let currentValue = array[i]
        if (currentValue > maxValue) {
            maxValue = currentValue
        }
    }
    return maxValue
}

console.log(getMax(results))

function getAverage(array) {
    let sum = 0
    for (const value of array) {
        sum += value
    }
    return parseFloat((sum / array.length).toFixed(2))
}

const average = getAverage(results)
console.log(average)

function getOddNumbers(array) {
    let oddArray = array.filter((value) => (value % 2))
    return oddArray.length
}

console.log(getOddNumbers(results))

function getEvenNumbers(array) {
    const evenArray = array.filter((value) => !(value % 2))
    return evenArray.length
}



function getStatistic(array, funcMin, funcMax, funcAvg, funcOdd, funcEven) {
    return {
        "Min value": funcMin(array),
        "Max value": funcMax(array),
        "Average": funcAvg(array),
        "Odd numbers": funcOdd(array),
        "Even numbers": funcEven(array)
    }
}

const object = getStatistic(results, getMin, getMax, getAverage, getOddNumbers, getEvenNumbers)
console.log(object)

alert(
    `All numbers: ${results}\n` +
    `Min value: ${object["Min value"]}\n` +
    `Max value: ${object["Max value"]}\n` +
    `Average value: ${object["Average"]}\n` +
    `Odd numbers: ${object["Odd numbers"]}\n` +
    `Even numbers: ${object["Even numbers"]}`
)

