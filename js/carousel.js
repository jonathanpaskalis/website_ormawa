let index=0;
const carouselHomeGambar = [document.getElementById('carousel-home-gambar-0')
                            , document.getElementById('carousel-home-gambar-1')
                            , document.getElementById('carousel-home-gambar-2')];

setInterval(function () {
    carouselHomeGambar[index].classList = 'home-gambar-hide';
    setTimeout(function () {
        carouselHomeGambar[index].classList = 'home-gambar-hidden';
        index += 1;
    
        if (index>2) {
            index = 0;
        }

        else if (index<0) {
            index = 2;
        }
        carouselHomeGambar[index].classList = 'home-gambar';
    }, 1000);
}, 30000);
