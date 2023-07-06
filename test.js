const deckManager = require('./index');

const deck = deckManager.getUnshuffledDeck();
console.log(deck);

const sdeck = deckManager.shuffleCards(deck)
console.log(sdeck);

const topCard = deckManager.popCard(sdeck);
console.log('Popped card:', topCard);
console.log('Remaining deck:', sdeck);
