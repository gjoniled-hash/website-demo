// Load Google Map Function
function loadGoogleMap() {
    const iframe = document.getElementById('google-map-iframe');
    const placeholder = document.getElementById('map-placeholder');
    if(iframe && placeholder) {
        iframe.src = iframe.getAttribute('data-src');
        iframe.style.display = 'block';
        placeholder.style.display = 'none';
    }
}

// Reveal on Scroll
const reveals = document.querySelectorAll('.reveal');
const floatBtn = document.getElementById('desktop-float');
const mobileSticky = document.getElementById('mobile-sticky');

const revealOnScroll = () => {
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) el.classList.add('active');
    });

    if (window.scrollY > 200) {
        if(floatBtn) floatBtn.classList.add('visible');
        if(mobileSticky) mobileSticky.classList.add('visible');
    } else {
        if(floatBtn) floatBtn.classList.remove('visible');
        if(mobileSticky) mobileSticky.classList.remove('visible');
    }
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Burger Menu
const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-menu');
const mobileLogo = document.querySelector('.mobile-logo-container');

if(burgerBtn) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        if(navMenu.classList.contains('active')) {
            if(mobileLogo) mobileLogo.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            if(mobileLogo) mobileLogo.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        if(burgerBtn) burgerBtn.classList.remove('active');
        if(navMenu) navMenu.classList.remove('active');
        if(mobileLogo) mobileLogo.style.display = 'none';
        document.body.style.overflow = '';
    });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const items = document.querySelectorAll('.gallery-item');
let currentIndex = 0;

items.forEach((item, index) => {
    item.addEventListener('click', () => {
        if(lbImg) lbImg.src = item.querySelector('img').src;
        currentIndex = index;
        if(lightbox) lightbox.classList.add('active');
    });
});

const closeBtn = document.getElementById('lb-close');
if(closeBtn) closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));

const nextBtn = document.getElementById('lb-next');
if(nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        lbImg.src = items[currentIndex].querySelector('img').src;
    });
}

const prevBtn = document.getElementById('lb-prev');
if(prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        lbImg.src = items[currentIndex].querySelector('img').src;
    });
}