  google.charts.load("current", { packages: ["timeline", "corechart", "table", 'calendar'] });
  google.charts.setOnLoadCallback(timeline1);
  google.charts.setOnLoadCallback(milesBiked);
  google.charts.setOnLoadCallback(drawSheetName);
  // google.charts.setOnLoadCallback(drawSheetName2);  //table
  google.charts.setOnLoadCallback(CalenderBike);
  google.charts.setOnLoadCallback(coffeeVsTeaPieChart);
  google.charts.load('current', {
      'packages': ['geochart'],
      'mapsApiKey': 'AIzaSyC4Ss9juyuluLX9MgNek7oog-DvhrKrbWs',
  });
  google.charts.setOnLoadCallback(drawRegionsMap);



  // function drawVisualization() {
  //     var query = new google.visualization.Query(
  //         'http://spreadsheets.google.com/tq?key=pCQbetd-CptGXxxQIG7VFIQ&pub=1');
  //     query.setQuery('SELECT A,D WHERE D > 100 ORDER BY D');
  //     query.send(handleQueryResponse);
  // }

  // function handleQueryResponse(response) {
  //     if (response.isError()) {
  //         alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
  //         return;
  //     }
  //     var data = response.getDataTable();
  //     var options = {
  //       title: 'Miles Travelled by Bike',
  //       height:400,
  //       backgroundColor:'#1E88E5',
  //       titlePosition : 'middle',
  //       curveType:'function', // smoothed line
  //     };

  //     chart = new google.visualization.LineChart(document.getElementById('lineChart1'));
  //     console.log('hello');
  //     chart.draw(data,options);
  // }
  function milesBiked() {
      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1ksOUIS0-cuYUT6qGc5khFaksYitZtIk4wYGUcNTMxcM/edit?usp=sharing');
      query.setQuery('SELECT A,B order by A ');
      query.send(handleQueryResponse);
  }

  function handleQueryResponse(response) {
      if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
      }
      var data = response.getDataTable();
      var latestNum = data.og.length - 1;
      var totalMiles = data.og[latestNum].c[1].v;

      var options = {
          title: 'NUMBER of MILES BIKED : ' + Math.floor(totalMiles) + ' mi',
          titleTextStyle: { color: 'white', fontSize: 20 },
          height: 400,
          colors: ['white', 'white', 'white', 'white', ],
          vAxis: { title: 'Miles', titleTextStyle: { color: '#333' } },
          // backgroundColor:'#1E88E5', 
          backgroundColor: { fill: '#1E88E5' },
          // fontColor:'white',
          titlePosition: 'middle',
          curveType: 'function', // smoothed line
          pointSize: 13,
          legend: 'none',
          hAxis: {textStyle: {color: "#FFFFFF"}},
          vAxis: {textStyle: {color: "#FFFFFF"}},
      };

      chart = new google.visualization.AreaChart(document.getElementById('lineChart1'));

      chart.draw(data, options);
  }


  function CalenderBike() {
      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1ksOUIS0-cuYUT6qGc5khFaksYitZtIk4wYGUcNTMxcM/edit?usp=sharing');
      query.setQuery('SELECT A,C order by A ');
      query.send(handleQueryResponse_CalenderBike);
  }

  function handleQueryResponse_CalenderBike(response) {
      if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
      }
      var data = response.getDataTable();
      var options = {
          height: 400,
          calendar: {
              cellSize: 17,
              cellColor: {
                  stroke: '#76a7fa',
                  strokeOpacity: 1,
                  strokeWidth: 1,
              }
          },
          noDataPattern: {
              backgroundColor: '#76a7fa',
              color: '#a0c3ff'
          },
      };

      chart = new google.visualization.Calendar(document.getElementById('CalenderBike'));

      chart.draw(data, options);
  }






  //TimeLine

  function timeline1() {
      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1SHiU6S8IWKTAedfdSf6xGcln8X92Q3N_KGEtOi9JV8g/edit?usp=sharing');
      query.setQuery('SELECT A,B,C,D');
      query.send(handledrawChartQueryResponse);
  }

  function handledrawChartQueryResponse(response) {
      if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
      }
      var data = response.getDataTable();
      var options = {
          // colors: [],

          height: 500,
          // backgroundColor:'#ffc046',
          backgroundColor:'#ff9800',
          timeline: {
              barLabelStyle: {
                  fontSize: 17,
              },
              rowLabelStyle: {
                  fontSize: 17,
              },

          }
      };

      chart = new google.visualization.Timeline(document.getElementById('TimeLine'));

      chart.draw(data, options);
  }

  //TimeLine


  // Coffee VS Tea Pie Chart  
  function coffeeVsTeaPieChart() {
      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1JJVW8U7xtVYqGYsCY36hq5YUOmpdx8WuUYCNX0HtkDc/edit?usp=sharing');
      query.setQuery('SELECT E,F');
      query.send(coffeeVsTeaPieChartQueryResponse);
  }

  function coffeeVsTeaPieChartQueryResponse(response) {
      if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
      }
      var data = response.getDataTable();
      var options = {
          // title: 'COFFEE or TEA',
          // pieHole: 0.1,
          // colors: ['#813919', '#74d244'],
          // legend: 'none',
          legend: {
              textStyle: { fontSize: 15, position: 'left', color: 'white' },
          },
          backgroundColor: 'none',
          chartArea: { left: 150, top: 0, width: '80%', height: '100%' },
          pieSliceBorderColor: 'none',
          pieSliceTextStyle: { fontSize: 20 },
          // pieSliceText:'value',
      };

      var chart = new google.visualization.PieChart(document.getElementById('coffeeVsTeaPieChart'));

      chart.draw(data, options);
  }
  // Coffee VS Tea Pie Chart  












  // function drawChart() {
  //     var container = document.getElementById('example3.1');
  //     var chart = new google.visualization.Timeline(container);
  //     var dataTable = new google.visualization.DataTable();
  //     dataTable.addColumn({ type: 'string', id: 'Position' });
  //     dataTable.addColumn({ type: 'string', id: 'Name' });
  //     dataTable.addColumn({ type: 'date', id: 'Start' });
  //     dataTable.addColumn({ type: 'date', id: 'End' });
  //     dataTable.addRows([
  //         ['President', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
  //         ['President', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
  //         ['President', 'Thomas Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],
  //         ['Vice President', 'John Adams', new Date(1789, 3, 21), new Date(1797, 2, 4)],
  //         ['Vice President', 'Thomas Jefferson', new Date(1797, 2, 4), new Date(1801, 2, 4)],
  //         ['Vice President', 'Aaron Burr', new Date(1801, 2, 4), new Date(1805, 2, 4)],
  //         ['Vice President', 'George Clinton', new Date(1805, 2, 4), new Date(1812, 3, 20)],
  //         ['Secretary of State', 'John Jay', new Date(1789, 8, 25), new Date(1790, 2, 22)],
  //         ['Secretary of State', 'Thomas Jefferson', new Date(1790, 2, 22), new Date(1793, 11, 31)],
  //         ['Secretary of State', 'Edmund Randolph', new Date(1794, 0, 2), new Date(1795, 7, 20)],
  //         ['Secretary of State', 'Timothy Pickering', new Date(1795, 7, 20), new Date(1800, 4, 12)],
  //         ['Secretary of State', 'Charles Lee', new Date(1800, 4, 13), new Date(1800, 5, 5)],
  //         ['Secretary of State', 'John Marshall', new Date(1800, 5, 13), new Date(1801, 2, 4)],
  //         ['Secretary of State', 'Levi Lincoln', new Date(1801, 2, 5), new Date(1801, 4, 1)],
  //         ['Secretary of State', 'James Madison', new Date(1801, 4, 2), new Date(1809, 2, 3)]
  //     ]);
  //     chart.draw(dataTable);
  // }



  //diet composition

  function drawSheetName() {
      var queryString = encodeURIComponent('SELECT A, H, O, Q, R, U LIMIT 5 OFFSET 8');
      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1XWJLkAwch5GXAt_7zOFDcg8Wm8Xv29_8PWuuW15qmAE/gviz/tq?sheet=Sheet1&headers=1&tq=' + queryString);
      query.send(handleSampleDataQueryResponse);
  }

  function handleSampleDataQueryResponse(response) {
      if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
      }
      var data = response.getDataTable();
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, { backgroundColor: 'none', });
  }

  //diet composition



  //geo map 


  function drawRegionsMap() {
      var stateVisited = [
          ['States'],
          ['CA'],
          ['Arizona'],
          ['NEW MEXICO'],
          ['TEXAS'],
          ['LOUISIANA'],
          ['MISSISSIPPI'],
          ['Alabama'],
          ['FLORIDA'],
          ['COLORADO'],
          ['WYOMING'],
          ['IDAHO'],
          ['UTAH'],
          ['NEVADA'],
          ['NY'],
          ['NJ'],
          ['PENNSYLVANIA'],
          ['MARYLAND'],
          ['HI'],
      ]
      console.log(stateVisited.length);
      var data = google.visualization.arrayToDataTable(stateVisited);

      var options = {
          region: 'US',
          resolution: 'provinces',
          displayMode: 'region',
          backgroundColor: 'none',

      };

      var chart = new google.visualization.GeoChart(document.getElementById('geoMap'));
      document.getElementById("statesVisited").innerHTML = stateVisited.length +" / " + 50;

      chart.draw(data, options);
  }












  //---------------------Table---------------------
  // function drawSheetName2() {
  //     var queryString = encodeURIComponent('SELECT A, B');
  //     var query = new google.visualization.Query(
  //         'https://docs.google.com/spreadsheets/d/1lQMeWFssa9VDrYaAO8iliDzE2nW62MlzRADDrNxxfXg/edit?usp=sharing' + queryString);
  //     query.send(handleSampleDataQueryResponse2);
  // }

  // function handleSampleDataQueryResponse2(response) {
  //     if (response.isError()) {
  //         alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
  //         return;
  //     }
  //     var data = response.getDataTable();
  //     var chart = new google.visualization.Table(document.getElementById('chart_div2'));
  //     chart.draw(data, { height: 400 });
  // }
  //---------------------Table---------------------