function task3() {
    let low = 0;
    let high = 100;

    alert("I'll try to guess your number!");

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let response = prompt(`Your number is > ${mid}, < ${mid} or = ${mid}?`);

        if (response === '>') {
            low = mid + 1;
        } else if (response === '<') {
            high = mid - 1;
        } else if (response === '=') {
            alert(`Yaaay! I've guessed your number, and it's ${mid}!`);
            return;
        } else {
            alert("Please enter only a >, <, or =");
        }
    }
}

task3();