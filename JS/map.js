const map = L.map('map').setView([41.38, 2.17], 8);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }
).addTo(map);

fetch("https://api.rainviewer.com/public/weather-maps.json")
    .then(response =>response.json())