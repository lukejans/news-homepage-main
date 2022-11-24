window.onload = function () {
  window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > 100) {
      document.querySelector('header').classList.add('is-scrolling');
    } else {
      document.querySelector('header').classList.remove('is-scrolling');
    }
  });

  const menuBtn = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-nav');

  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
  });
};
