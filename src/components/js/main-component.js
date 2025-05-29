let mobileMenu = document.querySelector('.lnb-btn');
let lnb = document.querySelector('.lnb');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  lnb.style.display = this.classList.includes('active') ? 'block' : 'none';
});

//
let btnBanner = document.querySelector('.banner-close');
let header = document.querySelector('header');
let topBanner = document.querySelector('.top-banner');

btnBanner.addEventListener('click', () => {
  topBanner.classList.add('hidden');
  header.style.marginTop = '0px';
});
