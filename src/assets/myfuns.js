

function getPoints(city1, city2, divid){
    var geocoder =  new google.maps.Geocoder();
    geocoder.geocode( { 'address': city1}, function(results, status) {
    pointA = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()); 
    
        geocoder.geocode( { 'address': city2}, function(results, status) {
        pointB = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()); 
    
        initMap(pointA, pointB, divid)
    });
    });
}

var map;

function initMap(pointA, pointB, divid) {
    pointA,
    pointB,
    myOptions = {
    zoom: 7,
    center: pointA
    },
    map = new google.maps.Map(document.getElementById(divid), myOptions),
    // Instantiate a directions service.
    directionsService = new google.maps.DirectionsService,
    directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
    }),
    markerA = new google.maps.Marker({
    position: pointA,
    title: "point A",
    label: "A",
    map: map
    }),
    markerB = new google.maps.Marker({
    position: pointB,
    title: "point B",
    label: "B",
    map: map
    });

    calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB);


    function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
        directionsService.route({
            origin: pointA,
            destination: pointB,
            travelMode: google.maps.TravelMode.DRIVING
            }, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }
}
