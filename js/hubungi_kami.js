// Hover Contact Button Effects Contact Span

const buttonContact = document.querySelectorAll(".button-contact");
const spanContact = document.querySelectorAll(".span-contact");

buttonContact.forEach((element, index) => {
    element.addEventListener("mouseenter", () => {
        spanContact[index].classList.add("span-contact-hover");
    })
    element.addEventListener("mouseleave", () => {
        spanContact[index].classList.remove("span-contact-hover");
    })
});

// Hover Kontak Button Effects Kontak Span

// Form Submit

const buttonSend = document.getElementById('button-send');
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputMessage = document.getElementById('input-message');

buttonSend.addEventListener("click", () => {
    inputName.value="";
    inputEmail.value="";
    inputMessage.value="";
});