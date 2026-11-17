async function updateData() {
    const response = await fetch(weather_data);
    constdata = await response.json();

    document.getElementById("temperature").textContent =
    
}