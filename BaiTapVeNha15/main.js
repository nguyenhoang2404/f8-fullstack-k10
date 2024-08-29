const header = document.querySelector('header');
const headerLogoImg = document.querySelector('.header__logo-img');
const navLinks = document.querySelectorAll('.nav__menu-links');
const tabletBtn = document.querySelector('.tablet__menu-btn i');

window.onscroll = () => {
    const top = window.scrollY; 
    if(top > 0)
    {
        header.classList.add('bg-white');
        headerLogoImg.src = "./imgs/logo-black.png"
        navLinks.forEach(navLink => {
            navLink.classList.add("black");
        })
        tabletBtn.classList.add('black');
    }
    else {
        header.classList.remove('bg-white');
        headerLogoImg.src = "./imgs/header-logo.png";
        navLinks.forEach(navLink => {
            navLink.classList.remove("black");
        }) 
        tabletBtn.classList.remove('black');
    }
}
