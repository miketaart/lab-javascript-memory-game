
class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  // shuffle algorithm
  shuffleCards() {
    var cards = this.cards;
    if (this.cards) {
      
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      } 
    
      return cards  

    } else {
      return undefined
      }
  }
  
  
  // When a user picks 2 cards, we will need to check if they are the same. 
  // Let's create logic for the method checkIfPair(), which will receive two parameters, 
  // the names of both cards selected by the user (example: 'ironman' and 'batman'). 
  // The method will add 1 to our pairsClicked property, and if the cards are the same also add 1 to pairsGuessed. 
  // It should return true or false depending on the result of comparing both cards.
  // So, to summarize, we will have to update pairsClicked on every two open cards by a user - 
  // it doesn't matter if the cards are the same. If two cards that we are comparing are the same, then pairsGuessed gets updated with +1.
  
  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed++
      this.pairsClicked++
      return true;
    } else {
      this.pairsClicked++
      return false;
    }
  }

  // Finally, we need to make sure our game ends, and for that, we can add some logic to the isFinished() method. 
  // Here we need to check if our property pairsGuessed has reached the numbers of pairs the game has.

  isFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      console.log("you finished the game!!!!!");
      return true;
    } else {
      return false;

    }
  }
}

