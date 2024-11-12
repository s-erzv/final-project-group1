document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });

});

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
        const modal = document.getElementById('modal-' + modalId);
        const content = document.getElementById('modal-content-' + modalId);
    
        const sourceContent = document.getElementById(contentId).innerHTML;
        
        content.innerHTML = sourceContent;
        modal.style.display = 'block';
    }

    function closeModal(modalId) {
        document.getElementById('modal-' + modalId).style.display = 'none';
    }

    window.onclick = function (event) {
        const modalPenyebab = document.getElementById("modal-penyebab");
        const modalDampak = document.getElementById("modal-dampak");
    
        if (event.target === modalPenyebab) {
            closeModal('penyebab');
        } else if (event.target === modalDampak) {
            closeModal('dampak');
        }
    };

    let currentIndex = 0;

    // function showSlide(index) {
    //     const carousel = document.getElementById('carousel');
    //     const slides = document.querySelectorAll('.carousel img');
    //     if (index >= slides.length) {
    //         currentIndex = 0;
    //     } else if (index < 0) {
    //         currentIndex = slides.length - 1;
    //     } else {
    //         currentIndex = index;
    //     }
    //     const offset = -currentIndex * 100;
    //     carousel.style.transform = `translateX(${offset}%)`;
    // }

    // function nextSlide() {
    //     showSlide(currentIndex + 1);
    // }

    // function prevSlide() {
    //     showSlide(currentIndex - 1);
    // }

    function calcCO2() {
        const mpg = parseFloat(document.getElementById('mpg').value);
        const distance = parseFloat(document.getElementById('dist').value);
        const trips = parseFloat(document.getElementById('trips').value);
    
        if (isNaN(mpg) || isNaN(distance) || isNaN(trips)) {
            alert("Harap masukkan semua nilai yang dibutuhkan!");
            return;
        }
    
        // Perhitungan emisi karbon per mil (g CO2 per mil)
        const gramsCO2PerMile = 8887 / mpg; // Angka 8887 adalah konversi standar (gallons to grams of CO2)
        
        // Hasil per perjalanan (dalam kg CO2)
        const totalTripCO2 = (gramsCO2PerMile * distance) / 1000;
    
        // Hasil per minggu (dalam kg CO2)
        const weeklyCO2 = totalTripCO2 * trips;
    
        // Hasil per tahun (dalam kg CO2)
        const yearlyCO2 = weeklyCO2 * 52;
    
        // Menampilkan hasil ke elemen HTML
        document.getElementById('result4').innerText = gramsCO2PerMile.toFixed(2);
        document.getElementById('result').innerText = totalTripCO2.toFixed(2);
        document.getElementById('result2').innerText = weeklyCO2.toFixed(2);
        document.getElementById('result3').innerText = yearlyCO2.toFixed(2);
    }
    document.querySelector('button').addEventListener('click', calcCO2);
