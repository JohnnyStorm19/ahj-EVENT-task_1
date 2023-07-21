import Modal from "./components/modal/Modal";

export default class GamePlay {
  constructor() {
    this.missesEl = document.querySelector('.misses');
    this.hitsEl = document.querySelector('.hits');

    this.hits = 0;
    this.misses = 0;

    this.status = 'playing';

    this.onCellClick = this.onCellClick.bind(this);
  }

  start(func) {
    let intervalId = setInterval(() => {
      func();
      if (this.hits > 9 || this.misses > 4) clearInterval(intervalId);
    }, 800);
  }

  onCellClick(e) {
    const target = e.target;
    if (target.closest('.character')) {
      this.hits++;
      this.hitsEl.textContent++;

      this.checkStatus(this.hits, this.misses)
      return;
    } 
    this.misses++;
    this.missesEl.textContent++;

    this.checkStatus(this.hits, this.misses)
  }

  showMessage(message) {
    if (typeof message != 'string') {
      throw new Error ('Message must be type of string');
    }
    const messageEl = document.createElement('p');
    messageEl.textContent = message;

    const modal = new Modal('.modal-container');
    modal.modalContent.append(messageEl);

    modal.reveal();
    console.log(modal);
  }
  checkStatus(hits, misses) {
    if (hits === 10) {
      this.status = 'win';
      this.showMessage('Вы победили! Гоблин больше не вернется. Пока, не вернется...');
    }
    if (misses === 5) {
      this.showMessage('Поражение! С ловкостью гоблина не совладать даже вам');
    }
  }
}
