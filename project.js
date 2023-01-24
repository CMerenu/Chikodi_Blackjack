////////////////////////////////
// Global Variables Here
let deck = {
  aceDiamonds: {
    value: 1
  },
  twoDiamonds: {
    value: 2
  },
  threeDiamonds: {
    value: 3
  },
  fourDiamonds: {
    value: 4
  },
  fiveDiamonds: {
    value: 5
  },
  sixDiamonds: {
    value: 6
  },
  sevenDiamonds: {
    value: 7
  },
  eightDiamonds: {
    value: 8
  },
  nineDiamonds: {
    value: 9
  },
  tenDiamonds: {
    value: 10
  },
  jackDiamonds: {
    value: 10
  },
  queenDiamonds: {
    value: 10
  },
  kingDiamonds: {
    value: 10
  },
  aceSpades: {
    value: 1
  },
  twoSpades: {
    value: 2
  },
  threeSpades: {
    value: 3
  },
  fourSpades: {
    value: 4
  },
  fiveSpades: {
    value: 5
  },
  sixSpades: {
    value: 6
  },
  sevenSpades: {
    value: 7
  },
  eightSpades: {
    value: 8
  },
  nineSpades: {
    value: 9
  },
  tenSpades: {
    value: 10
  },
  jackSpades: {
    value: 10
  },
  queenSpades: {
    value: 10
  },
  kingSpades: {
    value: 10
  },
  aceHearts: {
    value: 1
  },
  twoHearts: {
    value: 2
  },
  threeHearts: {
    value: 3
  },
  fourHearts: {
    value: 4
  },
  fiveHearts: {
    value: 5
  },
  sixHearts: {
    value: 6
  },
  sevenHearts: {
    value: 7
  },
  eightHearts: {
    value: 8
  },
  nineHearts: {
    value: 9
  },
  tenHearts: {
    value: 10
  },
  jackHearts: {
    value: 10
  },
  queenHearts: {
    value: 10
  },
  kingHearts: {
    value: 10
  },
  aceClubs: {
    value: 1
  },
  twoClubs: {
    value: 2
  },
  threeClubs: {
    value: 3
  },
  fourClubs: {
    value: 4
  },
  fiveClubs: {
    value: 5
  },
  sixClubs: {
    value: 6
  },
  sevenClubs: {
    value: 7
  },
  eightClubs: {
    value: 8
  },
  nineClubs: {
    value: 9
  },
  tenClubs: {
    value: 10
  },
  jackClubs: {
    value: 10
  },
  queenClubs: {
    value: 10
  },
  kingClubs: {
    value: 10
  }
}
console.log(deck)
// let playerFirstCard = deck[i]
// let playerSecondCard = deck[i]
let playerCards = {}
let dealerCards = {}
const card = document.querySelectorAll('.card')
////////////////////////////////
// Functions For Game Logic Here
function shuffleCards() {
  deck.sort((a, b) => 0.5 - Math.random())
}
function dealCards() {
  let x = deck[0]
  playerCards.push(x)
  deck.shift()
  playerCards.push(x)
  deck.shift()
  dealerCards.push(x)
  deck.shift()
  dealerCards.push(x)
  deck.shift()
}
console.log(playerCards)
console.log(dealerCards)

function sumPlayerCards() {
  for (let i = 0; i < cardValues.length; i++) {
    let cardSum = playerCards[0].value + playerCards[1].value
  }
  return cardSum
}
// const restartGame(){
// }
// ////////////////////////////////
// Event Listeners Here
