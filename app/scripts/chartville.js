// $.get('http://tiny-pizza-server.herokuapp.com/collections/weather', function(response) {
//     nextData = response
//     console.log('response', nextData)
//     tempOne = parseFloat(_.find(response, function(weather) {
//         return weather.location === 'lecture hall';
//     }).temperature);

//     console.log('tempOne', tempOne)
// })



function assignValues(nextData) {
  return {

    labels: ["-36 sec", "-32 sec", "-28 sec", "-24 sec", "- 20 sec", "-16 sec", "-12 sec", "-8 sec", "-4 sec", "now"],
    datasets: [{
        fillColor: "rgba(220,220,220,0.1)",
        strokeColor: "#0067bd",
        pointColor: "#0067bd",
        pointStrokeColor: "#fff",
        data: tempThree
      }, {
        fillColor: "rgba(151,187,205,0.1)",
        strokeColor: "#FF9800",
        pointColor: "#FF9800",
        pointStrokeColor: "#fff",
        data: tempTwo
      }, {
        fillColor: "rgba(151,187,205,0.1)",
        strokeColor: "black",
        pointColor: "black",
        pointStrokeColor: "#fff",
        data: tempOne
      }

    ]
  }
}


$(document).ready(function() {

    function fetchAndRender() {
      $.get('http://tiny-pizza-server.herokuapp.com/collections/weather', function(response) {
          nextData = _.first(response, 30);
          // console.log('response', nextData)
          tempOne = _.pluck(_.filter(nextData, function(weather) {
            return weather.location === 'conference room';
          }), 'temperature');

          tempTwo = _.pluck(_.filter(nextData, function(weather) {
            return weather.location === 'lecture hall';
          }), 'temperature');

          tempThree = _.pluck(_.filter(nextData, function(weather) {
            return weather.location === 'lobby';
          }), 'temperature');

          timeUno = _.pluck(_.filter(nextData, function(weather) {
            return weather.time;
          }), 'time');

          // timeOne= _.every((timeUno),moment().format("hh:mm:ss"));

          // console.log(timeOne);

    
          console.log('tempOne', tempOne);
          var data = assignValues(nextData)
          var count = 10;

          // this is ugly, don't judge me
          // var updateData = function(oldData) {
          //   var labels = oldData["labels"];
          //   var dataSetA = oldData["datasets"][0]["data"];
          //   var dataSetB = oldData["datasets"][1]["data"];
          //   var dataSetC = oldData["datasets"][2]["data"];
    
          //   labels.shift();
          //   count++;
          //   labels.push(count.toString());
          //   var newDataA = dataSetA[9] + (1);
          //   var newDataB = dataSetB[9] + (1);
          //   var newDataC = dataSetC[9] + (1);
          //   dataSetA.push(newDataA);
          //   dataSetB.push(newDataB);
          //   dataSetC.push(newDataC);
          //   dataSetA.shift();
          //   dataSetB.shift();
          //   dataSetC.shift();
          // };

          // Not sure why the scaleOverride isn't working... 
          var optionsNoAnimation = {
            animation: false,
            //Boolean - If we want to override with a hard coded scale
            scaleOverride: true,
            //** Required if scaleOverride is true **
            //Number - The number of steps in a hard coded scale
            scaleSteps: 18,
            //Number - The value jump in the hard coded scale
            scaleStepWidth: 1,
            //Number - The scale starting value
            scaleStartValue: 58
          }
    
          //Get the context of the canvas element we want to select
          var ctx = document.getElementById("myChart").getContext("2d");
  
          var myNewChart = new Chart(ctx);
    
          // updateData(data);
          myNewChart.Line(data, optionsNoAnimation);
        });}
  
  setInterval(fetchAndRender, 4000);
})