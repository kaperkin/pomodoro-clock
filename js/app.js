(function () {
    'use strict';
    var countdown = document.getElementById("countdown");
    var count = 10;
    var counter; //1000 will run it every 1 second
    var reset = document.getElementById('reset');
    var start = document.getElementById('start');
    start.addEventListener('click', startTimer);
    reset.addEventListener('click', resetTimer);

    countdown.innerHTML = count;



    function timer() {
        countdown.innerHTML = count;
        if (count <= 0) {
            clearInterval(counter);
            countdown.innerHTML = '0';
        }
        count = count - 1;
    }

    function resetTimer() {
        clearInterval(counter);
        count = 10;
        countdown.innerHTML = count;
        return count;
    }

    function startTimer(){
        counter = setInterval(timer, 1000);
        return counter;
    }

})
();