# deckManager

## Description

`deckManager` is a simple, lightweight npm package designed to simulate a card deck. It includes functions to generate a standard 52-card deck, shuffle the deck, pop off the top card, and generate a specified number of random cards. Each card in the deck is represented as a two-character string, with the first character representing the rank (2-10, J, Q, K, A) and the second character representing the suit (H, D, C, S).

## Installation

To install this package, use npm:

```shell
npm install deckManager
```

## API

### `generateCards(n)`

This function generates `n` random cards. Each card is represented as a string, with the rank followed by the suit.

**Parameters:**

- `n` (integer): The number of random cards to generate.

**Return value:**

- An array of `n` random card strings.

### `getUnshuffledDeck()`

This function generates an unshuffled 52-card deck. Each card is represented as a string, with the rank followed by the suit.

**Parameters:**

- None

**Return value:**

- An array of 52 card strings, sorted by suit and then rank.

### `shuffleCards(cards)`

This function shuffles a given array of cards using the Fisher-Yates algorithm.

**Parameters:**

- `cards` (array): An array of card strings to shuffle.

**Return value:**

- The input array of cards, shuffled randomly.

### `popCard(cards)`

This function removes the top card from the given deck and returns it.

**Parameters:**

- `cards` (array): An array of card strings.

**Return value:**

- The top card string from the input deck. The input deck is modified in-place.

## Examples

To use the `deckManager` package, first import it into your JavaScript file:

```javascript
const deckManager = require('deckManager');
```

Then, you can generate a shuffled deck and deal the top card:

```javascript
let deck = deckManager.getUnshuffledDeck();
deck = deckManager.shuffleCards(deck);
const topCard = deckManager.popCard(deck);
```

Or generate a set of five random cards:

```javascript
const randomCards = deckManager.generateCards(5);
```

## Contribute

Contributions are always welcome!
