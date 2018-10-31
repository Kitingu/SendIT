$(document).ready(function(){
    $('#btn-menu').click(changeNav);

    function changeNav(){
        $('#links').toggle(2000);
        $('#btn-menu').toggleClass('turn')
    }
})