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




// maps js

var geocoder = new google.maps.Geocoder();

//array to hold the geo address
var geoAddress = [];

//function framework
bytutorialMap = {
	initNavigateMap: function (mapID, panelDirectionID, startLatitude, startLongitude, endLatitude, endLongitude) {
		var directionsDisplay = new google.maps.DirectionsRenderer;
		var directionsService = new google.maps.DirectionsService;
		
		//initialize the map
		var map = new google.maps.Map(document.getElementById(mapID), {
		  zoom: 7,
		  center: {lat: startLatitude, lng: startLongitude}
		}); 
		
		//clear the direction panel
		$("#" + panelDirectionID).html("");
		directionsDisplay.setMap(map);
		directionsDisplay.setPanel(document.getElementById(panelDirectionID));

		//prepare the latitude and longitude data
		start = startLatitude + ", " + startLongitude;
		end = endLatitude + ", " + endLongitude;
		bytutorialMap.calculateAndDisplayRoute(directionsService, directionsDisplay, start, end);
	},

	//function to get the driving route
	calculateAndDisplayRoute: function (directionsService, directionsDisplay, start, end) {
		directionsService.route({
		  origin: start,
		  destination: end,
		  travelMode: 'DRIVING'
		}, function(response, status) {
		  if (status === 'OK') {
			directionsDisplay.setDirections(response);
		  } else {
			alert('Directions request failed due to ' + status);
		  }
		});
	},

	//get geolocation based on address
	codeAddress: function (address) {
		return new Promise(function(resolve, reject){
			geocoder.geocode({ 'address': address }, function (results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					resolve(results);
				} else {
					reject(Error("Geocode for address " + address + " was not successful for the following reason: " + status));
				}
			});
		});
	},
	
	//function to get geolocation of both addresses.
	getGeolocationData: function(){
		if($("#txtStartingPoint").val() != "" && $("#txtDestinationPoint").val() != ""){
			geoAddress = [];
			bytutorialMap.codeAddress($("#txtStartingPoint").val()).then(function(response){
				var geoData = {
					latitude: response[0].geometry.location.lat(),
					longitude: response[0].geometry.location.lng()
				}
				geoAddress.push(geoData);
			}).then(function(){
				return bytutorialMap.codeAddress($("#txtDestinationPoint").val()).then(function(response){
					var geoData2 = {
						latitude: response[0].geometry.location.lat(),
						longitude: response[0].geometry.location.lng()
					}
					geoAddress.push(geoData2);
				});
				
			}).then(function(){
				bytutorialMap.initNavigateMap("map", "panel-direction", geoAddress[0].latitude, geoAddress[0].longitude, geoAddress[1].latitude, geoAddress[1].longitude);
			});
		}else{
			alert("Please enter both addresses");
		}
	},
	
	//clear entries and map display
	clearEntries: function(){
		$("#txtStartingPoint, #txtDestinationPoint").val("");
		$("#map, #panel-direction").html("");
	}
}





