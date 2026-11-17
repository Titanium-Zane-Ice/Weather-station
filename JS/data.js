async function updateData() {
    const response = await fetch(weather_data);
    constdata = await response.json();

    document.getElementById("temperature").textContent =
        data.temperature + " °C";
    document.getElementById("windspeed").textContent =
        data.windspeed + " km/h";
    document.getElementById("wind-direction").textContent =
        data.wind-direction;
    document.getElementById("humidity").textContent =
        data.humidity + " %";
    document.getElementById("air-pressure").textContent =
        data.air-pressure + " hPa";
    document.getElementById("rain-gauge").textContent =
        data.rain-gauge + " mm";
}
setInterval(updateData, 5000);