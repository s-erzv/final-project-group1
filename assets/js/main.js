document.addEventListener("DOMContentLoaded", () => {
    // Set active navigation link based on current path
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });

    // Manage active state for navigation items
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Data for content (penyebab, dampak, tips)
    const contentData = {
        penyebab: {
            penyebab1: "Gas Rumah Kaca: Gas rumah kaca seperti karbon dioksida, metana, dan dinitrogen oksida adalah gas yang menyerap panas, menyebabkan peningkatan suhu global.",
            penyebab2: "Peningkatan Emisi: Emisi dari pembakaran bahan bakar fosil dan industri menambah jumlah CO2 dan gas lainnya di atmosfer.",
            penyebab3: "Pemanasan Global: Suhu rata-rata global meningkat lebih dari 0,85°C sejak akhir abad ke-19, dipicu oleh aktivitas manusia.",
            penyebab4: "Perubahan Orbit Bumi: Siklus alami perubahan orbit Bumi dapat memengaruhi iklim, meskipun pengaruhnya tidak secepat aktivitas manusia.",
        },
        dampak: {
            dampak1: "Menurunnya Kualitas Air: Curah hujan tinggi menurunkan kualitas air, sementara peningkatan suhu mempengaruhi kadar klorin.",
            dampak2: "Berkurangnya Kuantitas Air: Curah hujan tinggi bisa menyebabkan air cepat kembali ke laut tanpa tersimpan sebagai air bersih.",
            dampak3: "Perubahan Habitat: Banjir dan badai mengubah habitat alami, membahayakan berbagai spesies makhluk hidup.",
            dampak4: "Punahnya Spesies: Perubahan suhu dan lingkungan yang cepat menyebabkan kepunahan beberapa spesies yang tak sempat beradaptasi.",
            dampak5: "Meningkatnya Wabah Penyakit: Curah hujan tinggi memicu peningkatan wabah seperti malaria dan demam berdarah.",
        },
        tips: {
            Tips1: "Menghemat Energi: Kurangi penggunaan energi untuk mengurangi emisi gas rumah kaca.",
            Tips2: "Berjalan Kaki atau Bersepeda: Mengurangi emisi kendaraan sekaligus menyehatkan.",
            Tips3: "Konsumsi Lebih Banyak Sayuran: Produksi sayuran lebih ramah lingkungan daripada daging dan susu.",
            Tips4: "Kurangi Penggunaan Pesawat: Mengurangi emisi dengan mengurangi perjalanan udara.",
            Tips5: "Daur Ulang dan Kurangi Limbah: Kurangi pembelian barang baru, perbaiki dan daur ulang barang yang bisa digunakan kembali."
        }
    };

    function showModal(modalId, contentId) {
        // Mengambil elemen modal dan elemen konten
        const modal = document.getElementById('modal-' + modalId);
        const content = document.getElementById('modal-content-' + modalId);
    
        // Mengambil elemen konten yang akan dimasukkan ke modal
        const sourceContent = document.getElementById(contentId).innerHTML;
        
        // Mengisi modal dengan konten
        content.innerHTML = sourceContent;
        
        // Menampilkan modal
        modal.style.display = 'block';
    }
    
    function closeModal(modalId) {
        // Menyembunyikan modal
        document.getElementById('modal-' + modalId).style.display = 'none';
    }
    
    // Menutup modal saat klik di luar konten
    window.onclick = function (event) {
        const modalPenyebab = document.getElementById("modal-penyebab");
        const modalDampak = document.getElementById("modal-dampak");
    
        if (event.target === modalPenyebab) {
            closeModal('modal-penyebab');
        } else if (event.target === modalDampak) {
            closeModal('modal-dampak');
        }
    };

    let currentIndex = 0;

    function showSlide(index) {
        const carousel = document.getElementById('carousel');
        const slides = document.querySelectorAll('.carousel img');
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // API Key and base URL for weather data
    const apiKey = "e94c47d77102e12b744c8f55001d7800";

    const searchBar = document.querySelector(".search-bar");

    // Event listener for Enter key to search city weather
    searchBar.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            const city = searchBar.value.trim();
            if (city) {
                fetchWeatherData(city);
            }
        }
    });

    // Fetch weather data function
    async function fetchWeatherData(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error("City not found");

            const data = await response.json();
            updateDashboard({
                temperature: `${data.main.temp}°C`,
                description: data.weather[0].description,
                uvIndex: "N/A",
                windSpeed: `${data.wind.speed} km/h`,
                sunrise: formatTime(data.sys.sunrise),
                sunset: formatTime(data.sys.sunset),
                humidity: `${data.main.humidity}%`,
                visibility: `${data.visibility / 1000} km`,
                airQuality: "N/A"
            });
        } catch (error) {
            console.error("Error fetching weather data:", error);
            alert("City not found. Please try again.");
        }
    }

    // Update weather dashboard function
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

    // Convert Unix time to readable format
    function formatTime(unixTime) {
        const date = new Date(unixTime * 1000);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const period = hours >= 12 ? 'PM' : 'AM';
        return `${hours % 12 || 12}:${minutes} ${period}`;
    }

    // Make showModal and closeModal available globally for onclick usage in HTML
    window.showModal = showModal;
    window.closeModal = closeModal;
});
