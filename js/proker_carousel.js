let indexProker=0;
const fotoCarouselProker = document.getElementsByClassName("carousel-proker-foto");
const judulCarouselProker = document.getElementsByClassName("carousel-proker-judul");
let buttonCarouselProkerLeft = document.getElementById("button-carousel-proker-left");
let buttonCarouselProkerRight = document.getElementById("button-carousel-proker-right");

let intervalCarouselProker = setInterval(homeProkerCarouselNav, 5000, -1);

fotoCarouselProker[fotoCarouselProker.length-1].style.transition = "none";
fotoCarouselProker[fotoCarouselProker.length-1].style.transform = "translateX("+((-fotoCarouselProker.length)*100)+"%)";

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
    }
    
    setTimeout(function () {   
        judulCarouselProker[-indexProker].style.opacity = '1';
    }, 100);

    setTimeout(function () {   
        buttonCarouselProkerLeft.disabled = false;
        buttonCarouselProkerRight.disabled = false;
    }, 400);
}

function resetCarouselProker(condition) {
    if (condition===true) {
        clearInterval(intervalCarouselProker);
        intervalCarouselProker = setInterval(homeProkerCarouselNav, 5000, -1);
    }
}
