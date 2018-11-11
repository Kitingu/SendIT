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
        alert("Order cancelled successfully!");
    } else {
        alert( "Order not cancelled!");
    }
}

function updateDestination() {
    var destination= prompt("Please enter the new destination");
    if (destination) {
        alert("destination updated successfully");
    }
    else{
        alert("no changes were made")
    }
}

function updateLocation() {
    var location= prompt("Please enter the new location");
    if (location) {
    }
    else{
        alert("no changes were made")
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}