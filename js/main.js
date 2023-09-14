/* ハンバーガーメニュー処理*/

const hamburger = document.querySelector('.l-hamburger');
const mask = document.querySelector('.mask');
const aside = document.querySelector('aside');

hamburger.addEventListener('click',()=> {
  const tge = new hamburgerMenu('body');
  tge.toggle();
});
aside.addEventListener('click',()=> {
  const tge = new hamburgerMenu('body');
  tge.remove();
});
mask.addEventListener('click',()=> {
  const tge = new hamburgerMenu('body');
  tge.remove();
});

/* 監視処理 */
const views = document.querySelectorAll('.view');
//console.log(inv);
const options = {
  threshold: 1,
}

const observer = new IntersectionObserver(addClass,options);

views.forEach(view=> {
  observer.observe(view);
});

function addClass (entries) {
  entries.forEach(entry => {
     if(entry.isIntersecting) {
      entry.target.classList.add('move');
     }
  });
}