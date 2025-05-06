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

function ariaCommands() {
    const ariaBtn = document.getElementById('aria-btn');
    const helpMenu = document.querySelector('.help-cmd');
    const ariaCont = document.getElementById('top');
    ariaBtn.addEventListener('click', () => {
        helpMenu.classList.toggle('show');
        ariaCont.classList.toggle('show');
    });
    const lightBtn = document.getElementById('lightM');
    const darkBtn = document.getElementById('darkM');

    lightBtn.addEventListener('click', () => {
        const backgroundTheme = document.body;
        const header = document.querySelector('header');
        const newsletter = document.querySelector('.newsletter');
        const navItem = document.querySelectorAll('a#nav-item');
        newsletter.style.background = 'white';
        header.style.background = 'white';
        backgroundTheme.style.background = 'white';
        navItem.forEach((anchor) => {
            anchor.style.color = '#0078d4';
        })
    });
    darkBtn.addEventListener('click', () => {
        const backgroundTheme = document.body
        const header = document.querySelector('header');
        const newsletter = document.querySelector('.newsletter');
        const navItem = document.querySelectorAll('a#nav-item');
        newsletter.style.background = '#777';
        header.style.background = '#777';
        backgroundTheme.style.background = 'black';
        navItem.forEach((anchor) => {
            anchor.style.color = 'white';
        })
    });
}
ariaCommands();