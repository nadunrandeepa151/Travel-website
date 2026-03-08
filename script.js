// Advanced JavaScript Features for Travel Website

// Form Validation
function validateForm() {
    const form = document.getElementById('myForm');
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return false;
    }
    return true;
}

// Smooth Scrolling
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    targetElement.scrollIntoView({ behavior: 'smooth' });
}

// DOM Manipulation Example
function changeHeader() {
    const header = document.querySelector('h1');
    header.textContent = 'Welcome to Your Dream Destination!';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    menuToggle.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        nav.classList.toggle('active');
    });

    const filterButtons = document.querySelectorAll('.filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            filterContent(filterValue);
        });
    });
});

// Mobile Menu Toggle
function mobileMenuToggle() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

// Filter Functionality
function filterContent(category) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Interactive Feature Example
document.querySelector('#myButton').addEventListener('click', () => {
    alert('Button was clicked!');
});

// Setup Form Validation on Submit
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});
