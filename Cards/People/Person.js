class Person extends Card {
  constructor(faceUp, victoryPoints, cost, ability) {
    super(faceUp);
    this.victoryPoints = victoryPoints;
    this.cost = cost;
    this.ability = ability;
  }
}