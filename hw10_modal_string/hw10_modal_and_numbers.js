let my_number = prompt("Enter the number:")
if (my_number === null) {
    alert("You cancelled the input.")
} else if (isNaN(my_number) || my_number.trim() === "") {
    alert("Please enter a valid number.")
} else {
    let num = Number(my_number)
    let int_num = Math.trunc(num)
    alert(`Your number in decimal: ${int_num.toString(10)}
In binary: ${int_num.toString(2)}
In hexadecimal: ${int_num.toString(16)}`);

    alert(`Reverse of the number: ${reverse(num)}`);
    alert(`Sum of digits: ${sumDigits(num)}`);
}

function reverse(number) {
    let abs_number = Math.abs(number)
    let num_integer = Math.trunc(abs_number)
    let num_string = num_integer.toString()
    let num_length = num_string.length


    let new_string = ""
    while (num_length > 0) {
        new_string += num_string.charAt(num_length - 1)
        num_length = num_length - 1
    }

    let result_1
    if (number >= 0) {
        result_1 = `${Number(new_string)}`
    } else {
        result_1 = `${-Number(new_string)}`
    }

    return result_1

}


function sumDigits(number) {
    let abs_number = Math.abs(number)
    let num_integer = Math.trunc(abs_number)
    let num_string = num_integer.toString()
    let num_array = Array.from(num_string)

    let result_2 = 0

    for (let digit of num_array) {
        result_2 += Number(digit)
    }

    return result_2
}
