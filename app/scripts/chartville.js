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

    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [{
        fillColor: "rgba(220,220,220,0.1)",
        strokeColor: "#0067bd",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        data: [65, 67, 66, 67, 68, 69, 67, 65, 63, 64]
      }, {
        fillColor: "rgba(151,187,205,0.1)",
        strokeColor: "#FF9800",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        data: [63, 64, 64, 64, 63, 64, 63, 62, 62, 61]
      }, {
        fillColor: "rgba(151,187,205,0.1)",
        strokeColor: "black",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        data: tempOne
      }

    ]
  }
}


$(document).ready(function() {

    function fetchAndRender() {
      $.get('http://tiny-pizza-server.herokuapp.com/collections/weather', function(response) {
          nextData = _.first(response, 10);
          // console.log('response', nextData)
          tempOne = _.pluck(_.filter(nextData, function(weather) {
            return weather.location === 'conference room';
          }), 'temperature');


    
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