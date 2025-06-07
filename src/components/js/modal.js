const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal-btn');

window.addEventListener('DOMContentLoaded', () => {
  modal.showModal();
});

closeModalBtn.addEventListener('click', () => {
  modal.close();
});
