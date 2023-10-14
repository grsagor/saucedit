$(document).ready(function (){

    /*filter*/

    document.querySelector('.payroll__filter--container').addEventListener('click', function (e){
        if (e.target.classList.contains('job__filter--btn')){
            const showJobFilter = document.querySelector('.job__list');
            showJobFilter.classList.toggle('show__job')
        }
    })
    document.querySelector('.payroll__filter--container').addEventListener('click', function (e){
        if (e.target.classList.contains('venues__filter--btn')){
            const showVenuesFilter = document.querySelector('.venus__list');
            showVenuesFilter.classList.toggle('show__venues')
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

})