// ========================
// ========================
// Democrat Liberal Chart
// ========================
// ========================

// Chart style inspired by Bar Chart Chris Nager using Highcharts.js
// http://codepen.io/chrisnager/pen/kGucB
// http://www.pewresearch.org/fact-tank/2014/06/12/7-things-to-know-about-polarization-in-america/

$( '#democrat-liberal-bar' ).highcharts({
  "chart": {
    "type": "bar"
  },
  "credits": {
    "enabled": true,
    "href": "http://www.people-press.org/2014/06/12/political-polarization-in-the-american-public/pp-2014-06-12-polarization-0-05/",
    "text":"Data Provided by Pew Research Center"
  },
    "title": {
      "text": "Democrats Shift to the Left",
        "margin": 15,
          "style": {
              "fontSize": "20px",
              "fontWeight": "normal",
              "textTransform": "uppercase",
              "color": "#0000"
          }
    },
  "plotOptions": {
    "bar": {
      "pointWidth": 25,
      "color": "#90d6f3",
      "colorByPoint": true,
      "colors": [
        "#043574"
      ]
    },
  },
  "xAxis": {
    "min": 0,
    "title": {
      "text": "Years",
        "margin": 15,
          "style": {
              "fontSize": "10px",
              "fontWeight": "normal",
              "textTransform": "uppercase",
              "color": "#0000"
          }  
      },
    "categories": [
      "1994",
      "2004",
      "2014"
    ]
  },
  "yAxis": {
      "title": {
          "text": "Percentage of Consistently liberal Democrats on a 10-item scale of political values",
          "margin": 15,
          "style": {
              "fontSize": "10px",
              "fontWeight": "normal",
              "textTransform": "uppercase",
              "color": "#0000"
          }
      },
      "labels": {
          "style" : {
              "fontSize": "12px",
              "color": "#0000"
          }
      }
  },
  "legend": {
    "enabled": false
  },
  "series": [
    {"name": "Percentage of Democrats Consistently Liberal",
      "type": "bar",
      "data": [
        70,
        68,
        94
      ]
    }
  ]
});

// ==============================================
//         REPUBLICAN CHART
// ==============================================        

$( '#republican-conservative-bar' ).highcharts({
  "chart": {
    "type": "bar"
  },
  "credits": {
    "enabled": true,
    "href": "http://www.people-press.org/2014/06/12/political-polarization-in-the-american-public/pp-2014-06-12-polarization-0-05/",
    "text":"Data Provided by Pew Research Center"
  },
    "title": {
      "text": "Republicans Shift to the Right",
        "margin": 15,
          "style": {
              "fontSize": "20px",
              "fontWeight": "normal",
              "textTransform": "uppercase",
              "color": "#0000"
          }
    },         
  "plotOptions": {
    "bar": {
      "pointWidth": 25,
      "color": "#90d6f3",
      "colorByPoint": true,
      "colors": [
        "#ca0516"
      ]
    },
  },
  "xAxis": {
    "min": 0,
    "title": {
      "text": "Years",
        "margin": 15,
          "style": {
              "fontSize": "10px",
              "fontWeight": "normal",
              "textTransform": "uppercase",
              "color": "#0000"
          }        
    },
      "labels": {
          "style" : {
              "textTransform": "uppercase",
              "color": "#0000"
          }
      },
    "categories": [
      "1994",
      "2004",
      "2014"
    ]
  },
  "yAxis": {
      "title": {
          "text": "Percentage of Consistently Conservative Republicans on a 10-item scale of political values",
          "margin": 15,
          "style": {
              "fontSize": "10px",
              "fontWeight": "normal",
              "textTransform": "uppercase",
              "color": "#0000"
          }
      },
      "labels": {
          "style" : {
              "fontSize": "12px",
              "color": "#0000"
          }
      }
  },
  "legend": {
    "enabled": false
  },
  "series": [
    {"name": "Percentage of Republicans Consistently Conservative",
      "type": "bar",
      "data": [
        64,
        70,
        92
      ]
    }
  ]
});