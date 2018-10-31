$(document).ready(function(){
    $('#btn-menu').click(changeNav);

    function changeNav(){
        $('#links').toggle(500);
        $('#btn-menu').toggleClass('turn')
    }
})