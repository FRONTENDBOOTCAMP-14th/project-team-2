document.querySelectorAll('.more').forEach((button, index) => {
  const dialog = document.querySelectorAll('.show-dialog')[index];
  const closeBtn = dialog.querySelector('.btn-cancel');
  const submitDialogBtn = document.querySelector('.btn-submit');

  button.addEventListener('click', () => {
    dialog.showModal();
  });

  closeBtn.addEventListener('click', () => {
    dialog.close();
  });

});

});

