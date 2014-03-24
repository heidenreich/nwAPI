console.log('its chart time');

function assignValues(nextData) {
   return [{
      value: parseInt(nextData[0].temperature),
      color: '#AFFF00'
   }, {
      value: parseInt(nextData[1].temperature),
      color: '#E89008'
   }, {
      value: parseInt(nextData[2].temperature),
      color: '#FF044A'
   }, {
      value: parseInt(nextData[3].temperature),
      color: '#1400E8'
   }, {
      value: parseInt(nextData[4].temperature),
      color: '#09FFCF'
   }, {
      value: parseInt(nextData[5].temperature),
      color: '#FFFA00'
   }];
};

$.get('http://tiny-pizza-server.herokuapp.com/collections/weather', function(response) {
   var nextData = response;
   console.log('next data is', nextData);
   var downstairs = _.findWhere(nextData, function(weather) {
      return weather.location === 'downstairs'
   });
   console.log(downstairs);
   var data = assignValues(nextData);

   //-- Make the chart once you have the data

   var options = {
      animation: true,
      scaleOverride: true,
      scaleSteps: 15,
      scaleStepWidth: 0.5,
      scaleStartValue: 60
   };

   var c = $('#myChart');
   var ct = c.get(0).getContext('2d');
   var ctx = document.getElementById('myChart').getContext('2d');

   console.log(data);

   new Chart(ct).PolarArea(data, options);
});