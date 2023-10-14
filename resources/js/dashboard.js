$(document).ready(function () {



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
                label: "Facebook",
                backgroundColor: "pink",
                borderColor: "red",
                borderWidth: 1,
                data: [3, 5, 6, 7,3, 5, 6]
              },
              {
                label: "Twitter",
                backgroundColor: "lightblue",
                borderColor: "blue",
                borderWidth: 1,
                data: [4, 7, 3, 6, 10, 7, 4]
              },
              {
                label: "Instagram",
                backgroundColor: "yellow",
                borderColor: "orange",
                borderWidth: 1,
                data: [6, 9, 7, 3, 10, 7, 4]
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
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
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
                if (datasetLabel === "Facebook") {
                    window.location.href = "https://www.facebook.com";
                } else if (datasetLabel === "Twitter") {
                    window.location.href = "https://www.twitter.com";
                } else if (datasetLabel === "Instagram") {
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

})