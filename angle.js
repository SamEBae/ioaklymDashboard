  //angle chart 
  var testchart = nv.models.multiBarChart().margin({left: 100})
                    .tooltip(function(key, x, y, e, graph) {
                      return '<h3>x&#772:'+y+'</h3>' +
                             '<p>' +  y + '° at ' + x + '</p>';
                    });
  testchart.yAxis.axisLabel('Angle°');
  testchart.xAxis.axisLabel('Time(hour:min:second)');
  testchart.reduceXTicks(false);

  //array in which to store the data from the JSON response
  var AngleDataLeftFoot   =[];
  var AngleDataRightFoot  =[];

  function testData(){
    $.getJSON('http://ioaklym.herokuapp.com/steps', function(data) {
        console.log(data);
        //loop and see see ach different data entry
        for (var i = 0; i < data.length; i++) {
          //storing the data
          console.log(data[i].angle);
          console.log((data[i].timestamp).substring(12,19));
          //push it to array
          AngleDataLeftFoot.push({x: (data[i].timestamp).substring(12,19),  y: data[i].angle});
          AngleDataRightFoot.push({x:(data[i].timestamp).substring(12,19),  y: Math.random()+125+(10*randomSign())})
        };
    });
  }

  $(document).ready(function (){
    //time delay for the JSON to load from the api 
    testData(); 
    var delay = 3000;
    
    //nvd3 calls this function to retreive the data
    function data() {
      return [
        {
          values: AngleDataLeftFoot,
          key: 'Left Foot',
          color: '#288E8E'
        },
        {
          values: AngleDataRightFoot,
          key: 'Right foot',
          color: '#9CE3E3'
        }
      ];
    }

    setTimeout(function(){
      d3.select('#testchart svg').datum(data()).transition().duration(1000).call(testchart.forceY([90]).color(["#066464"]));
    },delay);
  });

  //favors right foot. 
  function randomSign(){
    if(Math.random()>0.75)return -1;
    return 1;
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


  var show=false;
  $("#menu").click(function (){
    if(!show){
      show = true;
      $('.row').fadeIn(1200);
      $('#menu').tipsy({show:'false'});
    }else{
      show = false;
      $('.row').fadeOut(1200);
      $('#menu').tipsy({show:'true'});
    }
    
  })

$('#menu').tipsy({trigger: 'manual', title: 'original-title', gravity:'w'});
$('#menu').tipsy('show');