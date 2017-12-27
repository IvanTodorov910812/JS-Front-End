let timer;

$('#start-timer').on('click', function () {
    timer = setInterval(function () {
        let seconds = parseInt($('#seconds').text());
        let minutes = parseInt($('#minutes').text());
        let hours = parseInt($('#hours').text());

        if(seconds === 59){
            $('#seconds').text(0);
            $('#minutes').text(minutes + 1);
        }
        else{
            $('#seconds').text(seconds + 1);
        }

        if(minutes === 59){
            $('#minutes').text(0);
            $('#hours').text(minutes + 1);
        }

        if(hours === 23){
            $('#minutes').text(0);
            $('#hours').text(0);
            $('#seconds').text(0);
        }

    }, 100);
});

$('#stop-timer').on('click', function () {
    clearInterval(timer);
});
