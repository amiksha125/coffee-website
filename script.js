const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");
// show mobile menu when button clicked 
menuOpenButton.addEventListener("click", () => {
    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

//Close menu when menu-close-button hit
menuCloseButton.addEventListener("click", ()=> menuOpenButton.click());
