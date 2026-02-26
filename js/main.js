// Main JavaScript file for LEM website
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      mobileMenuBtn.textContent = navMenu.classList.contains('active') ? '×' : '☰';
    });
  }
  console.log('LEM website JavaScript initialized');
});