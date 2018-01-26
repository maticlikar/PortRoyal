card = new Card(true);
person = new Person(true, 5, 6, 'ability');
captain = new Captain();
trader = new Trader(1, 2, 'green'); 
settler = new Settler();
joker = new Joker();
priest = new Priest();
priest1 = new Priest();
priest2 = new Priest();
priest3 = new Priest();
priest4 = new Priest();
priest5 = new Priest();
priest6 = new Priest();
priest7 = new Priest();
priest8 = new Priest();


harborDisplay = new HarborDisplay([captain, trader, settler, joker, priest, trader, trader, trader, trader, trader, trader, trader, trader, trader, trader, trader, trader, trader, trader]);

harborDisplay.display();

console.log(harborDisplay);

//console.log(card);
//console.log(captain);
//console.log(trader.color);
//console.log(joker);
//console.log(priest);
//console.log(settler);
//console.log(person.victoryPoints);
