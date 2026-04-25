// --- Task 1. Travel Label ---
function travelLabel(city, country) {
    // console.log(`Hello ${name ?? 'anonymous'}`)
    let city_clear = (typeof city === 'string' ? city : null) ?? 'Unknown city';
    let country_clear = (typeof country === 'string' ? country : null) ?? 'Unknown country'

    if (city_clear.trim() === '') city_clear = 'Unknown city'
    if (country_clear.trim() === '') country_clear = 'Unknown country'

    return `${city_clear.trim()}, ${country_clear.trim()}`

}

console.log(travelLabel(null, undefined))
console.log(travelLabel("Berlin", "Germany"))
console.log(travelLabel(null, "   France"))
console.log(travelLabel("Rome", undefined))
console.log(travelLabel(undefined, undefined))
console.log(travelLabel(5, true))
console.log('----------------------------------------')


// ---Task 2. First Available Contact ---
function firstContact(email, telegram, phone) {
    return email ?? telegram ?? phone ?? 'No contact'
}

console.log(firstContact(null, 'a@telegr', 354)) // a@telegr
console.log(firstContact(null, '', undefined)) // ''
console.log(firstContact(null, "@anna", "+123")) // "@anna"
console.log(firstContact(undefined, null, "+123")) // "+123"
console.log(firstContact(null, undefined, null)) // "No contact"
console.log(firstContact(undefined, 0, 354)) // 0
console.log('----------------------------------------')


// --- Task 3. Choose F
function sumTwo(a, b) {
    return a + b
}


function multiplyThree(a, b, c) {
    return a * b * c
}


function sumFour(a, b, c, d) {
    return a + b + c + d
}


function chooseProcessor(f1, f2, f3, a, b, c, d) {
    if (d !== undefined) return f3(a, b, c, d)
    else if (c !== undefined) return f2(a, b, c)
    else return f1(a, b)
}


console.log(chooseProcessor(sumTwo, multiplyThree, sumFour, 6, 15, 22, 5)) // 48
console.log(chooseProcessor(sumTwo, multiplyThree, sumFour, 6, 15));       // 21
console.log(chooseProcessor(sumTwo, multiplyThree, sumFour, 2, 3, 7));    // 42
console.log(chooseProcessor(sumTwo, multiplyThree, sumFour, 2, 3, 4, 5)); // 14
console.log(chooseProcessor(sumTwo, multiplyThree, sumFour, 2, 3, 8, 0));    // 13
console.log('----------------------------------------')


// --- Task 4. Temperature Status with Ternary Operator ---
function temperatureStatus(temp) {
    return temp < 0 ? 'freezing' : temp <= 20 ? 'cool' : 'warm';
}

console.log(temperatureStatus(-5))
console.log(temperatureStatus(10))
console.log(temperatureStatus(25))
