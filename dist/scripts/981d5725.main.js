function assignValues(a){return[{value:parseInt(_.find(a,function(a){return"conference room"===a.location}).temperature),color:"#AFFF00"},{value:parseInt(_.find(a,function(a){return"lobby"===a.location}).temperature),color:"#E89008"},{value:parseInt(_.find(a,function(a){return"lecture hall"===a.location}).temperature),color:"#FF044A"},{value:parseInt(_.find(a,function(a){return"workspace de Todd"===a.location}).temperature),color:"#1400E8"}]}console.log("its chart time"),$.get("http://tiny-pizza-server.herokuapp.com/collections/weather",function(a){{var b=a,c=assignValues(b),d={animation:!0},e=$("#myChart"),f=e.get(0).getContext("2d");document.getElementById("myChart").getContext("2d")}console.log(c),new Chart(f).PolarArea(c,d)});