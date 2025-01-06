function toggleMenu() {
  const menu = document.querySelector('.Nav-links ul');
  menu.classList.toggle('active');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          window.scrollTo({
              top: target.offsetTop - 50,
              behavior: 'smooth',
          });
      }
  });
});

document.getElementById('search-icon').addEventListener('click', function () {
  const searchBox = document.getElementById('search-box');
  searchBox.classList.toggle('active'); 
  if (searchBox.classList.contains('active')) {
      searchBox.focus();
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".slider-image");
  let currentIndex = 0;

  function showNextImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }
  setInterval(showNextImage, 3000);
});
