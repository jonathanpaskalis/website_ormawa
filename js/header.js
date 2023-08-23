// Improved Button

const navbarSelection = document.querySelectorAll(".js-navbar-selection");
const aContact = document.querySelectorAll(".a-navbar-selection");

navbarSelection.forEach((element, index) => {
    element.addEventListener("click", () => {
        aContact[index].click();
    });
});

// Improved Button

// Navbar Mobile

const navbarSelectionDDMobile  = document.querySelector(".navbar-selection-dd-mobile");
const navbarDropdownMobile = document.querySelector("navbar-dropdown-mobile");

navbarSelectionDDMobile.addEventListener("mouseenter", () => {
    navbarDropdownMobile.style.display="flex";
})
// Navbar Mobile
