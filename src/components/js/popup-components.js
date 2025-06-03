const showDialogBtn = document.querySelector('.show-dialog');
const closeDialogBtn = document.querySelector('.btn-cancel');
const submitDialogBtn = document.querySelector('.btn-submit');
const dialogEl = document.querySelector('.dialog-popup');

showDialogBtn.addEventListener('click', () => {
  dialogEl.showModal();
});

closeDialogBtn.addEventListener('click', () => {
  dialogEl.close();
});
