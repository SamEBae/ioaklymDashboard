var pressurechart = nv.models.lineChart().margin({left: 100});

pressurechart.yAxis.axisLabel('Pressure');
pressurechart.xAxis.axisLabel('Time(hour:min:second)');


d3.select('#pressurechart svg').datum(pressureData()).transition().duration(1000).call(pressurechart.forceY([0,1]));


function pressureData() {
  var point1 =[];
  var point2 =[];
  var point3 =[];
  var point4 =[];

  for (var i = 0; i < 100; i++) {
    point1.push({x: i, y: Math.sin(i/10)+Math.random()});
    point2.push({x: i, y: Math.cos(i/10)+Math.random()});
    point3.push({x: i, y: Math.sin(i/10)+Math.random()});
    point4.push({x: i, y: Math.cos(i/10)+Math.random()});
  }

  return [
    {
      values: point1,
      key: 'Pressure Point 1',
      color: '#5C97BF'
    },
    {
      values: point2,
      key: 'Pressure Point 2',
      color: '#EF4836'
    },
    {
      values: point3,
      key: 'Pressure Point 3',
      color: '#9A12B3'
    },
    {
      values: point4,
      key: 'Pressure Point 4',
      color: '#1E824C'
    }
  ];
}