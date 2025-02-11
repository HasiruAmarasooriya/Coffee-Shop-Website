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