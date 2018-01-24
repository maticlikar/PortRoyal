class HarborDisplay {
  constructor(cards) {
    this.cards = cards;
  }

  display() {
    const harborDisplayDiv = document.querySelector('.harborDisplay');
    for(let i = 0; i < 5; i++) {
      const card = document.createElement('div');
      card.classList.add('card');
      harborDisplayDiv.appendChild(card);
    }
  }
}
