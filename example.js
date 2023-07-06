const deckManager = require('deck-manager');

let deck = deckManager.getUnshuffledDeck();
deck = deckManager.shuffleCards(deck);

console.log(deck);

const topCard = deckManager.popCard(deck);

console.log(topCard);

console.log(deck);