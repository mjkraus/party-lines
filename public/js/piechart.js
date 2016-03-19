    // Build the chart
// ====================================
// liberal pie chart
// ====================================    
    $('#liberal-pie-chart').highcharts({
      colors: ["#053afd", "#216ed2", "#83b2ef", "#043574", "#bec0c3"],
      chart: {
        backgroundColor: null,
        borderWidth: 0,
        plotBackgroundColor: null,
        plotShadow: false,
        plotBorderWidth: 0,
        type: 'pie'
      },
      navigation: {
        buttonOptions: {
          enabled: false
        }
      },
  "credits": {
    "enabled": true,
    "href": "http://www.people-press.org/2014/06/12/political-polarization-in-the-american-public/pp-2014-06-12-polarization-0-05/",
    "text":"Data Provided by Pew Research Center"
  },
      labels: {
        style: {
          color: '#99b',
          fontSize: "2em"
        }
      },
    "title": {
      "text": "Consistent liberals named an array of main news sources",
        "margin": 15,
          "style": {
              "fontSize": "20px",
              "fontWeight": "normal",
              "textTransform": "uppercase",
              "color": "#0000"
          }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>',
        style: {
          font: '"museo sans", Helvetica, Arial, sans-serif',
          fontSize: "1em"
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: false,
          innerSize: '50%',
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            y: -6,
            format: '<span style="font-family: museo sans, Helvetica, Arial, sans-serif; font-size: 2em; font-weight: 500; color: #25282a;">{point.name}: {point.percentage:.0f}%</span>'
          }
        }
      },
      legend: {
        enabled: false
      },
      series: [{
        name: 'main news sources named by consistent liberals',
        colorByPoint: true,
        data: [{
          name: "NPR",
          y: 13
        }, {
          name: "MSNBC",
          y: 12
        }, {
          name: "NYT",
          y: 10
        }, {
          name: "CNN",
          y: 15
        },{
          name: "other",
          y: 50
        }]
      }]
});


// ====================================
// conservative pie chart
// ====================================

    $('#conservative-pie-chart').highcharts({
      colors: ["#ca0516", "#bec0c3"],
      chart: {
        backgroundColor: null,
        borderWidth: 0,
        plotBackgroundColor: null,
        plotShadow: false,
        plotBorderWidth: 0,
        type: 'pie'
      },
      navigation: {
        buttonOptions: {
          enabled: false
        }
      },
  "credits": {
    "enabled": true,
    "href": "http://www.people-press.org/2014/06/12/political-polarization-in-the-american-public/pp-2014-06-12-polarization-0-05/",
    "text":"Data Provided by Pew Research Center"
  },
      labels: {
        style: {              
              "fontSize": "10px",
              "fontWeight": "normal",
              "textTransform": "uppercase",
              "color": "#0000"
        }
      },
    "title": {
      "text": "Consistent conservatives are tightly clustered around one main news source",
        "margin": 15,
          "style": {
              "fontSize": "20px",
              "fontWeight": "normal",
              "textTransform": "uppercase",
              "color": "#0000"
          }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>',
        style: {
          font: '"museo sans", Helvetica, Arial, sans-serif',
          fontSize: "1em"
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: false,
          innerSize: '50%',
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            y: -6,
            format: '<span style="font-family: museo sans, Helvetica, Arial, sans-serif; font-size: 2em; font-weight: 500; color: #25282a;">{point.name}: {point.percentage:.0f}%</span>'
          }
        }
      },
      legend: {
        enabled: false
      },
      series: [{
        name: 'main news sources named by consistent conservatives',
        colorByPoint: true,
        data: [{
          name: "Fox News",
          y: 47
        }, {
          name: "other",
          y: 53
        }]
      }]

    });
