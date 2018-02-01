class HarborDisplay {
  constructor(cards) {
    this.cards = cards;
  }

  display() {
    const harborDisplayDiv = document.querySelector('.harborDisplay');
    
    this.clear(harborDisplayDiv);

    for(let i = 0; i < this.cards.length; i++) {
      const card = document.createElement('div');
      const text = document.createTextNode(this.cards[i].toString());
      card.classList.add('card');

      // Setting all of the data attributes depending on the card
      //
      // Ships
      if(this.cards[i].constructor.name === 'Ship') {
        card.setAttribute('data-type', 'ship');
        card.setAttribute('data-color', this.cards[i].color);
        card.setAttribute('data-income', this.cards[i].income);
        card.setAttribute('data-swords', this.cards[i].swords);
      }

      // People
      if(['Captian', 'Joker', 'Priest', 'Settler', 'Trader'].indexOf(this.cards[i].constructor.name) > -1) {
        card.setAttribute('data-type', 'person');
        card.setAttribute('data-victorypoints', this.cards[i].victoryPoints);
        card.setAttribute('data-cost', this.cards[i].cost);
        card.setAttribute('data-ability', this.cards[i].ability);
      }

      // People special cases
      if(this.cards[i].constructor.name === 'Trader') {
        card.setAttribute('data-color', this.cards[i].color);
      }

      card.appendChild(text);
      harborDisplayDiv.appendChild(card);
    }
  }

  clear(harborDisplayDiv) {
    while (harborDisplayDiv.hasChildNodes()) {
      harborDisplayDiv.removeChild(harborDisplayDiv.lastChild);
    }
  }
}
