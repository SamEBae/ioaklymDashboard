// nv.addGraph(function() {
//   var chart = nv.models.lineWithFocusChart();

//   chart.xAxis
//       .tickFormat(d3.format(',f'));

//   chart.yAxis
//       .tickFormat(d3.format(',.2f'));

//   chart.y2Axis
//       .tickFormat(d3.format(',.2f'));

//   d3.select('#chart2 svg')
//       .datum(testData())
//       .transition().duration(500)
//       .call(chart);

//   nv.utils.windowResize(chart.update);

//   return chart;
// });
// /**************************************
//  * Simple test data generator
//  */

// function testData() {
//   return stream_layers(3,128,.1).map(function(data, i) {
//     return { 
//       key: 'Stream' + i,
//       values: data
//     };
//   });
// }

// function stream_layers(n, m, o) {
//   if (arguments.length < 3) o = 0;
//   function bump(a) {
//     var x = 1 / (.1 + Math.random()),
//         y = 2 * Math.random() - .5,
//         z = 10 / (.1 + Math.random());
//     for (var i = 0; i < m; i++) {
//       var w = (i / m - y) * z;
//       a[i] += x * Math.exp(-w * w);
//     }
//   }
//   return d3.range(n).map(function() {
//       var a = [], i;
//       for (i = 0; i < m; i++) a[i] = o + o * Math.random();
//       for (i = 0; i < 5; i++) bump(a);
//       return a.map(stream_index);
//     });
// }

// function stream_index(d, i) {
//   return {x: i, y: Math.max(0, d)};
// }

// var ObjectId = require('mongodb').ObjectID;

var chart = nv.models.discreteBarChart();

d3.select('#footchart svg').datum([
  {
    key: "S2",
    color: "#BD362F",
    values:
      [      
        { x : "20:00:00.000",   y : Math.random()*10+10 },
        { x : "20:10:00.000",   y : Math.random()*10+10 },
        { x : "20:20:00.000",   y : Math.random()*10+10 },
        { x : "20:30:00.000",   y : Math.random()*10+10 },
        { x : "20:40:00.000",   y : Math.random()*10+10 },
        { x : "20:50:00.000",   y : Math.random()*10+10 },
        { x : "21:00:00.000",   y : Math.random()*10+10 }
      ]
  }
]).transition().duration(500).call(chart.forceY([10,20]).color(["#BD362F"]));



var footchart = nv.models.discreteBarChart();

d3.select('#chart svg').datum([
  {
    key: "S2",
    color: "#BD362F",
    values:
      [      
        { x : "20:00",   y : Math.random()*45+45 },
        { x : "20:10",   y : Math.random()*45+45 },
        { x : "20:20",   y : Math.random()*45+45 },
        { x : "20:30",   y : Math.random()*45+45 },
        { x : "20:40",   y : Math.random()*45+45 },
        { x : "20:50",   y : Math.random()*45+45 },
        { x : "21:00",   y : Math.random()*45+45 },
        { x : "21:10",   y : Math.random()*45+45 },
        { x : "21:20",   y : Math.random()*45+45 },
        { x : "21:30",   y : Math.random()*45+45 },
        { x : "21:40",   y : Math.random()*45+45 },
        { x : "21:50",   y : Math.random()*45+45 },
        { x : "22:00",   y : Math.random()*45+45 },
        { x : "22:10",   y : Math.random()*45+45 },
        { x : "22:20",   y : Math.random()*45+45 },
        { x : "22:30",   y : Math.random()*45+45 },
        { x : "22:40",   y : Math.random()*45+45 },
        { x : "22:50",   y : Math.random()*45+45 },
        { x : "23:00",   y : Math.random()*45+45 }
      ]
  }
]).transition().duration(500).call(chart.forceY([0,90]));

nv.addGraph(function() {
  var chart = nv.models.lineWithFocusChart();

  chart.xAxis
    .tickFormat(d3.format(',f'));

  chart.yAxis
    .tickFormat(d3.format(',.2f'));

  chart.y2Axis
    .tickFormat(d3.format(',.2f'));

  d3.select('#chart svg')
    .datum(data())
    .transition().duration(500)
    .call(chart)
    ;

  nv.utils.windowResize(chart.update);

  return chart;
});

// var sampledata={ 
//   "_id" : ObjectId("54d12c9280a3e7f14a85d3b9"), 
//   "user" : "Peter", 
//   "angle" : 23, 
//   "timestamp" : ISODate("2015-02-03T20:16:18.677Z"),
//   "__v" : 0
// }

var sampledata2={ 
  "_id" : "54d12c9280a3e7f14a85d3b9", 
  "user" : "Peter", 
  "angle" : 23, 
  "timestamp" : "2015-02-03T20:16:18.677Z",
  "__v" : 0
}


function parseData(JSON){
  console.log(JSON);
  console.log(JSON._id);
  console.log(JSON.user);
  console.log(JSON.angle);
  console.log(JSON.__v);
}

$(document).ready(function() {
    parseData(sampledata2);
});