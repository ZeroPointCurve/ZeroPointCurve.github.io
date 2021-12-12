function RollDie() {
    //Craps function//
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    //Introduces a random number of selected value//

    var sum = die1 + die2
    //Sums up the Dice Values//
    document.getElementById("Craps").innerHTML = "Die 1 = " + die1
    document.getElementById("Die2").innerHTML = "Die 2 = " + die2
    document.getElementById("DieTotal").innerHTML = "Sum = " + sum
    document.getElementById("CrapOut").innerHTML = " "
    //Displays Info for the User//

    if (sum == 7 || sum == 11) {
        document.getElementById("CrapOut").innerHTML = "CRAPS - you lose"
    }
    else if (die1 == die2) {
        document.getElementById("CrapOut").innerHTML = "DOUBLES - you win"
    }
    //Extra functions for game play//
}

function IgnitionSequence() {
    alert("Confirm Ignition Sequence")
    var currTime = 50
    document.getElementById("CountDown").innerHTML = "T-Minus: " + currTime
    var timeDown = setInterval(function () {
        currTime = currTime - 5;
        document.getElementById("CountDown").innerHTML = "T-Minus: " + currTime;
        if (currTime < 25) {
            document.getElementById("CountDown").innerHTML = "Warning Less than 1/2 way to launch, time left = " + currTime;
        } if (currTime == 0) {
            document.getElementById("CountDown").innerHTML = "BLASTOFF!";
        }
    }, 5000);
}
function AbortAbort() {
    alert("End Of Time")
    document.getElementById("CountDown").innerHTML = "Ignition Sequence Aborted";
}

function checkCreds() {
    console.log("checkCreds() started");
    //establishes the variables used for checking the login credentials
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var fullName = firstName + " " + lastName;
    var badgeNumb = document.getElementById("badgeID").value;

    //Validation of full name and badge number. If successful, will be redirected to the UAT Space page.
    //Full name must be longer than 2 characters but not more that 20.
    //Badge number cannot exceed 999 and must be greater than 1.
    //If requirements are not met, user will not be granted access to the UAT Space page.
    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Invalid input, name does not meet character limit."
    } else if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid input, badge does not meet character limit."
    } else {
        console.log("submission passes!");
        alert("Access Granted! Welcome to the UAT Space page " + fullName);
        location.replace("UATSpacePage.html");
    }
}

//function IgnitionSequence() {
//countdown function//
//alert("Confirm Ignition Sequence")
//var currTime = 50
//Sets Countdown range//
//document.getElementById("CountDown").innerHTML = "T-Minus: " + currTime;
//currTime = currTime - 5;
//Sets rate of countdown change//

//setTimeout(function () {
    //document.getElementById("CountDown").innerHTML = "T-Minus: " + currTime;
    //currTime = currTime - 5;
//}, 5000);

//setTimeout(function () {
    //document.getElementById("CountDown").innerHTML = "T-Minus: " + currTime;
    //currTime = currTime - 5;
//}, 10000);

//setTimeout(function () {
    //document.getElementById("CountDown").innerHTML = "T-Minus: " + currTime;
    //currTime = currTime - 5;
//}, 15000);

//setTimeout(function () {
    //document.getElementById("CountDown").innerHTML = "T-Minus: " + currTime;
    //currTime = currTime - 5;
//}, 20000);

//setTimeout(function () {
    //document.getElementById("CountDown").innerHTML = "T-Minus: " + currTime;
    //currTime = currTime - 5;
//}, 25000);

//setTimeout(function () {
    //document.getElementById("CountDown").innerHTML = "Warning Less than 1/2 way to launch, time left = " + currTime;
    //currTime = currTime - 5;
//}, 30000);

//setTimeout(function () {
    //document.getElementById("CountDown").innerHTML = "Warning Less than 1/2 way to launch, time left = " + currTime;
    //currTime = currTime - 5;
//}, 35000);

//setTimeout(function () {
    //document.getElementById("CountDown").innerHTML = "Warning Less than 1/2 way to launch, time left = " + currTime;
    //currTime = currTime - 5;
//}, 40000);

//setTimeout(function () {
    //document.getElementById("CountDown").innerHTML = "Warning Less than 1/2 way to launch, time left = " + currTime;
    //currTime = currTime - 5;
//}, 45000);

//setTimeout(function () {
    //document.getElementById("CountDown").innerHTML = "BLASTOFF!";
    //currTime = currTime - 5;
//}, 50000);
    //Ends countdown sequence, displays final state//
//}