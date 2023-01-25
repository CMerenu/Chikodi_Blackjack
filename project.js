////////////////////////////////
// Global Variables Here
let deck = [
  (aceDiamonds = {
    name: 'Ace of Diamonds',
    value: 1
  }),
  (twoDiamonds = {
    name: 'Two of Diamonds',
    value: 2
  }),
  (threeDiamonds = {
    name: 'Three of Diamonds',
    value: 3
  }),
  (fourDiamonds = {
    name: 'Four of Diamonds',
    value: 4
  }),
  (fiveDiamonds = {
    name: 'Five of Diamonds',
    value: 5
  }),
  (sixDiamonds = {
    name: 'Six of Diamonds',
    value: 6
  }),
  (sevenDiamonds = {
    name: 'Seven of Diamonds',
    value: 7
  }),
  (eightDiamonds = {
    name: 'Eight of Diamonds',
    value: 8
  }),
  (nineDiamonds = {
    name: 'Nine of Diamonds',
    value: 9
  }),
  (tenDiamonds = {
    name: 'Ten of Diamonds',
    value: 10
  }),
  (jackDiamonds = {
    name: 'Jack of Diamonds',
    value: 10
  }),
  (queenDiamonds = {
    name: 'Queen of Diamonds',
    value: 10
  }),
  (kingDiamonds = {
    name: 'King of Diamonds',
    value: 10
  }),
  (aceSpades = {
    name: 'Ace of Spades',
    value: 1
  }),
  (twoSpades = {
    name: 'Two of Spades',
    value: 2
  }),
  (threeSpades = {
    name: 'Three of Spades',
    value: 3
  }),
  (fourSpades = {
    name: 'Four of Spades',
    value: 4
  }),
  (fiveSpades = {
    name: 'Five of Spades',
    value: 5
  }),
  (sixSpades = {
    name: 'Six of Spades',
    value: 6
  }),
  (sevenSpades = {
    name: 'Seven of Spades',
    value: 7
  }),
  (eightSpades = {
    name: 'Eight of Spades',
    value: 8
  }),
  (nineSpades = {
    name: 'Nine of Spades',
    value: 9
  }),
  (tenSpades = {
    name: 'Ten of Spades',
    value: 10
  }),
  (jackSpades = {
    name: 'Jack of Spades',
    value: 10
  }),
  (queenSpades = {
    name: 'Queen of Spades',
    value: 10
  }),
  (kingSpades = {
    name: 'King of Spades',
    value: 10
  }),
  (aceHearts = {
    name: 'Ace of Hearts',
    value: 1
  }),
  (twoHearts = {
    name: 'Two of Hearts',
    value: 2
  }),
  (threeHearts = {
    name: 'Three of Hearts',
    value: 3
  }),
  (fourHearts = {
    name: 'Four of Hearts',
    value: 4
  }),
  (fiveHearts = {
    name: 'Five of Hearts',
    value: 5
  }),
  (sixHearts = {
    name: 'Six of Hearts',
    value: 6
  }),
  (sevenHearts = {
    name: 'Seven of Hearts',
    value: 7
  }),
  (eightHearts = {
    name: 'Eight of Hearts',
    value: 8
  }),
  (nineHearts = {
    name: 'Nine of Hearts',
    value: 9
  }),
  (tenHearts = {
    name: 'Ten of Hearts',
    value: 10
  }),
  (jackHearts = {
    name: 'Jack of Hearts',
    value: 10
  }),
  (queenHearts = {
    name: 'Queen of Hearts',
    value: 10
  }),
  (kingHearts = {
    name: 'King of Hearts',
    value: 10
  }),
  (aceClubs = {
    name: 'Ace of Clubs',
    value: 1
  }),
  (twoClubs = {
    name: 'Two of Clubs',
    value: 2
  }),
  (threeClubs = {
    name: 'Three of Clubs',
    value: 3
  }),
  (fourClubs = {
    name: 'Four of Clubs',
    value: 4
  }),
  (fiveClubs = {
    name: 'Five of Clubs',
    value: 5
  }),
  (sixClubs = {
    name: 'Six of Clubs',
    value: 6
  }),
  (sevenClubs = {
    name: 'Seven of Clubs',
    value: 7
  }),
  (eightClubs = {
    name: 'Eight of Clubs',
    value: 8
  }),
  (nineClubs = {
    name: 'Nine of Clubs',
    value: 9
  }),
  (tenClubs = {
    name: 'Ten of Clubs',
    value: 10
  }),
  (jackClubs = {
    name: 'Jack of Clubs',
    value: 10
  }),
  (queenClubs = {
    name: 'Queen of Clubs',
    value: 10
  }),
  (kingClubs = {
    name: 'King of Clubs',
    value: 10
  })
]
console.log(deck)

// let playerFirstCard = deck[i]
// let playerSecondCard = deck[i]
let playerCards = []
let dealerCards = []
const dealerSum = document.getElementById('dealer-sum')
const playerSum = document.getElementById('player-sum')
const options = document.getElementById('options')
const startGame = document.getElementById('start')
const hitMe = document.getElementById('hit')
const restartGame = document.getElementById('restart')
const stayAmount = document.getElementById('stay')
////////////////////////////////
// Functions For Game Logic Here

function shuffleCards() {
  deck.sort((a, b) => 0.5 - Math.random())
}
function dealCards() {
  shuffleCards(deck)
  // let a = deck[0]
  // let b = deck[1]
  // playerCards.push(a)
  // playerCards.push(b)
  // deck.shift(x, y)
  // dealerCards.push(x, y)
  // deck.shift(x, y)
  // let c = deck[2]
  // let d = deck[3]
  // dealerCards.push(c)
  // dealerCards.push(d)
  let a = deck.shift()
  playerCards.push(a)
  let b = deck.shift()
  playerCards.push(b)
  let c = deck.shift()
  dealerCards.push(c)
  let d = deck.shift()
  dealerCards.push(d)
}

// let playerCardSum = parseInt(playerCards[0].value)
console.log(playerCards)
console.log(dealerCards)

function sumPlayerCards() {
  playerCards[0].deck.value + playerCards[1].deck.value
}
function sumDealerCards() {
  dealerCards[0].deck.value + dealerCards[1].deck.value
}
function hitCard() {
  let e = deck.shift()
  playerCards.push(e)
}
function hitDealerCard() {
  let f = deck.shift()
  playerCards.push(f)
}

console.log(sumPlayerCards)

console.log(sumDealerCards)

//   console.log(dealerCardSum)
// }
function checkWinner() {
  if (sumPlayerCards === 21) {
    ;(playerSum.innerText = `Blackjack!`), (options.innerText = ` `)
  } else if (sumPlayerCards < 20) {
    ;(playerSum.innerText = 'What do you want to do?'),
      (options.innerText = `Hit or Stay`)
  } else if (sumPlayerCards > 21) {
    ;(playerSum.innerText = `You Busted!`),
      options.innerText`Better luck next time!`
  }
}

// // const restartGame(){
// }
// ////////////////////////////////
// Event Listeners Here
startGame.addEventListener('click', () => {
  dealCards()
  checkWinner()
  startGame.classList.add('disableclick')
})
hitMe.addEventListener('click', () => {
  hitCard()
  checkWinner()
})
