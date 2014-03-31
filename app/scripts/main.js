console.log('its chart time');


function assignValues(nextData) {
    return {
        labels: ["lecture hall", "conference room", "lobby", "workspace de Todd"],
        datasets: [{
            fillColor: "rgba(255,152,0,1)",
            strokeColor: "rgba(220,220,220,1)",
            data: [
                parseFloat(_.find(nextData, function(weather) {
                    return weather.location === 'lecture hall';
                }).temperature),
                parseFloat(_.find(nextData, function(weather) {
                    return weather.location === 'conference room';
                }).temperature),
                parseFloat(_.find(nextData, function(weather) {
                    return weather.location === 'lobby';
                }).temperature),
                parseFloat(_.find(nextData, function(weather) {
                    return weather.location === 'workspace de Todd';
                }).temperature)
            ]
        }]
    }
}


$.get('http://tiny-pizza-server.herokuapp.com/collections/weather', function(response) {
    nextData = response;
    // console.log('next data is', nextData);

    var data = assignValues(nextData);

    //-- Make the chart once you have the data

    var options = {
        animation: true,
        scaleOverlay: true,
        scaleFontColor: "#fff",
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        scaleFontFamily: "'Open Sans'",
        scaleOverride: true,
        scaleSteps: 30.5,
        scaleStepWidth: .5,
        scaleStartValue: 59.5,

    };

    var c = $('#myChart');
    var ct = c.get(0).getContext('2d');
    var ctx = document.getElementById('myChart').getContext('2d');

    console.log(data);

    new Chart(ct).Bar(data, options);
});