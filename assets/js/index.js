var hamburgerButton =  document.querySelector('.hamburger_button');
var navPanel = document.querySelector('.nav');
hamburgerButton.addEventListener('click', event => {
    hamburgerButton.classList.toggle("active");
    navPanel.classList.toggle("active")
});

//
var elementMain = document.querySelectorAll('.list_item');