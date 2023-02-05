let minute = 0;
let second = 0;
let miliSecond = 0;
var timer;

function startTimer() {
    miliSecond++;
    if (miliSecond < 100) {
        if (miliSecond === 99) {
            miliSecond = 0;
            second++;
            if (second === 60)  {
                second = 0;
                minute++;
            }
        }
    }
    else{
        miliSecond = 0;
    }
    document.getElementById("stopwatch").innerHTML = minute + ":" + second + ":" + miliSecond;
}

// function to start the timer
function start() {
    document.getElementById("start").disabled = true;
    timer = setInterval(startTimer, 10);
}

// function to stop the timer
function stop() {
    document.getElementById("start").disabled = false;
    clearInterval(timer);
}

// function to reset the timer
function reset() {
    stop();
    minute = 0;
    second = 0;
    miliSecond = 0;
    document.getElementById("stopwatch").innerHTML = minute + ":" + second + ":" + miliSecond;
}