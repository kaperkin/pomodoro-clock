(function () {
    'use strict';
    var secPlus = document.getElementById('secPlus');
    var secMinus = document.getElementById('secMinus');
    var tenSecPlus = document.getElementById('tenSecPlus');
    var tenSecMinus = document.getElementById('tenSecMinus');
    var minutePlus = document.getElementById('minutePlus');
    var minuteMinus = document.getElementById('minuteMinus');
    var tenMinutePlus = document.getElementById('tenMinutePlus');
    var tenMinuteMinus = document.getElementById('tenMinuteMinus');
    var seconds = 0;
    var tenSeconds = 0;
    var minutes = 5;
    var tenMinutes = 2;
    var showSeconds = document.getElementById('showSeconds');
    var showTenSeconds = document.getElementById('showTenSeconds');
    var showMinutes = document.getElementById('showMinutes');
    var showTenMinutes = document.getElementById('showTenMinutes');

    var reset = document.getElementById('reset');
    //start.addEventListener('click', startTimer);
    reset.addEventListener('click', resetTimer);
    secPlus.addEventListener('click', addSecond);
    secMinus.addEventListener('click', function () {
        if (seconds > 0) {
            seconds -= 1;
        }
       showTime();
    });
    tenSecPlus.addEventListener('click', addTenSec);
    tenSecMinus.addEventListener('click', function () {
        if (tenSeconds > 0) {
            tenSeconds -= 1;
        }
        showTime();
    });
    function addSecond() {
        seconds += 1;
        if (seconds === 10) {
            tenSeconds += 1;
            seconds = 0;
        }
        showTime();
    }

    function addTenSec(){
        tenSeconds += 1;
        if(tenSeconds === 10){
            minutes += 1;
            tenSeconds = 0;
        }
        showTime();
    }

    //function timer() {
    //    count = count - 1;
    //    if (count <= 0) {
    //        clearInterval(counter);
    //        countdown.innerHTML = '0';
    //    }
    //    countdown.innerHTML = count;
    //}
    //
    function resetTimer() {
        //clearInterval(counter);
        seconds = 0;
        tenSeconds = 0;
        minutes = 1;
        showTime();
    }
    //
    //function startTimer() {
    //    count = count *60;
    //    counter = setInterval(timer, 1000);
    //    return counter;
    //}
    //
    //countdown.innerHTML = count;
    //countdown.innerHTML = seconds;
    function showTime() {
        showSeconds.innerHTML = seconds;
        showTenSeconds.innerHTML = tenSeconds;
        showMinutes.innerHTML = minutes + ":";
        showTenMinutes.innerHTML = tenMinutes;
    }

    showTime();
})
();