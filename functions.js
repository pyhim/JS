// function concatenate(a, b, c) {
//     a = a.toString();
//     b = b.toString();
//     c = c.toString();
//
//     return parseInt(a + b + c);
// }

function task1(str) {
    let letterCount = 0, numberCount = 0, symbolCount = 0;

    for (let char of str) {
        if (char >= 0 && char <= 9)
            numberCount++;
        else if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))
            letterCount++;
        else
            symbolCount++;
    }
    alert(`Letters: ${letterCount}\nNumbers: ${numberCount}\nSymbols: ${symbolCount}`);
}

function task2(number) {
    let ones = {
        '1': "one", "2": "two", "3": "three",
        '4': "four", "5": "five", "6": "six",
        '7': "seven", "8": "eight", "9": "nine"
    }

    let teens = {
        '10': "ten", "11": "eleven", "12": "twelve",
        '13': "thirteen", "14": "fourteen", "15": "fifteen",
        '16': "sixteen", "17": "seventeen", "18": "eighteen",
        '19': "nineteen"
    }

    let tens = {
        '2': "twenty", '3': "thirty", '4': "forty",
        '5': "fifty", '6': "sixty", '7': "seventy",
        '8': "eighty", '9': "ninety"
    }

    let numberStr = number.toString();

    if (number >= 10 && number <= 19) {
        alert(teens[numberStr]);
    } else if (number >= 20 && number <= 99) {
        alert(`${tens[numberStr[0]]} ${ones[numberStr[1]]}`);
    } else {
        alert("Invalid number");
    }
}

function task3(str) {
    let result = "";

    for (let char of str) {
        if (char >= 'A' && char <= 'Z')
            result += char.toLowerCase();
        else if (char >= 'a' && char <= 'z')
            result += char.toUpperCase();
        else if (char >= '1' && char <= '9')
            result += '_';
    }

    alert(result);
}

function task4(str) {
    let tokens = str.split('-');
    tokens[1] = tokens[1][0].toUpperCase() + tokens[1].slice(1);
    str = tokens[0] + tokens[1];

    alert(str);
}

function task5(str) {
    let tokens = str.split(' ');
    let result = "";

    for (let word of tokens) {
        result += word[0].toUpperCase();
    }

    alert(result);
}

function task6() {
    let result = "";

    for (let arg of arguments) {
        result += arg;
    }

    return result;
}

function task7() {
    let operations = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y
    };

    let x = parseInt(prompt("Enter a number one"));
    let y = parseInt(prompt("Enter a number two"));
    let operation = prompt("Enter an desirable operation (+, -, *, /)");

    alert(operations[operation](x, y));
}

function task8(str) {
    let tokens = str.split('/');
    let result = ""

    result += `Protocol: ${tokens[0].slice(0, -1)}\nDomain: ${tokens[2]}\n`;
    for (let i = 0; i < 3; i++) {
        tokens.shift();
    }

    result += "Path: /"
    for (let word of tokens) {
        result += word + '/';
    }

    alert(result);
}

function task9(str, separator) {
    let result = [];
    let token = "";

    for (let char of str) {
        if (char === separator) {
            result.push(token);
            token = "";
            continue;
        }

        token += char;
    }

    result.push(token);

    return result;
}

function task10() {
    let result = "";

    for (let i = 0; i < arguments[0].length; i++) {
        if (arguments[0][i] === '%') {
            let index = arguments[0][i + 1];
            result += arguments[index];
            i++;
            continue;
        }

        result += arguments[0][i];
    }

    return result;
}

function main() {
    // task1("hello1231*)");
    // task2(15);
    // task3("Hello123WOW");
    // task4("background-color");
    // task5("object oriented programming");
    // alert(task6("hello", "world!", "Hello"));
    // task7();
    // task8("https://google.com/maps/something");
    // alert(task9("10/10/2010", '/'));
    alert(task10("Today is %1 %2.%3.%4", "Monday", "10", '8', "2020"));
}

main()