// Add console.log to check to see if our code is working
console.log("working");


  // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};
//Grabbing our GeoJSON data using [The pointToLayer Function]
// L.geoJSON(sanFranAirport, {
//     //We turn each feature into a marjer on the map.
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         console.log(latlng);
//         return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.name + "</h2> <hr>" + "<h3>" + feature.properties.city + ", " + feature.properties.country +"</h3>" );
//     }
// }).addTo(map);

//Grabbing our GeoJSON data using [The onEachFeature Function]
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2>" + "Airport code: SFO" + "</h2> <hr>" + "<h3>" + "Airport Name:" + feature. properties.name +"</h3>");
//     }
// }).addTo(map);






//Coordinates for each point to be used in the line
// let line = [
//   [37.6213, -122.3790],
//   [30.18999924, -97.668663992],
//   [43.7427, -79.4565],
//   [40.6441666667, -73.7822222222]
// ];

//Create a polyline using the line coordinates and make the line red
// L.polyline(line,
//    {color: 'blue', 
//    weight: '4', 
//    dashArray: '20, 20', 
//    fillOpacity: 0.5,
//    dashOffset: '20'}).addTo(map);
// L.polyline(line, {
//   stroke: "blue",
//   fillOpacity: 0.5,
//   dashArray: '5,10',
//   Weight: 4
  
// }).addTo(map);

//Get data from cities.js
// let cityData = cities;

// //Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location, {
//     radius: city.population/200000,
//     color: 'orange',
//     fillColor: 'orange',
//     fillOpacity: 0.5
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>").addTo(map);
// });

//We create the tile layer that will be the background of our map.
//navigation-guidance-day-v2//streets-v11//dark-v10//
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};
//Create the map object with a center and zoom level.
//method 1 --> let map = L.map('mapid').setView([40.7, -94.5], 4);
//Method 2 -->
let map = L.map("mapid", {
    center: [
    43.7, -79.3
    ],
    zoom: 11,
    layers: [satelliteStreets]
  });
  //Pass our map layers into our layers control and add the layers control to the map
L.control.layers(baseMaps).addTo(map);

//Then we add our 'graymap' title layer to the map.
//streets.addTo(map);

//Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/daphany/Mapping_Earthquakes/master/majorAirports.json"
// //Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//     console.log(data);
//     //Creating a GeoJSON layer with the retrieved data.
//     L.geoJSON(data, {
//         onEachFeature: function(feature, layer) {
//             console.log(layer);
//             layer.bindPopup("<h2>" + "Airport code:" + feature.properties.faa + "</h2> <hr>" + "<h3>" + "Airport Name:" + feature. properties.name +"</h3>"); 
//         } 
//     }).addTo(map);
// });

//Accessing the Toronto data GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/daphany/Mapping_Earthquakes/master/torontoNeighborhoods.json"

// Create a style for the lines.
let myStyle = {
    color: "blue",
    weight: 1,
    fillColor: "yellow"
}
//Grabbing out GeoJSON data

d3.json(torontoHoods).then(function(data) {
    console.log(data);
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup("<h2>" + feature.properties.AREA_NAME + "</h2>");
           
        }
    }).addTo(map);
});



// d3.json(torontoData).then(function(data) {
//     console.log(data);
//     //Creating a GeoJSON layer with the retrieved data
//     L.geoJSON(data,{
//         style: myStyle,
//         onEachFeature: function(feature, layer) {
//             console.log(layer);
//             layer.bindPopup("<h2> Airline: " + feature.properties.airline + "</h2> <hr><h3> Destination: " + feature.properties.dst + "</h3>")
//         }
//     }).addTo(map);
// });





//add circle:
// var circle = L.circle([34.0522, -118.2437], {
//   color: 'black',
//   fillColor: "#ffffa1",
//   fillOpacity: 0.5,
//   radius: 300
// }).addTo(map);

//add circle marker
// var circle = L.circleMarker([34.0522, -118.2437], {
//   color: 'black',
//   fillColor: "#ffffa1",
//   fillOpacity: 0.5,
//   radius: 300
// }).addTo(map);