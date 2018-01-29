class PersonalDisplay { 
  constructor(cards) {
    this.cards = cards; 
  }

  display() {
    const personalDisplayDiv = document.querySelector('.personalDisplay');
    
    this.clear(personalDisplayDiv);

    for(let i = 0; i < this.cards.length; i++) {
      const card = document.createElement('div');
      const text = document.createTextNode(this.cards[i].toString());
      card.classList.add('card');
      card.appendChild(text);
      personalDisplayDiv.appendChild(card);
    }
  }

  clear(personalDisplayDiv) {
    while (personalDisplayDiv.hasChildNodes()) {
      personalDisplayDiv.removeChild(personalDisplayDiv.lastChild);
    }
  }
}
