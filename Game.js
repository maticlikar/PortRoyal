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


harborDisplay = new HarborDisplay([captain, trader, settler, joker, priest, priest1, priest2, priest3, priest4, priest5, priest6, priest7]);

harborDisplay.display();

console.log(harborDisplay);

//console.log(card);
//console.log(captain);
//console.log(trader.color);
//console.log(joker);
//console.log(priest);
//console.log(settler);
//console.log(person.victoryPoints);
