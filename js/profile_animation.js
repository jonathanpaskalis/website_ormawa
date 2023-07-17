const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList == "judul-jabatan-hidden") entry.target.classList = "judul-jabatan-show";
            if (entry.target.classList == "judul-departemen-hidden") entry.target.classList = "judul-departemen-show";
            if (entry.target.classList == "profil-pengurus-ketua-hidden") entry.target.classList = "profil-pengurus-ketua-show";
            if (entry.target.classList == "profil-pengurus-wakil-hidden") entry.target.classList = "profil-pengurus-wakil-show";
            if (entry.target.classList == "profil-pengurus-koor-hidden") entry.target.classList = "profil-pengurus-koor-show";
            if (entry.target.classList == "profil-pengurus-staff-hidden") entry.target.classList = "profil-pengurus-staff-show";
            if (entry.target.classList == "sesi-profil-visi-hidden") entry.target.classList = "sesi-profil-visi-show"
            if (entry.target.classList == "sesi-profil-misi-hidden") entry.target.classList = "sesi-profil-misi-show";
            if (entry.target.classList.contains("komposisi-f-hidden")) {
                if(entry.target.id == "komposisi-feb") entry.target.classList.add("komposisi-feb");
                if(entry.target.id == "komposisi-fiabikom") entry.target.classList.add("komposisi-fiabikom");
                if(entry.target.id == "komposisi-fpb") entry.target.classList.add("komposisi-fpb");
                if(entry.target.id == "komposisi-ft") entry.target.classList.add("komposisi-ft");
                if(entry.target.id == "komposisi-fh") entry.target.classList.add("komposisi-fh");
                if(entry.target.id == "komposisi-fkik") entry.target.classList.add("komposisi-fkik");
                if(entry.target.id == "komposisi-fp") entry.target.classList.add("komposisi-fp");
                if(entry.target.id == "komposisi-ftb") entry.target.classList.add("komposisi-ftb");
            }
            
        }
    });
});

const judulJabatanHidden = document.getElementsByClassName("judul-jabatan-hidden");
const judulDepartemenHidden = document.getElementsByClassName("judul-departemen-hidden");
const profilKetua = document.getElementsByClassName("profil-pengurus-ketua-hidden");
const profilWakil = document.getElementsByClassName("profil-pengurus-wakil-hidden");
const profilKoor = document.getElementsByClassName("profil-pengurus-koor-hidden");
const profilStaff = document.getElementsByClassName("profil-pengurus-staff-hidden");
const visi = document.getElementsByClassName("sesi-profil-visi-hidden");
const misi = document.getElementsByClassName("sesi-profil-misi-hidden");
const komposisiFakultas = document.getElementsByClassName("komposisi-f-hidden");
for (i = 0; i<judulJabatanHidden.length; i++ ) observer.observe(judulJabatanHidden[i]);
for (i = 0; i<judulDepartemenHidden.length; i++ ) observer.observe(judulDepartemenHidden[i]);
for (i = 0; i<profilKetua.length; i++ ) observer.observe(profilKetua[i]);
for (i = 0; i<profilWakil.length; i++ ) observer.observe(profilWakil[i]);
for (i = 0; i<profilKoor.length; i++ ) observer.observe(profilKoor[i]);
for (i = 0; i<profilStaff.length; i++ ) observer.observe(profilStaff[i]);
for (i = 0; i<visi.length; i++ ) observer.observe(visi[i]);
for (i = 0; i<misi.length; i++ ) observer.observe(misi[i]);
for (i = 0; i<komposisiFakultas.length; i++ ) observer.observe(komposisiFakultas[i]);


