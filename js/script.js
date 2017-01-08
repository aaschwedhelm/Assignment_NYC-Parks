var map = L.map('map').setView([40.68025, -74.00155], 13);

L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
	minZoom: 0,
	maxZoom: 18,
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'

}).addTo(map);

// L.tileLayer('https://a.tiles.mapbox.com/v3/mapbox.world-bright/{z}/{x}/{y}.png', {
//     maxZoom: 18
// }).addTo(map);

// var credits = L.control.attribution().addTo(map);
// credits.addAttribution('© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>');

//define parks icon
var parksIcon = L.icon({
    iconUrl: 'img/parkIcon.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [32, 37], // size of the icon
    shadowSize:   [51, 37], // size of the shadow
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    shadowAnchor: [20, 37],  // the same for the shadow
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});



//create markers for parks
var centralParkMarker = L.marker([40.783462, -73.964767], {icon: parksIcon}).addTo(map);
//centralParkMarker.bindPopup("Larry's house").openPopup();

var riversideParkMarker = L.marker([40.800097, -73.971977],{icon: parksIcon}).addTo(map);

var prospectParkMarker = L.marker([40.664769, -73.970432],{icon: parksIcon}).addTo(map);


//listeners for sidebar hovers
$('.park').on('mouseover',function(){
  $(this).css('background','#8ECEFA');
});

$('.park').on('mouseout',function(){
  $(this).css('background','#46B3FE');
});

//Central Park Click listener
$('.centralPark').on('click',function(){
  map.panTo(new L.LatLng(40.778997, -73.968973),{animate: true, duration: 1.0});
});

//Riverside Park Click listener
$('.riversidePark').on('click',function(){
  map.panTo(new L.LatLng(40.800097, -73.971977),{animate: true, duration: 1.0});
});

//Prospect Park Click listener
$('.prospectPark').on('click',function(){
  map.panTo(new L.LatLng(40.664769, -73.970432),{animate: true, duration: 1.0});
});

//listeners for map hover
centralParkMarker.on('mouseover',function(){
	$('.centralPark').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.centralPark').toggleClass('hover');
	});

riversideParkMarker.on('mouseover',function(){
	$('.riversidePark').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.riversidePark').toggleClass('hover');
	});

prospectParkMarker.on('mouseover',function(){
	$('.prospectPark').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.prospectPark').toggleClass('hover');
	});


