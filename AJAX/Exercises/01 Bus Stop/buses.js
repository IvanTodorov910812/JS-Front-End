function getInfo() {
    let baseServiceUrl =
        'https://judgetests.firebaseio.com/businfo/' ;
    let stopId = $('#stopId').val();
    let request = {
        method: 'GET',
        url: baseServiceUrl + stopId +'.json'
    };
    $.ajax(request)
        .then(displayStop)
        .catch(displayError);

    function displayStop(busInfo) {
        $("#buses").empty();
        $("#stopName").empty();
        let stopId = $('#stopId').val();
        let sotopIdInfo = busInfo;
        let buses = sotopIdInfo['buses'];
        let name = sotopIdInfo['name'];
        $('#stopName').text(name);
        for(bus in buses){
            $('#buses').append($('<li>').text(`Bus ${bus} arrives in ${buses[bus]} minutes`))

        }
    }
    function displayError(err) {

        $("#buses").empty();
        $('#stopName').text("Error");
    }
}