var hamburgerButton =  document.querySelector('.hamburger_button');
var navPanel = document.querySelector('.nav');
hamburgerButton.addEventListener('click', event => {
    hamburgerButton.classList.toggle("active");
    navPanel.classList.toggle("active")
});

//

var mainElement = document.querySelector('.main');
var elementaryMains = document.querySelectorAll('.list_item');
elementaryMains.forEach(elementaryMain => {
    elementaryMain.addEventListener('click', event => {
        elementaryMain.classList.toggle("active");
        mainElement.classList.toggle("active");
    });
});
