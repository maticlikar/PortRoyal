card = new Card(true);
person = new Person(true, 5, 6, 'ability');
captain = new Captain();
trader = new Trader(1, 2, 'green'); 
settler = new Settler();
joker = new Joker();
priest = new Priest();

const deck = [];
setUpDeck();

console.log(deck);

const deckTop = document.querySelector('.deck-top');

deckTop.addEventListener('click', addToHarborDisplay);

harborDisplay = new HarborDisplay(deck);

harborDisplay.display();

function addToHarborDisplay() {
  console.log(harborDisplay);
  // TODO: Make it add a card from the deck not just a random card
  harborDisplay.cards.push(new Card(true));
  harborDisplay.display();
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
