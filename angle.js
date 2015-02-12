  var anglechart = nv.models.discreteBarChart();

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
          { x : "23:00",   y : Math.random()*10+(10*randomSign()) }
        ]
    }
  ]).transition().duration(1000).call(anglechart.forceY([-10,20]).color(["#066464"]));

  //favors right foot. 
  function randomSign(){
    if(Math.random()>0.75)return -1;
    return 1;
  }