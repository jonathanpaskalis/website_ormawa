const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList == "sesi-home-kanan-hidden") {
                entry.target.classList = "sesi-home-kanan-show";
            }
            if (entry.target.classList == "sesi-home-kiri-hidden") {
                entry.target.classList = "sesi-home-kiri-show";
            }
            if (entry.target.classList == "home-bagan-judul-hidden") {
                entry.target.classList = "home-bagan-judul-show";
            }
            if (entry.target.classList == "home-bagan-gambar-hidden") {
                entry.target.classList = "home-bagan-gambar-show";
            }
            if (entry.target.classList == "judul-proker-hidden") {
                entry.target.classList = "judul-proker-show";
            }
            if (entry.target.classList == "carousel-proker-hidden") {
                entry.target.classList = "carousel-proker-show";
            }
        }
    });
});

const introHomeKanan = document.getElementsByClassName("sesi-home-kanan-hidden");
const introHomeKiri = document.getElementsByClassName("sesi-home-kiri-hidden");
const judulBagan = document.getElementsByClassName("home-bagan-judul-hidden");
const bagan = document.getElementsByClassName("home-bagan-gambar-hidden");
const judulProker = document.getElementsByClassName("judul-proker-hidden");
const carouselProker = document.getElementsByClassName("carousel-proker-hidden");
for (i = 0; i<introHomeKanan.length; i++ ) observer.observe(introHomeKanan[i]);
for (i = 0; i<introHomeKiri.length; i++ ) observer.observe(introHomeKiri[i]);
for (i = 0; i<judulBagan.length; i++ ) observer.observe(judulBagan[i]);
for (i = 0; i<bagan.length; i++ ) observer.observe(bagan[i]);
for (i = 0; i<judulProker.length; i++ ) observer.observe(judulProker[i]);
for (i = 0; i<carouselProker.length; i++ ) observer.observe(carouselProker[i]);
