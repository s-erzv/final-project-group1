document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const contentData = {
        penyebab: {
            penyebab1: "Deskripsi untuk penyebab 1.",
            penyebab2: "Deskripsi untuk penyebab 2.",
            penyebab3: "Deskripsi untuk penyebab 3.",
            penyebab4: "Deskripsi untuk penyebab 4.",
            penyebab5: "Deskripsi untuk penyebab 5."
        },
        dampak: {
            dampak1: "Deskripsi dampak 1.",
            dampak2: "Deskripsi dampak 2.",
            dampak3: "Deskripsi dampak 3.",
            dampak4: "Deskripsi dampak 4.",
            dampak5: "Deskripsi dampak 5."
        },
        tips: {
            Tips1: "Deskripsi Tips 1.",
            Tips2: "Deskripsi Tips 2.",
            Tips3: "Deskripsi Tips 3.",
            Tips4: "Deskripsi Tips 4.",
            Tips5: "Deskripsi Tips 5."
        }
    };

    function showModal(type, key) {
        const content = contentData[type][key];
        let modalId, contentId;
    
        if (type === 'penyebab') {
            modalId = 'modal-penyebab';
            contentId = 'modal-content-penyebab';
        } else if (type === 'dampak') {
            modalId = 'modal-dampak';
            contentId = 'modal-content-dampak';
        } else if (type === 'tips') {
            modalId = 'modal-tips';
            contentId = 'modal-content-tips';
        }
    
        document.getElementById(contentId).innerText = content;
        document.getElementById(modalId).style.display = "flex"; 
        document.body.style.overflow = "hidden"; 
    }
    
    function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
        document.body.style.overflow = "auto";
    }

    window.onclick = function (event) {
        const modalPenyebab = document.getElementById("modal-penyebab");
        const modalDampak = document.getElementById("modal-dampak");
        const modalTips = document.getElementById("modal-tips");

        if (event.target === modalPenyebab) {
            closeModal('modal-penyebab');
        };
        if (event.target === modalDampak) {
            closeModal('modal-dampak');
        };
        if (event.target === modalTips) {
            closeModal('modal-tips');
        };
    };

    const apiKey = "YOUR_API_KEY";  // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}`;

    const searchBar = document.querySelector(".search-bar");

    searchBar.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            const city = searchBar.value.trim();
            if (city) {
                fetchWeatherData(city);
            }
        }
    });

    async function fetchWeatherData(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error("City not found");

            const data = await response.json();
            updateDashboard({
                temperature: `${data.main.temp}°C`,
                description: data.weather[0].description,
                uvIndex: "N/A",  // OpenWeatherMap doesn't provide UV index in the free API
                windSpeed: `${data.wind.speed} km/h`,
                sunrise: formatTime(data.sys.sunrise),
                sunset: formatTime(data.sys.sunset),
                humidity: `${data.main.humidity}%`,
                visibility: `${data.visibility / 1000} km`,
                airQuality: "N/A"  // OpenWeatherMap doesn't provide AQI in the free API
            });
        } catch (error) {
            console.error("Error fetching weather data:", error);
            alert("City not found. Please try again.");
        }
    }

    function updateDashboard(data) {
        document.querySelector(".temperature").textContent = data.temperature;
        document.querySelector(".description").textContent = data.description;
        document.querySelector(".uv-index .highlight-value").textContent = data.uvIndex;
        document.querySelector(".wind-status .highlight-value").textContent = data.windSpeed;
        document.querySelector(".sunrise-sunset .highlight-value").textContent = `${data.sunrise} - ${data.sunset}`;
        document.querySelector(".humidity .highlight-value").textContent = data.humidity;
        document.querySelector(".visibility .highlight-value").textContent = data.visibility;
        document.querySelector(".air-quality .highlight-value").textContent = data.airQuality;
    }

    function formatTime(unixTime) {
        const date = new Date(unixTime * 1000);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const period = hours >= 12 ? 'PM' : 'AM';
        return `${hours % 12 || 12}:${minutes} ${period}`;
    }
});
