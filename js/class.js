/* クラスの処理 */
class hamburgerMenu {
  constructor(el) {
    this.el = document.querySelector(el);
  }
  toggle() {
    this.el.classList.toggle('open');
  }
  remove() {
    this.el.classList.remove('open');
  }
}