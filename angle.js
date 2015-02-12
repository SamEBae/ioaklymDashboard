  var anglechart = nv.models.discreteBarChart();
  var image = "img/foot.png"
  //angle chart 
  d3.select('#anglechart svg').datum([
    {
      values:
        [      
          { x : "20:00",   y : Math.random()*10+(10*randomSign())},
          { x : "20:10",   y : Math.random()*10+(10*randomSign()) },
          { x : "20:20",   y : Math.random()*10+(10*randomSign()) },
          { x : "20:30",   y : Math.random()*10+(10*randomSign()) },
          { x : "20:40",   y : Math.random()*10+(10*randomSign()) },
          { x : "20:50",   y : Math.random()*10+(10*randomSign()) },
          { x : "21:00",   y : Math.random()*10+(10*randomSign()) },
          { x : "21:10",   y : Math.random()*10+(10*randomSign()) },
          { x : "21:20",   y : Math.random()*10+(10*randomSign()) },
          { x : "21:30",   y : Math.random()*10+(10*randomSign()) },
          { x : "21:40",   y : Math.random()*10+(10*randomSign()) },
          { x : "21:50",   y : Math.random()*10+(10*randomSign()) },
          { x : "22:00",   y : Math.random()*10+(10*randomSign()) },
          { x : "22:10",   y : Math.random()*10+(10*randomSign()) },
          { x : "22:20",   y : Math.random()*10+(10*randomSign()) },
          { x : "22:30",   y : Math.random()*10+(10*randomSign()) },
          { x : "22:40",   y : Math.random()*10+(10*randomSign()) },
          { x : "22:50",   y : Math.random()*10+(10*randomSign()) },
          { x : "23:00",   y : Math.random()*10+(10*randomSign()),    "img":image}
        ]
    }
  ]).transition().duration(1000).call(anglechart.forceY([-10,20]).color(["#066464"]));

  svg = d3.select(el)
    .append("svg:svg")
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append("svg:g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .call(zoom);

  svg.append("svg:g")
    .attr("class", "x axis")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis)
    .selectAll(".tick").each(function(d,i){        
        d3.select('#anglechart svg')
          .append('image')
          .attr('xlink:href', image)
          .attr('x',0)
          .attr('width',128)
          .attr('height',128);
    });

  //favors right foot. 
  function randomSign(){
    if(Math.random()>0.75)return -1;
    return 1;
  }