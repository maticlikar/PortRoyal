card = new Card(true);
person = new Person(true, 5, 6, 'ability');
captain = new Captain();
trader = new Trader(1, 2, 'green'); 
settler = new Settler();
joker = new Joker();
priest = new Priest();


harborDisplay = new HarborDisplay([captain, trader, settler, joker, priest]);

harborDisplay.display();

console.log(harborDisplay);

//console.log(card);
//console.log(captain);
//console.log(trader.color);
//console.log(joker);
//console.log(priest);
//console.log(settler);
//console.log(person.victoryPoints);
