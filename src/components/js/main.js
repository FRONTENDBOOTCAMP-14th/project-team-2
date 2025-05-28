let mobileMenu = document.querySelector('.lnb-btn');
let lnb = document.querySelector('.lnb');

mobileMenu.addEventListener('click', function () {
  this.classList.toggle('active');
  lnb.style.display = this.classList.includes('active') ? 'block' : 'none';
});
