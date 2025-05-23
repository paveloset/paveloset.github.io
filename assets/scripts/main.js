// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-nav');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
            }
        }
    });
});

// Scroll Animation
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section-title, .feature-card, .screenshot, .contact-info, .contact-form');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 100) {
            if (element.classList.contains('section-title')) {
                element.style.animation = 'fadeInUp 1s forwards';
            } else if (element.classList.contains('feature-card')) {
                element.style.animation = 'fadeInUp 1s forwards';
                // Add delay for each card
                const index = Array.from(element.parentNode.children).indexOf(element);
                element.style.animationDelay = `${0.2 * index}s`;
            } else if (element.classList.contains('screenshot')) {
                element.style.animation = 'fadeIn 1s forwards';
                const index = Array.from(element.parentNode.children).indexOf(element);
                element.style.animationDelay = `${0.1 * index}s`;
            } else if (element.classList.contains('contact-info')) {
                element.style.animation = 'fadeInLeft 1s forwards';
            } else if (element.classList.contains('contact-form')) {
                element.style.animation = 'fadeInRight 1s forwards';
            }
        }
    });
};

// Run animation on scroll
window.addEventListener('scroll', animateOnScroll);
// Run once on page load
window.addEventListener('load', animateOnScroll);

// Form Validation and Submission
const feedbackForm = document.getElementById('feedbackForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateForm = () => {
    let isValid = true;

    // Validate Name
    if (nameInput.value.trim() === '') {
        nameInput.classList.add('error');
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameInput.classList.remove('error');
        nameError.style.display = 'none';
    }

    // Validate Email
    if (!validateEmail(emailInput.value.trim())) {
        emailInput.classList.add('error');
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailInput.classList.remove('error');
        emailError.style.display = 'none';
    }

    // Validate Message
    if (messageInput.value.trim() === '') {
        messageInput.classList.add('error');
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageInput.classList.remove('error');
        messageError.style.display = 'none';
    }

    return isValid;
};

feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
        // Simulate form submission
        setTimeout(() => {
            successMessage.style.display = 'block';
            feedbackForm.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }, 1000);
    }
});

// Input event listeners for real-time validation
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() !== '') {
        nameInput.classList.remove('error');
        nameError.style.display = 'none';
    }
});

emailInput.addEventListener('input', () => {
    if (validateEmail(emailInput.value.trim())) {
        emailInput.classList.remove('error');
        emailError.style.display = 'none';
    }
});

messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() !== '') {
        messageInput.classList.remove('error');
        messageError.style.display = 'none';
    }
});