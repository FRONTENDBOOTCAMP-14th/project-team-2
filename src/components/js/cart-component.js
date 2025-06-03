let toggleBtns = document.querySelectorAll('.item-open');

toggleBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    let group = btn.closest('.status-group');
    group.classList.toggle('open');
    let target = document.querySelector('.section-order-items');
    if (group.classList.contains('open')) {
      btn.setAttribute('aria-expanded', 'true');
      target.style.display = 'block';
    } else {
      btn.setAttribute('aria-expanded', 'false');
      target.style.display = 'none';
    }
  });
});
