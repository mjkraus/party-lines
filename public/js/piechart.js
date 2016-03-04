    // Build the chart
    $('#pie-chart').highcharts({
      colors: ["#bf1e2e", "#25282a", "#761213", "#bcbcbc"],
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
      credits: {
        enabled: false
      },
      labels: {
        style: {
          color: '#99b',
          fontSize: "2em"
        }
      },
      title: {
        text: null
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
