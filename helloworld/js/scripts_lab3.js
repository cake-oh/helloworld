//// lab 3 ////
//// point data - state capital geojson ////

// following code from https://leafletjs.com/examples/quick-start/
var map31 = L.map('mappy1_lab3').setView([45, -105], 3); // leaflet; make a map object called map; add it to the DOM object where mappy is

L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
}).addTo(map31); // add that tile layer to the map object

// this fetches the local geojson data
fetch('/data/usa-state-capitals.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, 
            {
            pointToLayer: function(feature, latlng) {
                var capitalName = feature.properties.name;
                var markerSize = capitalName.length*0.7; // Adjust multiplier as needed
                var stateName = feature.properties.state;
                return L.circleMarker(latlng, {
                    radius: markerSize,
                    fillColor: "#ff7800",
                    color: "#000",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                }).bindPopup("State: " + stateName + "<br>Capital: " + capitalName);
            }
        })
        .addTo(map31);
    })
    .catch(error => console.error('Error: ', error));


    
//// choropleth data - state capital geojson ////



