const map = L.map('map').setView([41.38, 2.17], 6);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }
).addTo(map);

fetch("https://api.rainviewer.com/public/weather-maps.json")
    .then(response =>response.json())
    .then(data => {
        const radarInfo = data.radar.past[radar.data.past.length - 1];

        L.tileLayer('https://tilecache.rainviewer.com${latestFrame.path}/256/{z}/{x}/{y}/2/1_1.png', {
            opacity: 0.6
        }).addTo(map);
});