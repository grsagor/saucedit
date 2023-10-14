/*Bar Chart Start*/


var barChartData = {
    labels: [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ],
    datasets: [
        {
            label: "Safework",
            backgroundColor: "#F16532",
            borderColor: "#F16532",
            borderWidth: 1,
            data: [32, 30, 40, 44, 22, 34, 47]
        },
        {
            label: "Safework",
            backgroundColor: "#FCB196",
            borderColor: "#FCB196",
            borderWidth: 1,
            data: [49, 20, 49, 32, 23, 50, 23]
        },
        {
            label: "Work Health and Safety",
            backgroundColor: "#673AB7",
            borderColor: "#673AB7",
            borderWidth: 1,
            data: [45, 28, 23, 33, 22, 45, 37]
        },
        {
            label: "Others",
            backgroundColor: "#EDE7F6",
            borderColor: "#EDE7F6",
            borderWidth: 1,
            data: [46, 31, 23, 20, 30, 50, 22]
        }
    ]
};

var chartOptions = {
    plugins: {
        legend: {
            position: "bottom"
        },
    },
    responsive: true,
    title: {
        display: true,
        text: "Chart.js Bar Chart"
    },
    scales: {
        y: {
            beginAtZero: true,
            max: 50,
            ticks: {
                stepSize: 10
            }
        }
    }
}

window.onload = function () {
    var canvas = document.getElementById("barChart");
    var ctx = document.getElementById("barChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "bar",
        data: barChartData,
        options: chartOptions
    });

    // Add a click event listener to the canvas element
    canvas.onclick = function (evt) {
        var activePoints = myBar.getElementsAtEventForMode(evt, 'nearest', { intersect: true });
        if (activePoints.length > 0) {
            var datasetIndex = activePoints[0].datasetIndex;

            // Determine the dataset label based on the dataset index
            var datasetLabel = barChartData.datasets[datasetIndex].label;

            // Redirect to the corresponding website based on the dataset label
            if (datasetLabel === "Safework") {
                window.location.href = "https://www.facebook.com";
            } else if (datasetLabel === "Safework") {
                window.location.href = "https://www.twitter.com";
            } else if (datasetLabel === "Work Health and Safety") {
                window.location.href = "https://www.instagram.com";
            } else if (datasetLabel === "Others") {
                window.location.href = "https://www.instagram.com";
            }
        }
    };
};



/*Bar Chart End*/

/*Line Chart Start*/

var linechart = document.getElementById('myChart').getContext("2d");

var myChart = new Chart(linechart, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
        datasets: [{
            label: "Data",
            borderColor: "#80b6f4",
            pointBorderColor: "#80b6f4",
            pointBackgroundColor: "#5E35B1",
            pointHoverBackgroundColor: "#5E35B1",
            pointHoverBorderColor: "#80b6f4",
            pointBorderWidth: 0,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            borderWidth: 1,
            data: [10, 12, 15, 17, 18, 17, 16]
        }]
    },
    options: {
        tooltips: {
            callbacks: {
                labelColor: function (tooltipItem, chart) {
                    return {
                        borderColor: 'rgb(255, 0, 0)',
                        backgroundColor: 'rgb(255, 0, 0)'
                    }
                }
            }
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false,
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }

            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    display: false,
                    beginAtZero: true
                },
                gridLines: {
                    display: false
                }
            }]
        }
    }
});
    /*Line Chart End*/