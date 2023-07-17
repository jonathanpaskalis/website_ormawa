const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList == "program-kerja-carousel-judul-hidden") {
                entry.target.classList = "program-kerja-carousel-judul-show";
            }
            if (entry.target.classList == "program-kerja-carousel-hidden") {
                entry.target.classList = "program-kerja-carousel-show";
            }
            if (entry.target.classList == "program-kerja-tujuan-deskripsi-hidden") {
                entry.target.classList = "program-kerja-tujuan-deskripsi-show";
            }
        }
    });
});

const judulProgramKerja = document.getElementById("program-kerja-carousel-judul");
const carouselProgramKerja = document.getElementById("program-kerja-carousel");
const deskripsiProgramKerja = document.getElementById("program-kerja-tujuan-deskripsi");
observer.observe(judulProgramKerja);
observer.observe(carouselProgramKerja);
observer.observe(deskripsiProgramKerja);