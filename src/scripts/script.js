'use strict';
const navigation = document.querySelector('.navigation');
const btnOpenCloseNavigation = document.querySelector('.open-close-navigation');

console.log(navigation);

const closeOpenNavigation = () => {
    navigation.classList.toggle('navigation-closed');
    if(btnOpenCloseNavigation.textContent === "Открыть навигацию"){
        btnOpenCloseNavigation.textContent = "Закрыть навигацию";
    } else {
        btnOpenCloseNavigation.textContent = "Открыть навигацию";
    }

};


btnOpenCloseNavigation.addEventListener('click', closeOpenNavigation);
// btnOpenCloseNavigation.addEventListener('click', closeNavigation);

// navigation.style.display = "none";