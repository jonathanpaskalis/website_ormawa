// Improved Button

const navbarSelection = document.querySelectorAll(".js-navbar-selection");
const aContact = document.querySelectorAll(".a-navbar-selection");

navbarSelection.forEach((element, index) => {
    element.addEventListener("click", () => {
        aContact[index].click();
    });
});

// Improved Button