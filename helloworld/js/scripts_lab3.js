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
fetch('/data/map.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, 
            {
            pointToLayer: function(feature, latlng) {
                var capitalName = feature.properties.name;
                var stateName = feature.properties.state;
                var capitalPop = feature.properties.pop2024;
                var markerSize = capitalPop*.000008; // Adjust multiplier as needed
                return L.circleMarker(latlng, {
                    radius: markerSize,
                    fillColor: "#ff7800",
                    color: "#000",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                }).bindPopup(capitalName + ", " + stateName + "<br>Population: " + numberWithCommas(capitalPop));
            }
        })
        .addTo(map31);
    })
    .catch(error => console.error('Error: ', error));



//// choropleth data - state capital geojson ////
var map32 = L.map('mappy2_lab3').setView([45, -105], 3); // leaflet; make a map object called map; add it to the DOM object where mappy is

L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
}).addTo(map32); // add that tile layer to the map object

fetch('/data/tl_2023_us_state.json')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data,
            {
                "color": "#ff7800",
                "weight": 5,
                "opacity": 0.65
            }
            ).addTo(map32);
    })
    .catch(error => console.error('Error: ', error));








    
//// establish functions ////
/// number formatting
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

