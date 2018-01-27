class Person extends Card {
  constructor(victoryPoints, cost, ability) {
    super(false);
    this.victoryPoints = victoryPoints;
    this.cost = cost;
    this.ability = ability;
  }

  toString() {
    return 'Person: ' + this.victoryPoints + ', ' + this.cost + ', ' + this.ability;
  }
}
