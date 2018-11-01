$(document).ready(function(){
    $('#btn-menu').click(changeNav);

    function changeNav(){
        $('#links').toggle(500);
        $('#btn-menu').toggleClass('turn')
    }
})

function cancelOrder() {
    var txt;
    if (confirm("Are you sure you want to cancel?")) {
        message = "Order cancel successfully!";
    } else {
        message = "Order not cancelled!";
    }
}