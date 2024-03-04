// JavaScript Fundamentals - Day 14: Assignment

// 1. Create a variable named `temperature` and assign it a value.
    let temperature = 30;

// 2. Use an `if` statement to check if the `temperature` is greater than 30. Print a message to the console accordingly.
    if (temperature > 30)
    {
        console.log("The weather is greater than 30");
    } else
    {
        console.log("The weather is less than equal 30");
    }
// 3. Extend the previous example with an `else` statement to print a different message if the temperature is not greater than 30.


// 4. Create a variable named `time` and assign it a value representing the current hour (in 24-hour format).
// 5. Use `else if` statements to greet the user based on the time of day (morning, afternoon, evening).
    let time = 12;
    if (time <= 6) {
        console.log("Good Morning!");
    }
    else if (time <= 18) {
        console.log("Good Afternoon!");
    }
    else if (time <= 24) {
        console.log("Good Night!");
    }
    else {
        console.log("Please enter a valid hour");

    }

// 6. Create a switch statement for the variable `day`. Print a message based on the day of the week.

    let day = 'Sunday';
    switch (day.toLowerCase()) {
        case "monday":
            console.log("Good Day! Today is Monday!");
            break;
        case "tuesday":
            console.log("Good Day! Today is Tuesday!");
            break;
        case "wednesday":
            console.log("Good Day! Today is Wednesday!");
            break;
        case "thursday":
            console.log("Good Day! Today is Thursday!");
            break;
        case "friday":
            console.log("Good Day! Today is Friday!");
            break;
        case "satruday":
            console.log("Good Day! Today is Saturday!");
            break;
        case "sunday":
            console.log("Good Day! Today is Sunday!");
            break;
        default:
            console.log("Please enter a valid day!");

    }

