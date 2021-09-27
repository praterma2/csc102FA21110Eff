function playCraps() {
    console.log("playCraps() function Started");
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2;
    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1;
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2;
    document.getElementById("sumRes").innerHTML = "Sum = " + sum;
    if (sum == 7 || sum == 11) {
        loss = loss + 1;
        document.getElementById("lossRes").innerHTML = loss; 
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose!";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        wins++;
        document.getElementById("winRes").innerHTML = wins;
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";
    } else {
        tie++;
        document.getElementById("tieRes").innerHTML = tie;
        document.getElementById("finalRes").innerHTML =
            "Draw - You neither won nor lost. Please try again.";
    }

}

function blastOff() {
    var currTime = 10;
    document.getElementById("countDownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 2;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 2000);
    setTimeout(function () {
        currTime = currTime - 2;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 4000);
    setTimeout(function () {
        currTime = currTime - 2;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 6000);
    setTimeout(function () {
        currTime = currTime - 2;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 8000);
    setTimeout(function () {
        currTime = currTime - 2;
        document.getElementById("countDownTimer").innerHTML = "Blastoff!";
    }, 10000);
}

function btrBlastOff(){
    console.log("btrBlastOff() started");
    var currTime = 50;
    for(var i = 0; i < 10; i++){
        setTimeout(function(){
            document.getElementById("countDownTimer").innerHTML = currTime;
            currTime = currTime - 5;
        },i * 5000);
    }
    setTimeout(function(){
        document.getElementById("countDownTimer").innerHTML = "Blastoff!";
    },50000);
}