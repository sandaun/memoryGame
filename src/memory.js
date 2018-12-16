class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards () {
    this.cards.sort(() => 0.5 - Math.random()); // Random used for shuffle. Nujmber will be negative or positive.
  };

  checkIfPair (firstCard, secondCard) {
    this.pairsClicked++;
    if (firstCard === secondCard) {
      this.pairsGuessed++
      return true;
    } else {
      return false
    }
  }
  
  isFinished () {
    if (this.pairsGuessed === (this.cards.length/2)) {
      return true;
    } else {
      return false;
    }
  }
}