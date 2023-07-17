let indexProker=0;
const fotoCarouselProker = document.getElementsByClassName("program-kerja-carousel-foto");
const judulCarouselProker = document.getElementsByClassName("program-kerja-carousel-judul-proker");
const keteranganCarouselProker = document.getElementsByClassName("program-kerja-tujuan-deskripsi-proker");
let buttonCarouselProkerLeft = document.getElementById("button-program-kerja-carousel-left");
let buttonCarouselProkerRight = document.getElementById("button-program-kerja-carousel-right");

fotoCarouselProker[fotoCarouselProker.length-1].style.transition = "none";
fotoCarouselProker[fotoCarouselProker.length-1].style.transform = "translateX("+((-fotoCarouselProker.length)*100)+"%)";
for (i = 1; i<keteranganCarouselProker.length; i++ ) {
    keteranganCarouselProker[i].style.width = '0';
    keteranganCarouselProker[i].style.height = '0';
}
function homeProkerCarouselNav(indexProkerNav) {
    buttonCarouselProkerLeft.disabled = true;
    buttonCarouselProkerRight.disabled = true;

    indexProker += indexProkerNav;

    if (indexProker>0) {
        fotoCarouselProker[fotoCarouselProker.length-1].style.transition = "0.4s ease-in-out";
        for (i = 0; i<(fotoCarouselProker.length-1); i++ ) {
            fotoCarouselProker[i].style.transform = "translateX("+(indexProker*100)+"%)";
        }
        fotoCarouselProker[i].style.transform = "translateX("+((-(fotoCarouselProker.length-1))*100)+"%)";
        indexProker=-2;
        setTimeout(function () {   
            for (i = 0; i<(fotoCarouselProker.length); i++ ) {
                fotoCarouselProker[i].style.transition = "none";
                fotoCarouselProker[i].style.transform = "translateX("+(indexProker*100)+"%)";
            }
        }, 400);
    }
    
    else if (indexProker<-(fotoCarouselProker.length-1)) {
        fotoCarouselProker[0].style.transition = "0.4s ease-in-out";
        for (i = 1; i<(fotoCarouselProker.length); i++ ) {
            fotoCarouselProker[i].style.transform = "translateX("+(indexProker*100)+"%)";
        }
        fotoCarouselProker[0].style.transform = "translateX("+(0)+"%)";
        indexProker=0;
        setTimeout(function () {   
            for (i = 0; i<(fotoCarouselProker.length); i++ ) {
                fotoCarouselProker[i].style.transition = "none";
                fotoCarouselProker[i].style.transform = "translateX("+(indexProker*100)+"%)";
            }
        }, 400);
    }

    else {
        if (indexProker==-1) for (i = 0; i<fotoCarouselProker.length-1; i++ ) fotoCarouselProker[i].style.transition = "0.4s ease-in-out";
        else for (i = 0; i<fotoCarouselProker.length; i++ ) fotoCarouselProker[i].style.transition = "0.4s ease-in-out";
        for (i = 0; i<fotoCarouselProker.length; i++ ) fotoCarouselProker[i].style.transform = "translateX("+(indexProker*100)+"%)";       
    }

    if (indexProker==0) {
        setTimeout(function () {   
            fotoCarouselProker[fotoCarouselProker.length-1].style.transition = "none";
            fotoCarouselProker[fotoCarouselProker.length-1].style.transform = "translateX("+((-fotoCarouselProker.length)*100)+"%)";
            fotoCarouselProker[0].style.transition = "0.4s ease-in-out";
        }, 400);
    }

    else if (indexProker==-(fotoCarouselProker.length-1)) {
        setTimeout(function () {   
            fotoCarouselProker[0].style.transition = "none";
            fotoCarouselProker[0].style.transform = "translateX("+(100)+"%)";
            fotoCarouselProker[fotoCarouselProker.length-1].style.transition = "0.4s ease-in-out";
        }, 400);
    }
    
    for (i = 0; i<fotoCarouselProker.length; i++ ) {
        judulCarouselProker[i].style.opacity = '0';
        keteranganCarouselProker[i].style.opacity = '0';
    }
    
    setTimeout(function () {
        for (i = 0; i<fotoCarouselProker.length; i++ ) {
            judulCarouselProker[i].style.height = '0';
            keteranganCarouselProker[i].style.width = '0';
            keteranganCarouselProker[i].style.height = '0';
        }
        judulCarouselProker[-indexProker].style.opacity = '1';
        judulCarouselProker[-indexProker].style.height = 'min-content';
        keteranganCarouselProker[-indexProker].style.opacity = '1';
        keteranganCarouselProker[-indexProker].style.width = '100%';
        keteranganCarouselProker[-indexProker].style.height = '100%';
    }, 200);

    setTimeout(function () {   
        buttonCarouselProkerLeft.disabled = false;
        buttonCarouselProkerRight.disabled = false;
    }, 400);
}

