function randomizer() {
    return Math.floor(Math.random() * 36 + 1)
}

function randomFive(quantity) {
    let randomArray = []
    for (let i = 0; i < quantity; i++) {
        let result = randomizer()
        if (randomArray.includes(result)) {
            i--
        } else {
            randomArray.push(result)
            alert("Number " + (i+1) + " is " + result)
        }
    }

    return randomArray.sort((a, b) => b - a)
}

function getMax(array) {
    return Math.max(...array)
}

function getMin(array) {
    return Math.min(...array)
}

function getAverage(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length
}

function showStatistic(myArray, getMin, getMax, getAverage, getEvenOdd) {
    let min = getMin(myArray)
    let max = getMax(myArray)
    let average = getAverage(myArray)
    let evenOdd = getEvenOdd(myArray)

    alert(
        "Min value: " + min + "\n" +
        "Max Value: " + max + "\n" +
        "Average: " + average + "\n" +
        "Even: " + evenOdd.even + "\n" +
        "Odd: " + evenOdd.odd
    )

    return {
        "Min value": min,
        "Max Value": max,
        "Average": average,
        "Even": evenOdd.even,
        "Odd": evenOdd.odd
    }
}

function getEvenOdd(array) {
    let even =  array.filter(function (digit) {return !(digit % 2)}).length
    let odd = array.filter(function (digit) {return (digit % 2 )}).length
    return { even: even, odd: odd}
}

let myArray = randomFive(5)

console.log(myArray)
console.log(getMax(myArray))
console.log(getMin(myArray))
console.log(getAverage(myArray))

console.log(showStatistic(myArray, getMin, getMax, getAverage, getEvenOdd))

