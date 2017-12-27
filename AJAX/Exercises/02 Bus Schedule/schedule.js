let nextBusId = 'depot';
function changeStatus(type) {
    $.ajax('https://judgetests.firebaseio.com/schedule/'+nextBusId+'.json', {
        method: 'GET',
        success: function (response) {
            if (type === 'depart') {
                $('span.info').text('Next stop ' + response.name);
                $('#depart').attr('disabled', true);
                $('#arrive').attr('disabled', false);
            }
            else if (type === 'arrive'){
                $('span.info').text('Arriving at  ' + response.name);
                $('#arrive').attr('disabled', true);
                $('#depart').attr('disabled', false);

                nextBusId = response.next;
            }


        }
    });
}