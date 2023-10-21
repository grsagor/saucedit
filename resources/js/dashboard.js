$(document).ready(function (){

    /*filter*/
    document.querySelector('.abc').addEventListener('click', function (e){
        if (e.target.classList.contains('job__filter--btn')){
            console.log('clicked in job')
            const showJobFilter = document.querySelector('.job__list');
            showJobFilter.classList.toggle('show__job');
            jobFilterBtn.classList.add('payroll__filter--bg');
        }
    })
    document.querySelector('.abc').addEventListener('click', function (e){
        if (e.target.classList.contains('venues__filter--btn')){
            const showVenuesFilter = document.querySelector('.venus__list');
            showVenuesFilter.classList.toggle('show__venues');
            venusFilterBtn.classList.add('payroll__filter--bg');
        }
    })
    document.querySelector('.efg').addEventListener('click', function (e){
        console.log('clicked on abc')
        if (e.target.classList.contains('sync__filter--btn')){
            console.log('clicked in sync')
            const syncFilter = document.querySelector('.sync__list');
            syncFilter.classList.toggle('show__sync');
            syncFilterBtn.classList.add('payroll__filter--bg');
        }
    })

    var jobFilterBtn = document.getElementById('jobFilter');
    var jobFilterContent = document.getElementById('jobFilterContent');

    var venusFilterBtn = document.getElementById('venusFilter');
    var venusFilterContent = document.getElementById('venusFilterContent');

    var syncFilterBtn = document.getElementById('syncFilter');
    var syncFilterContent = document.getElementById('syncFilterContent');

    document.addEventListener('click', function (e){
        if (jobFilterBtn != e.target){
            const hide = document.querySelector('.job__list');
            hide.classList.remove('show__job')
        }
        const so = e.target.closest('.job__list');
        if (!so) return;
        so.classList.add('show__job')
    })

    document.addEventListener('click', function (e){
        if (venusFilterBtn != e.target){
            const hide = document.querySelector('.venus__list');
            hide.classList.remove('show__venues')
        }
        const so = e.target.closest('.venus__list');
        if (!so) return;
        so.classList.add('show__venues')
    })

    document.addEventListener('click', function (e){
        if (syncFilterBtn != e.target){
            const hide = document.querySelector('.sync__list');
            hide.classList.remove('show__sync')
        }
        const so = e.target.closest('.sync__list');
        if (!so) return;
        so.classList.add('show__sync')
    })

    document.addEventListener('click', function (e){
        if (jobFilterBtn == e.target || (jobFilterContent != e.target && !jobFilterContent.contains(e.target))){
            showPriority();
            var selectedValue = $('input[name="priority_radio"]:checked').val();
            if (!selectedValue && $('.show__job').length == 0) {
                jobFilterBtn.classList.remove('payroll__filter--bg');
            }
        }
    })
    document.addEventListener('click', function (e){
        if (venusFilterBtn == e.target || (venusFilterContent != e.target && !venusFilterContent.contains(e.target))){
            showStatus();
            var selectedValue = $('input[name="status_check"]:checked').val();
            if (!selectedValue && $('.show__venues').length == 0) {
                venusFilterBtn.classList.remove('payroll__filter--bg');
            }
        }
    })
    document.addEventListener('click', function (e){
        if (syncFilterBtn == e.target || (syncFilterContent != e.target && !syncFilterContent.contains(e.target))){
            showSync();
            var selectedValue = $('input[name="sync_radio"]:checked').val();
            if (!selectedValue && $('.show__sync').length == 0) {
                syncFilterBtn.classList.remove('payroll__filter--bg');
            }
        }
    })
    $(document).on('click', '#priority_unselect_button', function() {
        jobFilterBtn.classList.remove('payroll__filter--bg');
        var html = `
        Selected Events
        <svg width="14" height="7" viewBox="0 0 8 4" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0.666504 0.666504L3.99984 3.99984L7.33317 0.666504H0.666504Z"
                fill="#616161" />
        </svg>
        `
        $('#jobFilter').html(html);
        $('input[name="priority_radio"]:checked').prop('checked', false);;
    });
    $(document).on('click', '#status_unselect_button', function() {
        venusFilterBtn.classList.remove('payroll__filter--bg');
        var html = `
        This week
        <svg width="14" height="7" viewBox="0 0 8 4" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0.666504 0.666504L3.99984 3.99984L7.33317 0.666504H0.666504Z"
                fill="#616161" />
        </svg>
        `
        $('#venusFilter').html(html);
        $('input[name="status_check"]:checked').prop('checked', false);
    });
    $(document).on('click', '#sync_unselect_button', function() {
        syncFilterBtn.classList.remove('payroll__filter--bg');
        var html = `
        This month
        <svg width="14" height="7" viewBox="0 0 8 4" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0.666504 0.666504L3.99984 3.99984L7.33317 0.666504H0.666504Z"
                fill="#616161" />
        </svg>
        `
        $('#syncFilter').html(html);
        $('input[name="sync_radio"]:checked').prop('checked', false);
    });

    $('.filter_clear_button').click(function() {
        const name = $(this).data('name');
        $(`input[name="${name}"]:checked`).prop('checked', false)
    })
})
function showPriority(){
    var selectedValue = $('input[name="priority_radio"]:checked').val();
    if (selectedValue) {
        var html = `
        Selected Events: ${selectedValue}
        <button class="unselect_button" id="priority_unselect_button"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button>
        `
        $('#jobFilter').html(html);
    }
}
function showStatus(){
    var selectedValue = $('input[name="status_check"]:checked').val();
    if (selectedValue) {
        var html = `
        This week: ${selectedValue}
        <button class="unselect_button" id="status_unselect_button"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button>
        `
        $('#venusFilter').html(html);
    }
}
function showSync(){
    var selectedValue = $('input[name="sync_radio"]:checked').val();
    if (selectedValue) {
        var html = `
        This month: ${selectedValue}
        <button class="unselect_button" id="sync_unselect_button"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button>
        `
        $('#syncFilter').html(html);
    }
}


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
    barPercentage: 1.0,
    categoryPercentage: 0.6,
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
        x: {
            grid: {
                drawOnChartArea: false
            }
        },
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
                window.location.href = "../pages/safework-1.html";
            } else if (datasetLabel === "Work Health and Safety") {
                window.location.href = "../pages/safework-1.html";
            } else if (datasetLabel === "Others") {
                window.location.href = "../pages/safework-1.html";
            }
        }
    };
};