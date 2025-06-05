const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal-btn');

window.addEventListener('DOMContentLoaded', () => {
  modal.showModal();
});

closeBtn.addEventListener('click', () => {
  modal.close();
});
