class HarborDisplay {
  constructor(cards) {
    this.cards = cards;
  }

  display() {
    const harborDisplayDiv = document.querySelector('.harborDisplay');
    
    this.clear(harborDisplayDiv);

    for(let i = 0; i < this.cards.length; i++) {
      const card = document.createElement('div');
      card.classList.add('card');
      harborDisplayDiv.appendChild(card);
    }
  }

  clear(harborDisplayDiv) {
    while (harborDisplayDiv.hasChildNodes()) {
      harborDisplayDiv.removeChild(harborDisplayDiv.lastChild);
    }
  }
}
