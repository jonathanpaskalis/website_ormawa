let indexProker=0;
const fotoCarouselProker = document.getElementsByClassName("program-kerja-carousel-foto");
const judulCarouselProker = document.getElementsByClassName("program-kerja-carousel-judul-proker");
const keteranganCarouselProker = document.getElementsByClassName("program-kerja-tujuan-deskripsi-proker");
const buttonCarouselProkerLeft = document.getElementById("button-program-kerja-carousel-left");
const buttonCarouselProkerRight = document.getElementById("button-program-kerja-carousel-right");

fotoCarouselProker[fotoCarouselProker.length-1].style.transition = "none";
fotoCarouselProker[fotoCarouselProker.length-1].style.transform = "translateX("+((-fotoCarouselProker.length)*100)+"%)";
for (i = 1; i<keteranganCarouselProker.length; i++ ) {
    keteranganCarouselProker[i].style.width = '0';
    keteranganCarouselProker[i].style.height = '0';
}

function checkIndex1(index, alpha, beta) {
    fotoCarouselProker[-index].style.transition = "0.4s ease-in-out";
    for (i = 0; i<(fotoCarouselProker.length-alpha); i++ ) {
        fotoCarouselProker[i].style.transform = "translateX("+(beta*100)+"%)";
    }
    fotoCarouselProker[-index].style.transform = "translateX("+(index*100)+"%)";
    setTimeout(() => {   
        for (i = 0; i<(fotoCarouselProker.length); i++ ) {
            fotoCarouselProker[i].style.transition = "none";
            fotoCarouselProker[i].style.transform = "translateX("+(index*100)+"%)";
        }
    }, 400);
}

function checkIndex2(alpha, beta, gamma) {
    setTimeout(() => {   
        fotoCarouselProker[alpha].style.transition = "none";
        fotoCarouselProker[alpha].style.transform = "translateX("+(beta*100)+"%)";
        fotoCarouselProker[gamma].style.transition = "0.4s ease-in-out";
    }, 400);
}

function homeProkerCarouselNav(indexProkerNav) {
    buttonCarouselProkerLeft.disabled = true;
    buttonCarouselProkerRight.disabled = true;

    indexProker += indexProkerNav;

    if (indexProker>0) {
        indexProker=-(fotoCarouselProker.length-1);
        checkIndex1(indexProker, 1, 1);
    }
    
    else if (indexProker<-(fotoCarouselProker.length-1)) {
        indexProker=0;
        checkIndex1(indexProker, 0, -fotoCarouselProker.length);
    }

    else {
        if (indexProker===-1) for (i = 0; i<fotoCarouselProker.length-1; i++ ) fotoCarouselProker[i].style.transition = "0.4s ease-in-out";
        else for (i = 0; i<fotoCarouselProker.length; i++ ) fotoCarouselProker[i].style.transition = "0.4s ease-in-out";
        for (i = 0; i<fotoCarouselProker.length; i++ ) fotoCarouselProker[i].style.transform = "translateX("+(indexProker*100)+"%)";       
    }

    if (indexProker===-(fotoCarouselProker.length-1)) checkIndex2(0, 1, -indexProker)

    else if (indexProker===0) checkIndex2(fotoCarouselProker.length-1, -fotoCarouselProker.length, indexProker);
    
    for (i = 0; i<fotoCarouselProker.length; i++ ) {
        judulCarouselProker[i].style.opacity = '0';
        keteranganCarouselProker[i].style.opacity = '0';
    }
    
    setTimeout(() => {
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

    setTimeout(() => {   
        buttonCarouselProkerLeft.disabled = false;
        buttonCarouselProkerRight.disabled = false;
    }, 400);
}

