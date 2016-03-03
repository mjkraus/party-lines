// ========================
// ========================
// sparkline charts
// ========================
// ========================

// http://jsfiddle.net/cainmodyo/VhxDA/  
// http://jsfiddle.net/gh/get/jquery/1.7.1/highslide-software/highcharts.com/tree/master/samples/highcharts/tooltip/backgroundcolor-gradient/
// http://www.pewresearch.org/fact-tank/2014/06/12/7-things-to-know-about-polarization-in-america/

$( '.chart--bar' ).highcharts({
  "chart": {
    "type": "bar"
  },
  "credits": {
    "enabled": false
  },
  "title": null,
  "plotOptions": {
    "bar": {
      "pointWidth": 25,
      "color": "#90d6f3",
      "colorByPoint": true,
      "colors": [
        "#90d6f3",
        "#61c5ef",
        "#0fa0dd"
      ]
    },
  },
  "xAxis": {
    "min": 0,
    "title": {
      "text": null
    },
      "labels": {
          "style" : {
              "textTransform": "uppercase",
              "color": "#222"
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
          "text": "Posts by People",
          "margin": 15,
          "style": {
              "fontSize": "10px",
              "fontWeight": "normal",
              "textTransform": "uppercase",
              "color": "#bbb"
          }
      },
      "labels": {
          "style" : {
              "fontSize": "12px",
              "color": "#222"
          }
      }
  },
  "legend": {
    "enabled": false
  },
  "series": [
    {"name": "percentage of democrates consistently liberal",
      "type": "bar",
      "data": [
        70,
        68,
        94
      ]
    }
  ]
});