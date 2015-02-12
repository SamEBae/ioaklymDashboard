//Fake sample data
var lineData = [{
  x: 1,
  y: 5
}, {
  x: 20,
  y: 20
}, {
  x: 40,
  y: 10
}, {
  x: 60,
  y: 40
}, {
  x: 80,
  y: 5
}, {
  x: 100,
  y: 60
}];
// console.log(lineData);
// console.log(generatePressureData());
lineData = generatePressureData();

//loop to generate fake sets of data
//time interval is 10mins for a 3hour total time
  function generatePressureData(){
      var Data = [];
      //start at 20:00 hour
      // var hour=19;
      var min=50;
      for(var i=0;i<=18;i++){
          min+=10;
          // if(min==60){
          //   hour++;
          //   min=0;
          // }
          //temp object
          var temp = {};
          // temp['x']=String(hour)+":"+String(min);
          temp['x']=min;
          temp['y']=(10+Math.random()*2);
          Data.push(temp);
      }
      return Data;
  }
  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
    color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }

var vis = d3.select('#visualisation'),
    WIDTH = 1000,
    HEIGHT = 500,
    MARGINS = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 50
    },
    xRange = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(lineData, function(d) {
      return d.x;
    }), d3.max(lineData, function(d) {
      return d.x;
    })]),
    yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([d3.min(lineData, function(d) {
      return d.y;
    }), d3.max(lineData, function(d) {
      return d.y;
    })]),
    xAxis = d3.svg.axis()
      .scale(xRange)
      .tickSize(5)
      .tickSubdivide(true),
    yAxis = d3.svg.axis()
      .scale(yRange)
      .tickSize(5)
      .orient('left')
      .tickSubdivide(true);
 
vis.append('svg:g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
  .call(xAxis);
 
vis.append('svg:g')
  .attr('class', 'y axis')
  .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
  .call(yAxis);

var lineFunc = d3.svg.line()
  .x(function(d) {
    return xRange(d.x);
  })
  .y(function(d) {
    return yRange(d.y);
  })
  .interpolate('linear');

var randomData = [generatePressureData(),generatePressureData(),generatePressureData(),generatePressureData()];

  $(document).ready(function(){
    for (var i=0;i<=randomData.length;i++){
      vis.append('svg:path')
      .attr('d', lineFunc(generatePressureData()))
      .attr('stroke', getRandomColor())
      .attr('stroke-width', 3)
      .attr('fill', 'none')
      ;
    }
  });