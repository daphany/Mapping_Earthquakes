// Add console.log to check to see if our code is working
console.log("working");
//Create the map object with a center and zoom level.
//method 1 --> let map = L.map('mapid').setView([40.7, -94.5], 4);
//Method 2 -->
let map = L.map("mapid", {
    center: [
      34.0522, -118.2437
    ],
    zoom: 14
  });


//Get data from cities.js
let cityData = cities;

//Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/200000,
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 0.5
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>").addTo(map);
});

//We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
//Then we add our 'graymap' title layer to the map.
streets.addTo(map);

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



