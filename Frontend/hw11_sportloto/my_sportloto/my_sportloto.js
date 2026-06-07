// ==========================================
// DOM Elements section
// ==========================================

const title = document.querySelector("#title")
const buttonStart = document.querySelector("#buttonStart")
const buttonGetNumber = document.querySelector("#buttonGetNumber")
const numberContainer = document.querySelector("#numberContainer")
const listContainer = document.querySelector("#listContainer")

const minValue = document.querySelector("#minValue")
const maxValue = document.querySelector("#maxValue")
const avgValue = document.querySelector("#avgValue")
const oddNumbers = document.querySelector("#oddNumbers")
const evenNumbers = document.querySelector("#evenNumbers")
const statistic = document.querySelector("#statistic")
const message = document.querySelector("#message")

buttonGetNumber.style.display = "none"

let min = 1
let max = 36
let ballsNumber = 5
let results = []

title.textContent = `Hello! Welcome to Sportloto game ${ballsNumber} from ${max}`
// ==========================================
// Helper functions (Math & Array calculations)
// ==========================================

// Generates a random integer between min and max (inclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Finds the minimum value in an array.
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

// Finds the maximum value in an array.
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

// Calculates the average value of an array's elements.
function getAverage(array) {
    let sum = 0
    for (const value of array) {
        sum += value
    }
    return parseFloat((sum / array.length).toFixed(2))
}

// Counts the number of odd numbers in an array.
function getOddNumbers(array) {
    let oddArray = array.filter((value) => (value % 2))
    return oddArray.length
}

// Counts the number of even numbers in an array.
function getEvenNumbers(array) {
    const evenArray = array.filter((value) => !(value % 2))
    return evenArray.length
}

// Renders the calculated statistics to the DOM.
function getStatistic(array, funcMin, funcMax, funcAvg, funcOdd, funcEven) {
    statistic.textContent = "Let's see statistic:"
    minValue.textContent = `Min value: ${funcMin(array)}`
    maxValue.textContent = `Max value: ${funcMax(array)}`
    avgValue.textContent = `Average value: ${funcAvg(array)}`
    oddNumbers.textContent = `Odd numbers: ${funcOdd(array)}`
    evenNumbers.textContent = `Even numbers: ${funcEven(array)}`
}


// ==========================================
// Event Listeners
// ==========================================

// Initialize the game session
buttonStart.addEventListener("click", () => {
    buttonStart.disabled = true
    buttonGetNumber.style.display = "inline-block"

    numberContainer.textContent = ""
    listContainer.textContent = ""
    message.textContent = ""
    statistic.textContent = ""
    minValue.textContent = ""
    maxValue.textContent = ""
    avgValue.textContent = ""
    oddNumbers.textContent = ""
    evenNumbers.textContent = ""
    results = []
})

// Handle number generation and game flow
buttonGetNumber.addEventListener("click", () => {
    message.textContent = "Winning combination:"

    // Continue drawing numbers until we have 5 unique ones
    if (results.length < ballsNumber) {
        const number = getRandomInteger(min, max)
        numberContainer.textContent = String(number)
        if (!results.includes(number)) {
            results.push(number)
        }

        // Display current array.
        listContainer.textContent = results.toString()
    }

    // Check if the game is over (5 unique numbers collected)
    if (results.length === ballsNumber) {
        // Hide the draw button to prevent further actions
        buttonGetNumber.style.display = "none"

        // Calculate and display final statistics
        getStatistic(results, getMin, getMax, getAverage, getOddNumbers, getEvenNumbers)

        buttonStart.disabled = false
    }
})

