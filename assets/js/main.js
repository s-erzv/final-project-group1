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
        penyebab1: {
            title :"Gas Rumah Kaca",
            text: "Gas rumah kaca seperti karbon dioksida, metana, dan dinitrogen oksida memerangkap panas di atmosfer, meningkatkan suhu rata-rata Bumi melalui efek rumah kaca. Aktivitas manusia seperti pembakaran bahan bakar fosil dan deforestasi telah meningkatkan konsentrasi gas ini, menyebabkan perubahan iklim, naiknya permukaan laut, dan cuaca ekstrem.",
            image: "assets/img/penyebab/penyebab1.jpeg"
        },
        penyebab2: {
            title :"Peningkatan Emisi",
            text: "Emisi dari pembakaran bahan bakar fosil dan industri menambah jumlah CO₂ dan gas lainnya di atmosfer. Gas-gas ini memerangkap panas, meningkatkan suhu global, dan menyebabkan perubahan iklim serta cuaca ekstrem. Upaya untuk mengurangi emisi sangat penting untuk memitigasi dampak negatifnya.",
            image: "assets/img/penyebab/penyebab2.jpeg"
        },
        penyebab3: {
            title :"Pemanasan Global",
            text: "Suhu rata-rata global meningkat lebih dari 0,85°C sejak akhir abad ke-19, dipicu oleh aktivitas manusia. Emisi gas rumah kaca dari pembakaran bahan bakar fosil, deforestasi, dan kegiatan industri adalah penyebab utama pemanasan ini. Peningkatan suhu global ini telah mencairkan lapisan es di kutub, menaikkan permukaan laut, dan mengubah pola cuaca.",
            image: "assets/img/penyebab/penyebab3.jpeg"
        },
        penyebab4: {
            title :"Perubahan Orbit Bumi",
            text: "Siklus alami perubahan orbit Bumi dapat memengaruhi iklim, meskipun pengaruhnya tidak secepat aktivitas manusia. Variasi dalam eksentrisitas, kemiringan sumbu, dan presesi Bumi terjadi dalam rentang waktu ribuan hingga ratusan ribu tahun dan berkontribusi pada perubahan iklim jangka panjang seperti zaman es.",
            image: "assets/img/penyebab/penyebab4.jpeg"
        }
    },
    dampak: {
        dampak1: {
            title :"Menurunnya Kualitas Air",
            text: "Curah hujan tinggi dapat menurunkan kualitas air dengan membawa polutan dan sedimen ke dalam sumber air, meningkatkan risiko kontaminasi. Selain itu, peningkatan suhu mempengaruhi kadar klorin dalam air, mengurangi efektivitasnya sebagai desinfektan dan memungkinkan pertumbuhan mikroorganisme berbahaya.",
            image: "assets/img/dampak/dampak1.jpeg"
        },
        dampak2: {
            title :"Berkurangnya Kuantitas Air",
            text: "Curah hujan tinggi bisa menyebabkan air cepat kembali ke laut tanpa tersimpan sebagai air bersih. Aliran permukaan yang cepat ini mengurangi kesempatan air untuk meresap ke dalam tanah dan mengisi kembali akuifer, sehingga mengurangi ketersediaan air tawar.",
            image: "assets/img/dampak/dampak2.jpeg"
        },
        dampak3: {
            title :"Perubahan Habitat",
            text: "anjir dan badai mengubah habitat alami, membahayakan berbagai spesies makhluk hidup. Peristiwa cuaca ekstrem ini dapat merusak ekosistem, menghancurkan tempat tinggal, sumber makanan, dan mengganggu pola migrasi hewan. Akibatnya, banyak spesies menghadapi risiko kepunahan jika mereka tidak dapat beradaptasi dengan cepat.",
            image: "assets/img/dampak/dampak3.jpeg"
        },
        dampak4: {
            title :"Punahnya Spesies",
            text: "Perubahan suhu dan lingkungan yang cepat menyebabkan kepunahan beberapa spesies yang tak sempat beradaptasi. Peningkatan suhu global, perubahan pola cuaca, dan kerusakan habitat akibat aktivitas manusia memaksa banyak spesies untuk menghadapi kondisi yang tidak sesuai dengan kebutuhan hidup mereka.",
            image: "assets/img/dampak/dampak4.jpeg"
        },
        dampak5: {
            title :"Meningkatnya Wabah Penyakit",
            text: "Curah hujan tinggi memicu peningkatan wabah seperti malaria dan demam berdarah. Genangan air yang terbentuk setelah hujan deras menjadi tempat berkembang biak yang ideal bagi nyamuk, yang merupakan vektor utama penyakit-penyakit ini. Peningkatan populasi nyamuk meningkatkan risiko penularan penyakit kepada manusia, terutama di daerah tropis dan subtropis.",
            image: "assets/img/dampak/dampak5.jpeg"
        }
    },
    tips: {
        Tips1: {
            title: "Efek Gas Rumah Kaca",
            text: "Menghemat Energi: Kurangi penggunaan energi untuk mengurangi emisi gas rumah kaca.",
            image: "assets/img/energy-save.png"
        },
        Tips2: {
            text: "Berjalan Kaki atau Bersepeda: Mengurangi emisi kendaraan sekaligus menyehatkan.",
            image: "assets/img/bicycle.png"
        },
        Tips3: {
            text: "Konsumsi Lebih Banyak Sayuran: Produksi sayuran lebih ramah lingkungan daripada daging dan susu.",
            image: "assets/img/vegetables.png"
        },
        Tips4: {
            text: "Kurangi Penggunaan Pesawat: Mengurangi emisi dengan mengurangi perjalanan udara.",
            image: "assets/img/airplane.png"
        },
        Tips5: {
            text: "Daur Ulang dan Kurangi Limbah: Kurangi pembelian barang baru, perbaiki dan daur ulang barang yang bisa digunakan kembali.",
            image: "assets/img/recycle.png"
        }
    }
};

function showModal(type, key) {
    const content = contentData[type][key];
    let modalId, contentId, imageId;

    if (type === 'penyebab') {
        modalId = 'modal-penyebab';
        contentId = 'modal-content-penyebab';
        imageId = 'modal-image-penyebab';
        titleId = 'modal-title-penyebab';
    } else if (type === 'dampak') {
        modalId = 'modal-dampak';
        contentId = 'modal-content-dampak';
        imageId = 'modal-image-dampak';
        titleId = 'modal-title-dampak';
    } else if (type === 'tips') {
        modalId = 'modal-tips';
        contentId = 'modal-content-tips';
        imageId = 'modal-image-tips';
        titleId = 'modal-title-tips';
    }

    document.getElementById(titleId).innerText = content.title;
    document.getElementById(contentId).innerText = content.text;
    document.getElementById(imageId).src = content.image;
    document.getElementById(modalId).style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    const modalPenyebab = document.getElementById("modal-penyebab");
    const modalDampak = document.getElementById("modal-dampak");
    const modalTips = document.getElementById("modal-tips");

    if (event.target === modalPenyebab) {
        closeModal('modal-penyebab');
    }
    if (event.target === modalDampak) {
        closeModal('modal-dampak');
    }
    if (event.target === modalTips) {
        closeModal('modal-tips');
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
