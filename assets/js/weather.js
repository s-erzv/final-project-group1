
const apiKey = '0f5c77ca49f24a4888515037241011';
const weatherApp = document.getElementById('weather-app');


function setBackground(condition) {
    let bgImage;

    condition = condition.toLowerCase();

    if (condition.includes('rain')) {
        bgImage = 'assets/img/weather/rain.jpg';
    }

    if (condition.includes('cloudy') || condition.includes('partly cloudy')) {
        bgImage = 'assets/img/weather/clouds.jpg';
    }

    if (condition.includes('clear')) {
        bgImage = 'assets/img/weather/clear.jpg';
    }

    if (condition.includes('snow')) {
        bgImage = 'assets/img/weather/snow.jpg';
    }

    if (condition.includes('thunderstorm')) {
        bgImage = 'assets/img/weather/thunderstrom.jpg';
    }

    if (condition.includes('fog') || condition.includes('mist')) {
        bgImage = 'assets/img/weather/mist.jpg';
    }

    if (condition.includes('overcast')) {
        bgImage = 'assets/img/weather/overcast.jpg';
    }

    if (condition.includes('sunny')) {
        bgImage = 'assets/img/weather/sunny.jpg';
    }

    if (!bgImage) {
        bgImage = 'img/weather/default.jpg';
    }

    weatherApp.style.backgroundImage = `url(${bgImage})`;
}

function fetchWeather(city) {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`)  
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const current = data.current;
            document.getElementById('temperature').innerText = `${current.temp_c}°C`;
            document.getElementById('city').innerText = data.location.name;
            document.getElementById('date-time').innerText = new Date().toLocaleString();
            document.getElementById('weather-description').innerText = current.condition.text.toUpperCase();
            document.getElementById('temp-max').innerText = `${data.forecast.forecastday[0].day.maxtemp_c}°C`;
            document.getElementById('temp-min').innerText = `${data.forecast.forecastday[0].day.mintemp_c}°C`;
            document.getElementById('humidity').innerText = `${current.humidity}%`;
            document.getElementById('cloudiness').innerText = `${current.cloud}%`;
            document.getElementById('wind').innerText = `${current.wind_kph} km/h`;

            const weatherCondition = current.condition.text;
            setBackground(weatherCondition);
            document.getElementById('weather-icon').className = getWeatherIconClass(weatherCondition);

            updateFourDaysForecast(data.forecast.forecastday);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to retrieve weather data.');
        });
}

function updateFourDaysForecast(forecastData) {
    const forecastElement = document.getElementById('weather-forecast');
    forecastElement.innerHTML = ''; 

    forecastData.forEach((forecast, index) => {
        if (index < 4) {  
            const forecastItem = document.createElement('div');
            forecastItem.classList.add('forecast-item', 'flex', 'items-center', 'justify-between', 'text-lg', 'py-2', 'border-gray-300');

            const date = new Date(forecast.date);
            const dateString = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
            const weatherCondition = forecast.day.condition.text;

            forecastItem.innerHTML = `
                <div class="flex-container">
                    <i class="${getWeatherIconClass(weatherCondition)} icon-large"></i>  
                </div>
                <div class="text-center"> 
                    <div class="text-xl text-white">${dateString}</div>
                    <div class="text-sm text-white">${weatherCondition}</div> 
                </div>
                <div class="text-right text-xl text-white"> 
                    ${forecast.day.avgtemp_c}°C
                </div>
            `;
            
            forecastElement.appendChild(forecastItem);
        }
    });
}

function getWeatherIconClass(condition) {
    switch (condition) {
        case 'Clear':
        case 'Sunny':
        case 'Overcast':
            return 'fas fa-sun text-yellow-400';

        case 'Partly Cloudy':
        case 'Cloudy':
            return 'fas fa-cloud text-gray-300';

        case 'Rain':
            return 'fas fa-cloud-showers-heavy text-blue-500';

        case 'Snow':
            return 'fas fa-snowflake text-blue-300';

        case 'Thunderstorm':
            return 'fas fa-bolt text-yellow-500';

        case 'Fog':
        case 'Mist':
            return 'fas fa-smog text-gray-400';

        default:
            return 'fas fa-cloud text-gray-500';
    }
}

document.getElementById('search-button').addEventListener('click', function () {
    const city = document.getElementById('search-input').value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert('enter a city name.');
    }
});

fetchWeather('Jakarta');

document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });

});
