function task2() {
    let number = prompt("Enter your 6 digits");

    let sums = [0, 0];

    const size = 3;
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < size; j++) {
            sums[i] += Number(number[j]);
        }
    }

    if (sums[0] === sums[1]) {
        alert("You have a happy ticket!");
    }
}

task2();