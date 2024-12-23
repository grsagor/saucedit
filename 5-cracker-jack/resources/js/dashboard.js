$(document).ready(function() {
    $('.newbie-progress').each(function(index, newbieProgress) {
        const widthValue = $(newbieProgress).data('width');
        const totalValue = $(newbieProgress).data('total');
        const total = totalValue || 100;
        const width = (widthValue / total ) * 100;
        const height = $(newbieProgress).data('height');
        const fontWeight = $(newbieProgress).data('font-weight');
        const background = $(newbieProgress).data('background');

        $(newbieProgress).css({
            'position': 'relative',
            'width': width + '%',
            'height': height,
            'font-weight': fontWeight,
            'background': background
        });

        const widthText = $('<span></span>').text(widthValue).css({
            'position': 'absolute',
            'top': '50%',
            'right': '0',
            'transform': 'translate(calc(100% + 5px), -50%)',
            'white-space': 'nowrap',
            'font-size': '12px'
        });

        $(newbieProgress).append(widthText);
    });
});
