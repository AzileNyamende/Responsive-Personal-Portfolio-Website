document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const popup = document.getElementById('popup-message');
    const closeButton = document.getElementById('close-popup');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        popup.style.display = 'block'; // Show the popup message
    });

    closeButton.addEventListener('click', function() {
        popup.style.display = 'none'; // Hide the popup message when close button is clicked
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const showSection = (section) => {
        section.classList.add('visible');
    };

    const handleScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;
            if (sectionTop < viewportHeight - 100) { // Adjust as needed
                showSection(section);
            }
        });
    };

    // Show sections on page load
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Handle navigation clicks
    document.querySelectorAll('.navbar a').forEach(navLink => {
        navLink.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = navLink.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });

                // Add section-animation-delay class to target section
                sections.forEach(section => section.classList.remove('section-animation-delay'));
                targetSection.classList.add('section-animation-delay');

                // Reset visibility of all sections
                sections.forEach(section => {
                    section.classList.remove('visible');
                    if (section !== targetSection) {
                        section.classList.remove('section-animation-delay');
                    }
                });

                // Set a timeout to apply the visibility class after 2 seconds
                setTimeout(() => {
                    showSection(targetSection);
                }, 2000); // 2 seconds
            }
        });
    });
});

// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scrolling
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


