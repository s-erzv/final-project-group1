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
            title :"Efek Rumah Kaca",
            text: "Gas Rumah Kaca sebagai penyebab perubahan iklim pertama dan berasal dari gas-gas rumah kaca. Banyak dari gas-gas ini terjadi secara alami, meski berbagai aktivitas manusia disekitarnya meningkatkan konsentrasinya di atmosfer, khususnya pada metana, karbon dioksida , gas berfluorinasi CO2 dan dinitrogen oksida sebagai gas rumah kaca yang paling umum diproduksi oleh aktivitas manusia serta bertanggung jawab atas 64% pemanasan global buatan manusia. Metana ini bertanggung jawab atas nitro oksida sebesar 6% dan 17% pemanasan global buatan manusia.",
            image: "assets/img/penyebab/penyebab1.jpeg"
        },
        penyebab2: {
            title :"Peningkatan Emisi",
            text: "Penyebab perubahan iklim yang kedua berasal dari peningkatan emisi yang diakibatkan oleh ulah manusia, misalnya saja pada Pembakaran minyak, batu bara, dan gas yang akan menghasilkan dinitrogen oksida dan karbon dioksida. Pohon sendiri membantu mengatur iklim dengan menyerap CO2 dari atmosfer. Selain itu peningkatan emisi juga disebabkan oleh meningkatnya jumlah peternakan, khususnya pada Sapi dan domba, dimana keduanya menghasilkan metana dalam jumlah besar saat mencerna makanan.",
            image: "assets/img/penyebab/penyebab2.jpeg"
        },
        penyebab3: {
            title :"Pemanasan Global",
            text: "Penyebab perubahan iklim lainnya berasal dari aktivitas pemanasan global. Suhu rata-rata global saat ini sendiri adalah 0,85C lebih tinggi jika dibandingkan dengan akhir abad ke-19. Para ilmuwan iklim terkemuka mengemukakan pendapatnya mengenai penyebab pemanasan global adalah aktivitas manusia. Di mana kemudian terdapat risiko yang jauh lebih tinggi bahwa perubahan yang berbahaya serta berbagai bencana di lingkungan global kemungkinan akan terjadi.",
            image: "assets/img/penyebab/penyebab3.jpeg"
        },
        penyebab4: {
            title :"Perubahan Orbit Bumi",
            text: "Penyebab terjadinya perubahan iklim selanjutnya berasal dari orbit bumi yang mengalami perubahan. Dalam 800.000 tahun terakhir, terdapat siklus alami dalam iklim Bumi di antara zaman es serta periode interglasial yang lebih hangat. Orbit bumi yang berada di sekitar matahari adalah lingkaran bukannya elips. Kadang ia hampir melingkar dimana jarak Bumi berada kira-kira sama dari Matahari saat ia bergerak mengelilingi orbitnya. Pada waktu lainnya elips lebih menonjol hingga Bumi bergerak lebih dekat dan jauh dari matahari saat mengorbit. Saat Bumi lebih dekat ke matahari sendiri, iklim kemudian akan menjadi lebih hangat.",
            image: "assets/img/penyebab/penyebab4.jpeg"
        }
    },
    dampak: {
        dampak1: {
            title :"Kepunahan Ekosistem",
            text: "Kemungkinan terjadinya kepunahan ekosistem yaitu pada spesies hewan dan tumbuhan adalah 20-30 persen hal ini terjadi jika bertambah CO2 di atmosfer serta kenaikan suhu rata-rata global sebanyak 1,5-2,5 derajat Celcius, yang kemudian akan turut meningkatkan tingkat keasaman laut. Hal ini kemudian akan berdampak negatif terhadap para organisme-organisme laut seperti misalnya pada terumbu karang, hingga berbagai spesies yang hidupnya bergantung terhadap organisme tersebut.",
            image: "assets/img/dampak/dampak1.jpeg"
        },
        dampak2: {
            title :"Pangan dan Hasil Hutan",
            text: "Diperkirakan produktivitas pertanian yang berada di daerah tropis akan mengalami penurunan jika terjadi kenaikan suhu rata-rata global di antara 1-2 derajat Celcius, hingga kemudian meningkatkan resiko bencana kelaparan.Meningkatnya frekuensi banjir serta kekeringan kemudian akan memberi dampak buruk terhadap  produksi lokal utamanya pada penyediaan pangan pada area tropis dan subtropis. Jika perubahan iklim kemudian terjadi, maka hasil panen akan turut menurun pula, baik dari segi kuantitas maupun kualitas. Berbagai dampak perubahan iklim ini juga dibahas pada buku Educomics Plants Vs Zombies: Cuaca Dan Iklim yang dikemas melalui ilustrasi sehingga lebih mudah dimengerti.",
            image: "assets/img/dampak/dampak2.jpeg"
        },
        dampak3: {
            title :"Pesisir dan Dataran Rendah",
            text: "Daerah pantai akan kian rentan terhadap naiknya permukaan air laut dan erosi pantai. Kerusakan pesisir ini sendiri kemudian akan diperparah oleh berbagai tekanan manusia di daerah pesisir. Diperkirakan pada tahun 2080 nanti sekitar jutaan orang akan terkena banjir setiap tahun diakibatkan oleh naiknya permukaan air laut. Resiko terbesar yang akan dihadapi adalah padat penduduknya area di dataran rendah dengan tingkat adaptasi yang rendah. Selain itu sesungguhnya penduduk yang paling terancam ialah yang berada di Afrika dan delta-delta Afrika, Asia serta para penduduk yang bermukim di pulau-pulau kecil.",
            image: "assets/img/dampak/dampak3.jpeg"
        },
        dampak4: {
            title :"Sumber dan Manajemen Air Tawar",
            text: "Hingga saat ini rata-rata ketersediaan air di daerah subpolar, aliran air sungai dan daerah tropis basah diperkirakan akan mengalami peningkatkan sekitar 10-40 persen. Sementara pada daerah subtropis dan daerah tropis yang kering, air kemudian akan mengalami pengurangan sekitar 10-30% hingga akhirnya berbagai daerah yang kini mengalami kekeringan kemudian akan semakin menjadi parah kondisinya.",
            image: "assets/img/dampak/dampak4.jpeg"
        },
        dampak5: {
            title :"Industri, Permukiman dan Masyarakat",
            text: "Industri, permukiman serta masyarakat yang kian rentan umumnya berada di daerah bantaran sungai dan pesisir serta mereka yang tingkat perekonomiannya terkait erat dengan keberadaan sumber daya yang sensitif terhadap iklim, juga ia yang tinggal di daerah-daerah yang sering dilanda berbagai bencana ekstrim, dimana urbanisasi biasanya kemudian berlangsung dengan sangat cepat. Komunitas dengan ekonomi kebawah sendiri sangat rentan karena kapasitas adaptasi yang mereka miliki terbatas, dan kehidupannya yang sangat tergantung pada sumberdaya, dimana Sumber Daya ini keberadaannya sangat mudah terpengaruh oleh iklim dan persediaan makanan juga air. Temukan pula pembahasan lebih lanjutnya pada buku Kebijakan Fiskal, Perubahan Iklim, dan Keberlanjutan Pembangunan",
            image: "assets/img/dampak/dampak5.jpeg"
        },
        dampak6: {
            title :"Kesehatan",
            text: "Penduduk yang kapasitas beradaptasinya rendah akan kian rentan terhadap berbagai penyakit yang melanda, umumnya adalah gizi buruk, diare, dan berubahnya pola distribusi pada penyakit-penyakit yang ditularkan dari berbagai hewan khususnya serangga.",
            image: "assets/img/dampak/dampak5.jpeg"
        }
    },
    tips: {
        Tips1: {
            title: "Mengurangi Konsumsi Energi",
            text: "Berjalan Kaki atau Bersepeda: Mengurangi emisi kendaraan sekaligus menyehatkan.",
            image: "assets/img/bicycle.png"
        },
        Tips2: {
            title: "Mengurangi Konsumsi Energi",
            text: "Berjalan Kaki atau Bersepeda: Mengurangi emisi kendaraan sekaligus menyehatkan.",
            image: "assets/img/bicycle.png"
        },
        Tips3: {
            title: "Mengurangi Konsumsi Energi",
            text: "Konsumsi Lebih Banyak Sayuran: Produksi sayuran lebih ramah lingkungan daripada daging dan susu.",
            image: "assets/img/vegetables.png"
        },
        Tips4: {
            title: "Mengurangi Konsumsi Energi",
            text: "Kurangi Penggunaan Pesawat: Mengurangi emisi dengan mengurangi perjalanan udara.",
            image: "assets/img/airplane.png"
        },
        Tips5: {
            title: "Mengurangi Konsumsi Energi",
            text: "Daur Ulang dan Kurangi Limbah: Kurangi pembelian barang baru, perbaiki dan daur ulang barang yang bisa digunakan kembali.",
            image: "assets/img/recycle.png"
        },
        Tips6: {
            title: "Mengurangi Konsumsi Energi",
            text: "Daur Ulang dan Kurangi Limbah: Kurangi pembelian barang baru, perbaiki dan daur ulang barang yang bisa digunakan kembali.",
            image: "assets/img/recycle.png"
        },
        Tips7: {
            title: "Mengurangi Konsumsi Energi",
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
