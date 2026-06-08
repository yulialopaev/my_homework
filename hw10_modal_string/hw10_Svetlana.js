function getUserNumber(){
    return prompt("enter any number>>")
}
function isValidNumber(value){
    return !Number.isNaN(Number(value))
}
function getIntegerPart(number){
    return Math.trunc(number)
}
function showFormats(number, intPart) {
    const absInt= Math.abs(intPart)
    alert(
        "Entered number: " + number + "\n" +
        "Decimal: " + absInt + "\n" +
        "Binary: " + absInt.toString(2) + "\n" +
        "Hexadecimal: " + absInt.toString(16)
    );
}

function reverseIntegerPart(intPart){
    const absString = String(Math.abs(intPart))
    let reversed=
        Number(absString.split("").reverse().join(""));
    if (intPart<0)
        return -reversed
    return reversed
}
function showReversedNumber(reversedNumber){
    alert("Reversed integer part: " + reversedNumber)
}

function sumDigits(intPart){
    const absString = String(Math.abs(intPart))
    let sum=0;
    for (let i=0;i<absString.length;i++){
        sum += Number(absString[i]);
    }
    return sum;
}

function showDigitSum(sum){
    alert("Sum of digits of integer part: " + sum)
}
function runApp(){
    const input =getUserNumber();
    if (input==null){
        alert("Input canceled");
        return;
    }
    if (input.trim()==""){
        alert("Please enter a number");
        return;
    }
    if (!isValidNumber(input)){
        alert("Invalid number");
        return;
    }
    const number=Number(input) || 0;
    const intPart = getIntegerPart(number);
    showFormats(number, intPart);
    const reversedNumber = reverseIntegerPart(intPart);
    showReversedNumber(reversedNumber);
    const digitSum = sumDigits(intPart);
    showDigitSum(digitSum);
}
runApp();