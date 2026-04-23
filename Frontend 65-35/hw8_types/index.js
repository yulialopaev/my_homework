// --- Task 1. Weird Sum ---
function weirdSum(a, b) {
    // добавить проверку на входной тип!!!
    if (typeof a === 'boolean') {
        a = Number(a)
    }
    if (typeof b === 'boolean') {
        b = Number(b)
    }

    return a + b
}


// Tests:
console.log(weirdSum(5, 6))
console.log(weirdSum('5', 6))
console.log(weirdSum(true, 5))
console.log(weirdSum(false, '5'))
console.log('---------------------------------------------------------')


// --- Task 2. Dangerous Comparison ---

function compare(a, b) {
    let result1 = (a == b)
    let result2 = (a === b)

    return (`== ${result1}, === ${result2}`)
}

// Tests:
console.log(compare(false, 0))
console.log(compare(NaN, NaN))
console.log(compare(undefined, undefined))
console.log(compare(null, null))
console.log(compare(5, null))
console.log(compare('2', 2))
console.log(compare(5, 3))
console.log(compare())
console.log('---------------------------------------------------------')


// --- Task 3. Real Number Check
function isRealNumber(value) {
    if (typeof value == 'number' || typeof value == 'string') {
        if (value === '') return false

        if (!isNaN(Number(value))) return true

        return false
    }

    return false
}


// Tests:
console.log(isRealNumber(''))
console.log(isRealNumber(NaN))
console.log(isRealNumber('hello'))
console.log(isRealNumber('123'))
console.log(isRealNumber(123))
console.log(isRealNumber(undefined))
console.log(isRealNumber(true))
console.log('---------------------------------------------------------')


// --- Task 4. Truthy or Falsy ---
function checkValue(value) {
    if (Boolean(value)) return (`Value is truthy`)

    return (`Value is falsy`)

}

// Tests:
console.log(checkValue(0))
console.log(checkValue('hello'))
console.log(checkValue(''))
console.log(checkValue([]))
console.log('---------------------------------------------------------')


// --- Task 5. Smart Greeting ---
function greet(name) {
    if (typeof name !== 'string') return 'Error'
    if (name === '') return 'Hello, stranger'
    return `Hello, ${name}`
}

// Tests:
console.log(greet('Anna'))
console.log(greet(''))
console.log(greet(123))
console.log(greet(true))
console.log('---------------------------------------------------------')


// --- Task 6. Simple Calculator ---
function calc(a, b, op) {
    if ((typeof a === 'number' || typeof a === 'string')
        && (typeof b === 'number' || typeof b === 'string')) {

        let num_a = +a
        let num_b = +b

        if (isNaN(num_a) || isNaN(num_b)) return 'Error'

        if (op === '+') return num_a + num_b
        if (op === '-') return num_a - num_b
        if (op === '*') return num_a * num_b
        if (op === '/') {
            if (num_b === 0) return 'Error'
            return num_a / num_b
        }
        return 'Unknown operation'
    }
    return 'Error'
}

// Tests:
console.log(calc(5, 2, '+'));        // 7
console.log(calc(2026, 1986, '-'));  // 40
console.log(calc(594, 20, '*'));     // 11880
console.log(calc(5, 0, '/'));        // Error
console.log(calc(5, '0', '/'));      // Error (на ноль делить нельзя)
console.log(calc(5, 2, '%'));        // Unknown operation
console.log(calc('5', 5, '+'));      // 10
console.log('---------------------------------------------------------');


// --- Task 7. Explain the Output ---
console.log([] == false)
// -> true ([] converts to "" converts to 0, false converts to 0 -> 0 == 0 -> true)

console.log([] === false)
// -> false (type of [] - 'object', type of false - 'boolean' -> 'object' != 'boolean')

console.log("" == 0)
// -> true ("" converts to 0 -> 0 == 0 -> true)

console.log("" === 0)
// -> false (type of "" is 'string' and type of 0 is 'number' -> 'string' != 'number')

console.log(null == 0)
// -> false (null only equals null and undefined, nothing else -> false)

console.log(null == undefined)
// -> true (special rule in JavaScript - null and undefined are only equal to each other)
console.log('---------------------------------------------------------')


// --- Task 8. Type Trick ---
function getType(value) {
    if (value === null) return 'null'
    return typeof value
}

// Tests:
console.log(getType(10))
console.log(getType('10'))
console.log(getType(true))
console.log(getType(null))
console.log(getType(undefined))
console.log(getType(NaN)) // :) so strange: Not a Number is a number :)
console.log(getType([]))
console.log(getType({}))
console.log('---------------------------------------------------------')


// --- Task 9. String Repeater ---
function repeat(str, n) {
    if (typeof str !== 'string') return 'Error'
    if(typeof n !== 'number') return 'Error'
    if (n <= 0) return ''

    let result = ''
    // for (начало; условие; шаг)
    for (let i = 0; i < n; i = i + 1) {
        result += str
    }
    return result
}

// Tests:
console.log(repeat("hi", 3))
console.log(repeat("a", 0))
console.log(repeat(5, 3))
console.log(repeat('5', 6))
console.log('---------------------------------------------------------')


// --- Task 10. First Non-Empty Value
function firstTruthy(a, b, c) {
    if (a) return a
    if (b) return b
    if (c) return c
    return null
}

// Tests:
console.log(firstTruthy(10, 0, 2))
console.log(firstTruthy(0, "", "hello"))
console.log(firstTruthy(null, false, 5))
console.log(firstTruthy(0, "", null))
console.log('---------------------------------------------------------')


// --- Task 11. Safe Division
function safeDivide(a, b) {
    // проверка типов (не стринг и не намбер)
    let a_num = +a
    let b_num = +b

    if (isNaN(a_num)) return 'Error'
    if (isNaN(b_num)) return 'Error'

    if (b_num == 0) return 'Error'

    return a_num / b_num
}

// Tests:
console.log(safeDivide(10, 2))
console.log(safeDivide('10', '2'))
console.log(safeDivide('hello', 2))
console.log(safeDivide(10, 0))


