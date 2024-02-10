var myDiv = document.getElementById("lie")
myDiv.innerHTML = "I generated this with javascript"

var myDiv = document.getElementById("lie");
lie.addEventListener("click", function(){
    alert("you found a lie");

});


var myDiv = document.getElementById("truth");
lie.addEventListener("click", function(){
    alert("you found a truth");

});

// following code from https://leafletjs.com/examples/quick-start/
var map = L.map('mappy').setView([51.505, -0.09], 13); // leaflet; make a map object called map; add it to the DOM object where mappy is

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { // grab the base map tile from open street map
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); // add that tile layer to the map object


// base map day (edit the above code and pick a base map from https://leaflet-extras.github.io/leaflet-providers/preview/)
// also need to go into index.html to add the mappy2 variable and main.css to add the size of the map
var map2 = L.map('mappy2').setView([30, -150], 3); // leaflet; make a map object called map; add it to the DOM object where mappy is
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
	maxZoom: 13
}).addTo(map2);



// this fetches the airports.geojson data from local 
fetch('/data/airports.geojson') 
    .then(response => response.json()) // this waits until the promise is fulfilled (i.e., the fetch request has successfully gotten the data) --> also converts the data to JSON
    .then(data => {
        L.geoJSON(data).addTo(map); // from leaflet tutorial
        //console.log(data); // then take the data and do this lil thing to it (print it out)
    })
    .catch(error => console.error('Error: ', error)); // 'error catching' - i.e., catch any error and print any error to the console



// annotate map with pop-ups and such
var poppy = L.marker([51.5, -0.09]).addTo(map); // add a pointer on the map at these coordinates

poppy.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup(); // annotate the marker: could be an image, link, all kinds of things; openpopup means the marker is always open

var circle = L.circle([51.508, -0.11], { // add a circle
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

circle.bindPopup("I am a circle."); // annotate the circle; bindpopup makes it pop up when it's clicked

var polygon = L.polygon([ // add a polygon
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);


polygon.bindPopup("I am a polygon."); // annotate the polygon; bindpopup makes it pop up when it's clicked

