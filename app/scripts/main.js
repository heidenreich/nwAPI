console.log('its chart time');

function assignValues(nextData) {
   return [{
      value: Number(nextData[0].temperature),
      color: '#AFFF00'
   }, {
      value: Number(nextData[1].temperature),
      color: '#E89008'
   }, {
      value: Number(nextData[2].temperature),
      color: '#FF044A'
   }, {
      value: Number(nextData[3].temperature),
      color: '#1400E8'
   }, {
      value: Number(nextData[4].temperature),
      color: '#09FFCF'
   }, {
      value: Number(nextData[5].temperature),
      color: '#FFFA00'
   }];
}

$.get('http://tiny-pizza-server.herokuapp.com/collections/weather', function(response) {
   var nextData = response;
   console.log(nextData[9]);
   var data = assignValues(nextData);

   //-- Make the chart once you have the data

   var options = {
      animation: true,
      scaleOverride: true,
      scaleSteps: 30,
      scaleStepWidth: 0.5,
      scaleStartValue: 60
   };

   var c = $('#myChart');
   var ct = c.get(0).getContext('2d');
   var ctx = document.getElementById('myChart').getContext('2d');

   console.log(data);

   new Chart(ct).PolarArea(data, options);
});