function task1() {
    let choice = false;

    while (!choice) {
        let name = prompt("Enter your full name");
        let gender = prompt("Enter your gender");
        let age = prompt("Enter your age number");
        let email = prompt("Enter your email address");

        document.writeln();

        choice =
            confirm(`Name: ${name}\nGender: ${gender}\nAge: ${age}\nEmail: ${email}\nIs this correct?`);

        if (choice) {
            alert(`Thank you!`);
        }
    }
}

task1();