const randomizer = () => Math.floor(Math.random() * 36 + 1)

const randomFive = quantity => {
    let randomArray = []

    while (randomArray.length < quantity) {
        let result = randomizer()
        if (!randomArray.includes(result)) {
            randomArray.push(result)
            alert(`Number ${randomArray.length} is ${result}`)
        }
    }

    return randomArray.sort((a, b) => b - a)
}

const getMax = array => Math.max(...array)
const getMin = array => Math.min(...array)

const getAverage = array => array.reduce((sum, num) => sum + num, 0) / array.length

const getEvenOdd = array => array.reduce((sum, num) => {

}

function getStatistic(myArray, getMin, getMax, getAverage, getEvenOdd) {
    let evenOdd = getEvenOdd(myArray)
    return {
        "Min value": getMin(myArray),
        "Max value": getMax(myArray),
        "Average": getAverage(myArray),
        "Even": evenOdd.even,
        "Odd": evenOdd.odd
    }
}



function showStatistic(stat) {
    alert(
        "Min value: " + stat["Min value"] + "\n" +
        "Max value: " + stat["Max value"] + "\n" +
        "Average: " + stat["Average"] + "\n" +
        "Even: " + stat["Even"] + "\n" +
        "Odd: " + stat["Odd"]
    )
}

let myArray = randomFive(5)

console.log(myArray)
console.log(getMax(myArray))
console.log(getMin(myArray))
console.log(getAverage(myArray))

console.log(getStatistic(myArray, getMin, getMax, getAverage, getEvenOdd))
showStatistic(getStatistic(myArray, getMin, getMax, getAverage, getEvenOdd))

