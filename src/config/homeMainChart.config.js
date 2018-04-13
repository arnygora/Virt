const SalesChart = {
    chart: {
        type: 'areaspline',
        margin: 0,
        backgroundColor: {
            linearGradient: [500, 500, 500],
            stops: [
                [0, '#2c2c42'],
                [0.5, '#112753'],
                [0.9, '#2f3242']
            ]
        },
        height: 300,
    },
    xAxis: {
        title: {
            text: ''
        },
        categories: [
            'MON',
            'TUE',
            'WED',
            'THU',
            'FRI',
            'SAT',
            'SUN'
        ],
        labels: {
            y: -15,
            style: {
                color: "#9ca1b2",
                fontSize: "14px",
                fontWeight: "bold"
            },
            gridLineColor: '#660906',
            gridZIndex: 4,
            tickWidth: 0,
            gridLineWidth: 1,
            lineColor: "#3a3d4c",
            crosshair:{
                zIndex: 4
            }
        }
    },
    yAxis: {
        title: {
            text: ''
        },
        visible: false,
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },

    plotOptions: {
        areaspline: {
            marker: {
                enabled: false
            },
            // fillOpacity: 0.9,
            fillColor: {
                linearGradient: [500, 500, 500],
                stops: [
                    [0, '#2daeff'],
                    [1, '#102677']
                ]
            }
        }
    },
    series: [{
        lineWidth: 4,
        color: '#2196f3',
        data: [300, 510, 123, 332, 254, 321, 123]
    }],
};

export default SalesChart;