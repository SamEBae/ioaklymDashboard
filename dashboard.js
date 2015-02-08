var chart = nv.models.discreteBarChart();

d3.select('#chart svg').datum([
  {
    key: "S2",
    color: "#BD362F",
    values:
      [      
        { x : "20:00:00.000",   y : Math.random()*45+45 },
        { x : "20:10:00.000",   y : Math.random()*45+45 },
        { x : "20:20:00.000",   y : Math.random()*45+45 },
        { x : "20:30:00.000",   y : Math.random()*45+45 },
        { x : "20:40:00.000",   y : Math.random()*45+45 },
        { x : "20:50:00.000",   y : Math.random()*45+45 },
        { x : "21:00:00.000",   y : Math.random()*45+45 }
      ]
  }
]).transition().duration(500).call(chart.forceY([0,90]));

var footchart = nv.models.discreteBarChart();

d3.select('#footchart svg').datum([
  {
    key: "S2",
    color: "#BD362F",
    values:
      [      
        { x : "20:00:00.000",   y : Math.random()*45+45 },
        { x : "20:10:00.000",   y : Math.random()*45+45 },
        { x : "20:20:00.000",   y : Math.random()*45+45 },
        { x : "20:30:00.000",   y : Math.random()*45+45 },
        { x : "20:40:00.000",   y : Math.random()*45+45 },
        { x : "20:50:00.000",   y : Math.random()*45+45 },
        { x : "21:00:00.000",   y : Math.random()*45+45 }
      ]
  }
]).transition().duration(500).call(chart.forceY([0,90]));
