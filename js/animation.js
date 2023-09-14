//テキストアニメーション処理

document.addEventListener('DOMContentLoaded',()=> {
  createText();
  animationText();
});

function createText () {
  const titles = document.querySelectorAll('.o-content__moveTitle');
  titles.forEach(title => {
    const inner = title.innerText;
  const result = inner.split('');
  title.textContent = '';
  for(let i = 0; i < result.length; i++) {
    if(result[i] !== null) { 
      const span = document.createElement('span');
      span.textContent = result[i];
      title.appendChild(span);
    }
  }
  })
}

function animationText() {
  const child = document.querySelectorAll('.o-content__moveTitle span');
  for(let i = 0; i < child.length; i++) {
    child[i].classList.add('delay');
  }
}




