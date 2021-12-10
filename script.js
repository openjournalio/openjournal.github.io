function draw() {
    var canvas = $('canvas')[0];
    if(canvas.getContext) {
        var ctx = canvas.getContext('2d');
    }
}

$(document).ready(function() {
    // $(document).draw();
    $('#content').animate({
        opacity:1,
        marginTop:'0',
    }, 800);
    $('h2').click(function() {
        $(this).next('.subtext').slideToggle('fast');
        $(this).children('.hex').toggleClass('moved');
    })
});