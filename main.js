// Show NavBar

const nav = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');

toggle.onclick = function(){
    nav.classList.toggle('show-nav');
}

// Remove Navbar

const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('show-nav');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Change Active Color

const linkColor = document.querySelectorAll('.nav-link');
function colorLink(){
    if (linkColor) {
        linkColor.forEach(L => L.classList.remove('active'));
        this.classList.add('active');
    }
}
linkColor.forEach(L => L.addEventListener('click', colorLink));