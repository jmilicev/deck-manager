const { v4: uuidv4 } = require('uuid');


  const suits = ['H', 'D', 'C', 'S'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// Generate a random card value
function generateCard() {

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomRank = ranks[Math.floor(Math.random() * ranks.length)];

  return `${randomRank}${randomSuit}`;
}

function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
}

function getUnshuffledDeck() {
  const deck = [];

  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push(`${rank}${suit}`);
    }
  }

  return deck;
}

// Get and remove the top card from the deck
function popCard(cards) {
    return cards.shift();
}

// Generate n random card values
function generateCards(n) {
  const cards = [];

  for (let i = 0; i < n; i++) {
    cards.push(generateCard());
  }

  return cards;
}

// Export the generateCards function
module.exports = {
  generateCards,
  getUnshuffledDeck,
  shuffleCards,
  popCard
};
