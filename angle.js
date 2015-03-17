  var anglechart = nv.models.multiBarChart().margin({left: 100});
  anglechart.yAxis.axisLabel('Angle°');
  anglechart.xAxis.axisLabel('Time(hour:min:second)');
  //angle chart 



  d3.select('#anglechart svg').datum([
    { 
      key: "Left foot",
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
        ],
        color: '#288E8E',
        image_path: "img/leftfoot.png"
    },
    { 
      key: "Right foot",
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
        ],
        color: '#9CE3E3',
        image_path: "img/rightfoot.png"
    }
  ]).transition().duration(1000).call(anglechart.forceY([-10,20]).color(["#066464"]));

  d3.select('.nv-legendWrap').append("image").style('src','img/leftfoot.JPG');
  //favors right foot. 
  function randomSign(){
    if(Math.random()>0.75)return -1;
    return 1;
  }

  function testData(){
    $.getJSON('http://ioaklym.herokuapp.com/steps', function(data) {
        console.log(data);
    });
  }

  // creates the download link
  var jsonData = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'http://ioaklym.herokuapp.com/steps',
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
  })();

  var data = jsonData;
  var json = JSON.stringify(data);
  var blob = new Blob([json], {type: "application/json"});
  var url  = URL.createObjectURL(blob);

  var a = document.createElement('a');
  a.download    = "angle.json";
  a.href        = url;
  a.textContent = "Download angle data";

  document.getElementById('downloadAngle').appendChild(a);