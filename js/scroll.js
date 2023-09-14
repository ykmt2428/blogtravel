
/* トップへ */
const scrollTopBtn = document.querySelector('.l-footer__container__right__top');

scrollTopBtn.addEventListener('click',()=> {
  window.scroll({
    top: 0,
    behavior : 'smooth',
  });
});