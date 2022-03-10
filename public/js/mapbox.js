/* eslint-disable */



const locations = JSON.parse(document.getElementById('map').dataset.locations);

console.log(locations);

mapboxgl.accessToken = 'pk.eyJ1IjoibGF1cmlzc2VhdSIsImEiOiJjbDBqNmkycmswOWt5M2pyNXlnY3hjZzF2In0.lqORpPazDiXu1NDrUBHW2A';

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});