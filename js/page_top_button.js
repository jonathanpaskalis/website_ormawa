const pageTopButton = document.querySelector(".page-top-button");

window.addEventListener("scroll", () => {
    if (window.scrollY>750) {
        pageTopButton.classList.remove("button-hidden");
        pageTopButton.setAttribute('href', '#html');        
    }
    else {
        pageTopButton.classList.add("button-hidden");
        pageTopButton.removeAttribute('href');  
    }
})