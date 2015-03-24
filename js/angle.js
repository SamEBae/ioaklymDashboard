  $(document).ready(function() {
      //time delay for the JSON to load from the api 
      getData();
      var delay = 3000;

      setTimeout(function() {
          d3.select('#angleChart svg').datum(angleDataJSON()).transition().duration(1000).call(angleChart.forceY([45, 270]).color(["#066464"]));
          d3.select('#swingchart svg').datum(swingDataJSON()).transition().duration(1000).call(swingchart.forceY([0,300]));
          d3.select('#stancechart svg').datum(stanceDataJSON()).transition().duration(1000).call(stancechart.forceY([0,30]));
          d3.select('#stridechart svg').datum(strideDataJSON()).transition().duration(1000).call(stridechart.forceY([0,400]));

          //blue 'seconds' text
          var bluetext = "<div class='blue'>Seconds</div>";

          var swingSum =0;
          for (var i = swingData.length - 1; i >= 0; i--) {
            swingSum +=parseInt(swingData[i].y);
          };
          swingAverage = swingSum/swingData.length;
          $("#swingAverage").html(swingAverage+bluetext);
          
          var stanceSum =0;
          for (var i = stanceData.length - 1; i >= 0; i--) {
            stanceSum +=parseInt(stanceData[i].y);
          };
          stanceAverage = stanceSum/stanceData.length;
          $("#stanceAverage").html(stanceAverage+bluetext);

          var strideSum =0;
          for (var i = strideData.length - 1; i >= 0; i--) {
            strideSum +=parseInt(strideData[i].y);
          };
          strideAverage = strideSum/stanceData.length;
          $("#strideAverage").html(strideAverage+bluetext);
          

          //d3.select('#swingchart svg').datum(angleDataJSON()).transition().duration(1000).call(swingchart.forceY([0]));
      }, delay);
  });

  //angle chart 
  var angleChart = nv.models.multiBarChart().margin({
          left: 100
      })
      .tooltip(function(key, x, y, e, graph) {
          return '<h3>x&#772:' + y + '</h3>' +
              '<p>' + y + '° at ' + x + '</p>';
      });
  angleChart.yAxis.axisLabel('Angle°');
  angleChart.xAxis.axisLabel('Time(hour:min:second)');
  angleChart.reduceXTicks(false);

  //array in which to store the data from the JSON response
  var AngleDataLeftFoot   = [];
  var AngleDataRightFoot  = [];
  var swingData           = [];
  var strideData          = [];
  var stanceData          = [];
  var swingAverage;
  var strideAverage;
  var stanceAverage;

  function getData() {
      $.getJSON('http://ioaklym.herokuapp.com/steps', function(data) {
          console.log(data);
          //loop and see see ach different data entry
          for (var i = 0; i < data.length; i++) {
              //storing the data
              console.log(data[i].angle);
              console.log((data[i].timestamp).substring(12, 19));
              console.log(data[i].swing);
              //push it to array

              if (data[i].angle) {
                  AngleDataLeftFoot.push({
                      x: (data[i].timestamp).substring(12, 19),
                      y: data[i].angle
                  });
                  AngleDataRightFoot.push({
                      x: (data[i].timestamp).substring(12, 19),
                      y: Math.random() + 125 + (10 * randomSign())
                  });
              }
              if(typeof data[i].swing !== 'undefined'){
                  swingData.push({
                      x: (data[i].timestamp).substring(12, 19),
                      y: data[i].swing
                  });
              }
              if(data[i].stride){
                  strideData.push({
                      x: (data[i].timestamp).substring(12, 19),
                      y: data[i].stride
                  });
              }
              if(data[i].stance){
                  stanceData.push({
                      x: (data[i].timestamp).substring(12, 19),
                      y: data[i].stance
                  });
              }

          };
      });
  }

  function randomSign() {
      if (Math.random() > 0.75) return -1;
      return 1;
  }

  //data for angle chart
  function angleDataJSON() {
      return [{
          values: AngleDataLeftFoot,
          key: 'Left Foot',
          color: '#288E8E'
      }, {
          values: AngleDataRightFoot,
          key: 'Right foot',
          color: '#9CE3E3'
      }];
  }

  //swing chart
  var swingchart = nv.models.multiBarChart().margin({
      left: 100
  });

  swingchart.yAxis.axisLabel('Swing');
  swingchart.xAxis.axisLabel('Time(hour:min:second)');

  //data for the swing chart
  function swingDataJSON(){
      return [{
          values: swingData,
          key: 'Swing',
          color: '#5C97BF'
      }];
  }

  //stance chart
  var stancechart = nv.models.multiBarChart().margin({
      left: 100
  });

  stancechart.yAxis.axisLabel('Stance');
  stancechart.xAxis.axisLabel('Time(hour:min:second)');

  //data for the swing chart
  function stanceDataJSON(){
      return [{
          values: stanceData,
          key: 'Stance',
          color: '#9CE3E3'
      }];
  }

  //stride chart
  var stridechart = nv.models.multiBarChart().margin({
      left: 100
  });

  stridechart.yAxis.axisLabel('Stance');
  stridechart.xAxis.axisLabel('Time(hour:min:second)');

  //data for the swing chart
  function strideDataJSON(){
      return [{
          values: strideData,
          key: 'Stride',
          color: '#288E8E'
      }];
  }


  //for the download link
  var jsonData = (function() {
      var json = null;
      $.ajax({
          'async': false,
          'global': false,
          'url': 'http://ioaklym.herokuapp.com/steps',
          'dataType': "json",
          'success': function(data) {
              json = data;
          }
      });
      return json;
  })();
  var data = jsonData;
  var json = JSON.stringify(data);
  var blob = new Blob([json], {
      type: "application/json"
  });
  var url = URL.createObjectURL(blob);
  var a   = document.createElement('a');
  a.download    = "angle.json";
  a.href        = url;
  a.textContent = "Download angle data";
  document.getElementById('downloadAngle').appendChild(a);
  var show = false;
  $("#menu").click(function() {
      if (!show) {
          show = true;
          $('.row').fadeIn(1200);
          $('#menu').tipsy({
              show: 'false'
          });
      } else {
          show = false;
          $('.row').fadeOut(1200);
          $('#menu').tipsy({
              show: 'true'
          });
      }
  })

  //tooltip using tipsy.js library
  $('#menu').tipsy({
      trigger: 'manual',
      title: 'original-title',
      gravity: 'nw'
  });
  $('#menu').tipsy('show');