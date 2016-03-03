// ========================
// ========================
// sparkline charts
// ========================
// ========================

// http://jsfiddle.net/cainmodyo/VhxDA/  
// http://jsfiddle.net/gh/get/jquery/1.7.1/highslide-software/highcharts.com/tree/master/samples/highcharts/tooltip/backgroundcolor-gradient/

$("#sparkline").sparkline([16,29,38], {
    type: 'bar',
    barWidth: 7,
    barSpacing: 2});
$("#sparkline2").sparkline([17,21,43], {
    type: 'bar',
    barWidth: 7,
    barSpacing: 2,
    barColor: '#bf0000'});