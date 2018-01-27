card = new Card(true);
person = new Person(true, 5, 6, 'ability');
captain = new Captain();
trader = new Trader(1, 2, 'green'); 
settler = new Settler();
joker = new Joker();
priest = new Priest();

const deck = [];
setUpDeck();

const deckTop = document.querySelector(".deck-top");

deckTop.addEventListener("click", addToHarborDisplay);

harborDisplay = new HarborDisplay([captain, trader, settler, joker, priest, trader]);

harborDisplay.display();

function addToHarborDisplay() {
  console.log(harborDisplay);
  // TODO: Make it add a card from the deck not just a random card
  harborDisplay.cards.push(new Card(true));
  harborDisplay.display();
}

function setUpDeck() {
  
}
