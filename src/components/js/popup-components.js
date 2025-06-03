const showDialogBtn = document.querySelector('.dialog-popup');
const closeDialogBtn = document.querySelector('.btn-cancel');
const submitDialogBtn = document.querySelector('.btn-submit');
const dialogEl = document.querySelector('.show-dialog');

showDialogBtn.addEventListener('click', () => {
  dialogEl.showModal();
});

// 닫기 버튼 클릭 시 다이얼로그 닫기
closeDialogBtn.addEventListener('click', () => {
  dialogEl.close();
});
