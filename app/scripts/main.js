console.log('its chart time');

function assignValues (nextData) {
	return [
		{
			value: Number(nextData[0].temperature),
			color: '#D97041'
		},
		{
			value: Number(nextData[1].temperature),
			color: '#C7604C'
		},
		{
			value: Number(nextData[2].temperature),
			color: '#21323D'
		},
		{
			value: Number(nextData[3].temperature),
			color: '#9D9B7F'
		},
		{
			value: Number(nextData[4].temperature),
			color: '#7D4F6D'
		},
		{
			value: Number(nextData[5].temperature),
			color: '#584A5E'
		}
	];
}



$.get('http://tiny-pizza-server.herokuapp.com/collections/weather',function(response){
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

    








