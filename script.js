// Dark and Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');


// Check for saved theme preference in local storage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');

  // Save theme preference in local storage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});


// Navbar Toggle for Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});


// Slideshow Functionality

let currentSlide = 0;
const videos = document.querySelectorAll('.slide-video');

function showSlide(index) {
  // Hide all videos
  videos.forEach(video => {
    video.classList.remove('active');
    video.pause();
  });

  // Handle slide boundaries
  if (index >= videos.length) currentSlide = 0;
  if (index < 0) currentSlide = videos.length - 1;

  // Show the current video
  videos[currentSlide].classList.add('active');
  videos[currentSlide].play();
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

// Auto-play slideshow
setInterval(nextSlide, 10000); // Change slide every 10 seconds

// Show the first video initially
showSlide(currentSlide);


// Cart Functionality
const cartButtons = document.querySelectorAll('.add-to-cart');

cartButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});
