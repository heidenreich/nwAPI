console.log('its chart time');

function assignValues(nextData) {
    return [{
        value: parseInt(_.find(nextData, function(weather) {
            return weather.location === 'downstairs';
        }).temperature),
        color: '#AFFF00'
    }, {
        value: parseInt(_.find(nextData, function(weather) {
            return weather.location === 'next lobby';
        }).temperature),
        color: '#E89008'
    }, {
        value: parseInt(_.find(nextData, function(weather) {
            return weather.location === 'lecture hall';
        }).temperature),
        color: '#FF044A'
    }, {
        value: parseInt(_.find(nextData, function(weather) {
            return weather.location === 'work space';
        }).temperature),
        color: '#1400E8'
    }, {
        value: parseInt(nextData[4].temperature),
        color: '#09FFCF'
    }, {
        value: parseInt(nextData[5].temperature),
        color: '#FFFA00'
    }];
}

$.get('http://tiny-pizza-server.herokuapp.com/collections/weather', function(response) {
    var nextData = response;
    // console.log('next data is', nextData);

    var downstairs = _.find(nextData, function(weather) {
        return weather.location === 'downstairs';
    });

    var nextLobby = _.filter(nextData, function(weather) {
        return weather.location === 'next lobby';
    });

    var lectureHall = _.find(nextData, function(weather) {
        return weather.location === 'lecture hall';
    });

    var workSpace = _.find(nextData, function(weather) {
        return weather.location === 'work space';
    });

    console.log('hello', nextLobby);

    var data = assignValues(nextData);

    //-- Make the chart once you have the data

    var options = {
        animation: true,
        scaleOverride: true,
        scaleSteps: 16,
        scaleStepWidth: 0.5,
        scaleStartValue: 62
    };

    var c = $('#myChart');
    var ct = c.get(0).getContext('2d');
    var ctx = document.getElementById('myChart').getContext('2d');

    console.log(data);

    new Chart(ct).PolarArea(data, options);
});




// new Chart(ctx).Bar(data,options);


// var data = {
//    labels : ["lecture hall","downstairs","next lobby","work space"],
//    datasets : [
//       {
//          fillColor : "rgba(220,220,220,0.5)",
//          strokeColor : "rgba(220,220,220,1)",
//          data : [65,59,90,81,56,55,40]
//       },
//       {
//          fillColor : "rgba(151,187,205,0.5)",
//          strokeColor : "rgba(151,187,205,1)",
//          data : [28,48,40,19,96,27,100]
//       }
//    ]
// }