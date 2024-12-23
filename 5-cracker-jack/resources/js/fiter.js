$(document).ready(function (){

    /*filter*/

    document.querySelector('.payroll__filter--container').addEventListener('click', function (e){
        if (e.target.classList.contains('job__filter--btn')){
            const showJobFilter = document.querySelector('.job__list');
            showJobFilter.classList.toggle('show__job');
            jobFilterBtn.classList.add('payroll__filter--bg');
        }
    })
    document.querySelector('.payroll__filter--container').addEventListener('click', function (e){
        if (e.target.classList.contains('venues__filter--btn')){
            const showVenuesFilter = document.querySelector('.venus__list');
            showVenuesFilter.classList.toggle('show__venues');
            venusFilterBtn.classList.add('payroll__filter--bg');
        }
    })
    document.querySelector('.payroll__filter--container').addEventListener('click', function (e){
        if (e.target.classList.contains('sync__filter--btn')){
            const showVenuesFilter = document.querySelector('.sync__list');
            showVenuesFilter.classList.toggle('show__sync')
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
            jobFilterBtn.classList.remove('payroll__filter--bg');
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
        if (jobFilterBtn != e.target && jobFilterContent != e.target && !jobFilterContent.contains(e.target)){
            showPriority();
        }
    })
    document.addEventListener('click', function (e){
        if (venusFilterBtn != e.target && venusFilterContent != e.target && !venusFilterContent.contains(e.target)){
            showStatus();
        }
    })

    $(document).on('click', '#priority_unselect_button', function() {
        jobFilterBtn.classList.remove('payroll__filter--bg');
        var html = `
        Priority
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
        Status
        <svg width="14" height="7" viewBox="0 0 8 4" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0.666504 0.666504L3.99984 3.99984L7.33317 0.666504H0.666504Z"
                fill="#616161" />
        </svg>
        `
        $('#venusFilter').html(html);
        $('input[name="status_check"]:checked').prop('checked', false);
    });

})

function showPriority(){
    var selectedValue = $('input[name="priority_radio"]:checked').val();
    if (selectedValue) {
        var html = `
        Priority: ${selectedValue}
        <button class="unselect_button" id="priority_unselect_button"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button>
        `
        $('#jobFilter').html(html);
    }
}
function showStatus(){
    var selectedValue = $('input[name="status_check"]:checked').val();
    if (selectedValue) {
        var html = `
        Status: ${selectedValue}
        <button class="unselect_button" id="status_unselect_button"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button>
        `
        $('#venusFilter').html(html);
    }
}