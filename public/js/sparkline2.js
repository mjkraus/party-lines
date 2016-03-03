// ========================
// ========================
// sparkline charts
// ========================
// ========================

// http://jsfiddle.net/cainmodyo/VhxDA/  
// http://jsfiddle.net/gh/get/jquery/1.7.1/highslide-software/highcharts.com/tree/master/samples/highcharts/tooltip/backgroundcolor-gradient/
// http://www.pewresearch.org/fact-tank/2014/06/12/7-things-to-know-about-polarization-in-america/

$(function () {
    $('#test2').highcharts({
        chart:{
            margin:[0, 0, 0, 0],
            backgroundColor:'transparent'
        },

        tooltip: {
        backgroundColor: null,
        borderWidth: 0,
        shadow: false,
        useHTML: true,
        hideDelay: 0,
        shared: true,
        padding: 0,

        },

        title:{
            text:''
        },
        credits:{
            enabled:false
        },
        xAxis:{
            labels:{
                enabled:false
            }
        },
        yAxis:{
            maxPadding:5,
            minPadding:5,
            gridLineWidth: 0,
            endOnTick:false,
            labels:{
                enabled:false
            }
        },

        legend:{
            enabled:false
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar']
        },
        // Unfavorable attitude dems to reps
        series: [{name: 'dem hate',
            data: [16, 29, 38]
        }]
    });
});