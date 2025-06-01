let btnBanner = document.querySelector('.banner-close');
let header = document.querySelector('header');
let topBanner = document.querySelector('.top-banner');
let bannerClosed = document.querySelector('body');

btnBanner.addEventListener('click', () => {
  topBanner.classList.add('hidden');
  bannerClosed.classList.add('banner-closed');
  header.style.marginTop = '0px';
});
