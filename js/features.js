const hamburgerIcon = document.querySelector('.hamburger-icon');
const mainNav = document.getElementById('main-nav');
const header = document.getElementsByTagName('header');

// Allows Navigation to show/hide on smaller viewports (optional)
hamburgerIcon.addEventListener('click', () => {
    if (hamburgerIcon.ariaExpanded === 'false') {
        hamburgerIcon.ariaExpanded = 'true';
        hamburgerIcon.classList.add('show');
        mainNav.classList.add('show');
    }
    
    else if (hamburgerIcon.ariaExpanded === 'true') {
        hamburgerIcon.ariaExpanded = 'false';
        hamburgerIcon.classList.remove('show');
        mainNav.classList.remove('show');
    }
    
})