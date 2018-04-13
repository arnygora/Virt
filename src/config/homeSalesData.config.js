const SalesChart = {
    chart: {
        type: 'column',
        height: 300,
        backgroundColor: '#2f3242',
        // margin: 0
    },

    yAxis: {
        visible: true,
        gridLineColor: "#535b64",
        labels: {
            enabled: false
        },
        title: {
            text: ''
        },
    },
    xAxis: {
        categories: ['1', '2', '3', '4', '5', '6',
            '7', '8', '9', '10', '11', '12'],
        labels: {
            style: {
                color: "#a7b3cc",
                fontSize: "14px",
                fontWeight: "bold"
            }
        },
        tickWidth: 0,
        gridLineWidth: 0,
        lineColor: "#505464"
    },
    plotOptions: {
        borderWidth: 0,
        borderColor: '#2f3242',
        spline: {
            marker: {
                enabled: false
            },
        },
        series: {
            color: '#505464',
            states: {
                hover: {
                    color: "#2196f3",
                    borderColor: '#2196f3'
                }
            }
        }
    },
    series: [{
        data: []
    }],
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.y}</b>',
        shared: true

    },

};
export default SalesChart;