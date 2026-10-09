// Task 1 - Age Checker

const ageButton = document.getElementById("ageButton");

ageButton.addEventListener("click", function () {

    const age = Number(document.getElementById("age").value);

    if (age >= 18) {
        document.getElementById("ageResult").textContent = "You are an adult.";
        console.log("You are an adult.");
    } else {
        document.getElementById("ageResult").textContent = "You are a minor.";
        console.log("You are a minor.");
    }

});


// Task 2 - Number Checker

const numberButton = document.getElementById("numberButton");

numberButton.addEventListener("click", function () {

    const number = Number(document.getElementById("number").value);

    if (number > 0) {
        document.getElementById("numberResult").textContent = "Positive number";
        console.log("Positive number");
    } else if (number < 0) {
        document.getElementById("numberResult").textContent = "Negative number";
        console.log("Negative number");
    } else {
        document.getElementById("numberResult").textContent = "Zero";
        console.log("Zero");
    }

});


// Task 3 - Grade Checker

const gradeButton = document.getElementById("gradeButton");

gradeButton.addEventListener("click", function () {

    const score = Number(document.getElementById("score").value);

    if (score < 0 || score > 100) {

        document.getElementById("gradeResult").textContent = "Invalid score";
        console.log("Invalid score");

    } else if (score >= 90) {

        document.getElementById("gradeResult").textContent = "Grade: A";
        console.log("Grade: A");

    } else if (score >= 80) {

        document.getElementById("gradeResult").textContent = "Grade: B";
        console.log("Grade: B");

    } else if (score >= 70) {

        document.getElementById("gradeResult").textContent = "Grade: C";
        console.log("Grade: C");

    } else if (score >= 60) {

        document.getElementById("gradeResult").textContent = "Grade: D";
        console.log("Grade: D");

    } else {

        document.getElementById("gradeResult").textContent = "Grade: F";
        console.log("Grade: F");

    }

});


// Task 4 - Even or Odd

const evenOddButton = document.getElementById("evenOddButton");

evenOddButton.addEventListener("click", function () {

    const number = Number(document.getElementById("evenOddNumber").value);

    if (number % 2 === 0) {

        document.getElementById("evenOddResult").textContent = "Even";
        console.log("Even");

    } else {

        document.getElementById("evenOddResult").textContent = "Odd";
        console.log("Odd");

    }

});


// Task 5 - Login Checker

const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function () {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "12345") {

        document.getElementById("loginResult").textContent = "Login successful";
        console.log("Login successful");

    } else {

        document.getElementById("loginResult").textContent = "Invalid username or password";
        console.log("Invalid username or password");

    }

});


// Task 6 - Ternary Operator

const ternaryButton = document.getElementById("ternaryButton");

ternaryButton.addEventListener("click", function () {

    const age = Number(document.getElementById("ternaryAge").value);

    const result = age >= 18 ? "Adult" : "Minor";

    document.getElementById("ternaryResult").textContent = result;
    console.log(result);

});


// Task 7 - Access Checker

const accessButton = document.getElementById("accessButton");

accessButton.addEventListener("click", function () {

    const age = Number(document.getElementById("accessAge").value);

    const hasID = document.getElementById("hasID").checked;

    if (age >= 18 && hasID) {

        document.getElementById("accessResult").textContent = "Access granted";
        console.log("Access granted");

    } else {

        document.getElementById("accessResult").textContent = "Access denied";
        console.log("Access denied");

    }

});


// Bonus - Student Result Checker

const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const studentName = document.getElementById("studentName").value;
    const score = Number(document.getElementById("studentScore").value);

    let grade;
    let status;

    if (score < 0 || score > 100) {

        document.getElementById("studentResult").textContent = "Invalid score";
        console.log("Invalid score");

    } else {

        if (score >= 90) {
            grade = "A";
        } else if (score >= 80) {
            grade = "B";
        } else if (score >= 70) {
            grade = "C";
        } else if (score >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }

        if (score >= 60) {
            status = "Passed";
        } else {
            status = "Failed";
        }

        document.getElementById("studentResult").textContent =
            "Student: " + studentName +
            " | Score: " + score +
            " | Grade: " + grade +
            " | Status: " + status;

        console.log("Student: " + studentName);
        console.log("Score: " + score);
        console.log("Grade: " + grade);
        console.log("Status: " + status);
    }

});