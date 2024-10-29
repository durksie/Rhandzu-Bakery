function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// Close the menu if clicking outside of it
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('nav-links');
    const burgerMenu = document.querySelector('.burger-menu');

    // Check if the click happened outside the nav links and burger menu
    if (!navLinks.contains(event.target) && !burgerMenu.contains(event.target)) {
        navLinks.classList.remove('show');
    }
});


//Slideshow

