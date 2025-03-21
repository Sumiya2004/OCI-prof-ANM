const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API Key

function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert('City not found');
                return;
            }

            // Display weather information
            document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
            document.getElementById('temp').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = `Condition: ${data.weather[0].description}`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;

            // Show weather info
            document.getElementById('weather-info').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching the weather data.');
        });
}
