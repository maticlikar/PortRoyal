const deck = [];
setUpDeck();
shuffle(deck);
shuffle(deck);

const deckTop = document.querySelector('.deck-top');
const harborDisplayDiv = document.querySelector('.harborDisplay');

deckTop.addEventListener('click', addToHarborDisplay);

harborDisplay = new HarborDisplay([]);
personalDisplay = new PersonalDisplay([]);

personalDisplay.display();
harborDisplay.display();

// TODO: Remove the data atributes if they are no longer needed

function addToHarborDisplay() {

  if(deck.length > 0) {
    harborDisplay.cards.push(deck[0]);
    deck.splice(0, 1);
  }

  harborDisplay.display();

  setEventListenersToCards();
}

function shuffle(a) {
    let j, x, i;

    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

function setEventListenersToCards() {
  const cards = harborDisplayDiv.children;
  
  for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', addToPersonalDisplay);
  }
}

function addToPersonalDisplay() {
  let parent = this.parentNode;
  // Index of the card element in the harbor display div
  let index = Array.prototype.indexOf.call(parent.children, this);

  console.table(harborDisplay);
  console.log(index);
  console.log(harborDisplay.cards[index]);
  console.log(this);

  personalDisplay.cards.push(harborDisplay.cards[index]);
  harborDisplay.cards.splice(index, 1);

  harborDisplay.display();
  personalDisplay.display();

  // Need to reset the listeners
  setEventListenersToCards();
}

function setUpDeck() {
  // Traders
  deck.push(new Trader(1, 3, 'green'));
  deck.push(new Trader(1, 3, 'orange'));
  deck.push(new Trader(1, 3, 'black'));
  deck.push(new Trader(1, 3, 'yellow'));
  deck.push(new Trader(1, 3, 'blue'));
  deck.push(new Trader(2, 5, 'green'));
  deck.push(new Trader(2, 5, 'orange'));
  deck.push(new Trader(2, 5, 'black'));
  deck.push(new Trader(2, 5, 'yellow'));
  deck.push(new Trader(2, 5, 'blue'));
 
  // Settlers
  for(let i = 0; i < 5; i++) {
    deck.push(new Settler());
  }

  // Captains
  for(let i = 0; i < 5; i++) {
    deck.push(new Captain());
  }

  // Priests
  for(let i = 0; i < 5; i++) {
    deck.push(new Priest());
  }

  // Jokers
  for(let i = 0; i < 3; i++) {
    deck.push(new Joker());
  }

  // Ships

  // Yellow
  deck.push(new Ship('yellow', 1, 1));
  deck.push(new Ship('yellow', 1, 1));
  deck.push(new Ship('yellow', 1, 1));
  deck.push(new Ship('yellow', 2, 1));
  deck.push(new Ship('yellow', 2, 2));
  deck.push(new Ship('yellow', 2, 2));
  deck.push(new Ship('yellow', 3, 2));
  deck.push(new Ship('yellow', 3, 4));
  deck.push(new Ship('yellow', 3, 4));
  deck.push(new Ship('yellow', 4, 4));

  // Blue
  deck.push(new Ship('blue', 1, 1));
  deck.push(new Ship('blue', 1, 1));
  deck.push(new Ship('blue', 1, 1));
  deck.push(new Ship('blue', 2, 1));
  deck.push(new Ship('blue', 2, 2));
  deck.push(new Ship('blue', 2, 2));
  deck.push(new Ship('blue', 3, 2));
  deck.push(new Ship('blue', 3, 5));
  deck.push(new Ship('blue', 3, 5));
  deck.push(new Ship('blue', 4, 5));

  // Green
  deck.push(new Ship('green', 1, 1));
  deck.push(new Ship('green', 1, 1));
  deck.push(new Ship('green', 1, 1));
  deck.push(new Ship('green', 2, 1));
  deck.push(new Ship('green', 2, 3));
  deck.push(new Ship('green', 2, 3));
  deck.push(new Ship('green', 3, 3));
  deck.push(new Ship('green', 3, 5));
  deck.push(new Ship('green', 3, 5));
  deck.push(new Ship('green', 4, 5));

  // Orange
  deck.push(new Ship('orange', 1, 1));
  deck.push(new Ship('orange', 1, 1));
  deck.push(new Ship('orange', 1, 1));
  deck.push(new Ship('orange', 2, 3));
  deck.push(new Ship('orange', 2, 3));
  deck.push(new Ship('orange', 2, 3));
  deck.push(new Ship('orange', 3, 6));
  deck.push(new Ship('orange', 3, 6));
  deck.push(new Ship('orange', 3, 8));
  deck.push(new Ship('orange', 4, 8));

  // Black
  deck.push(new Ship('black', 1, 2));
  deck.push(new Ship('black', 1, 2));
  deck.push(new Ship('black', 1, 2));
  deck.push(new Ship('black', 2, 4));
  deck.push(new Ship('black', 2, 4));
  deck.push(new Ship('black', 2, 4));
  deck.push(new Ship('black', 3, 7));
  deck.push(new Ship('black', 3, 7));
  deck.push(new Ship('black', 3, 8));
  deck.push(new Ship('black', 4, 8));
}
