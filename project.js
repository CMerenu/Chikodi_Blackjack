////////////////////////////////
// Global Variables Here
let deck = [
  {
    name: 'Ace',
    suit: 'Diamonds',
    value: 1,
    img: ''
  },
  {
    name: 'Two',
    suit: 'Diamonds',
    value: 2,
    img: ''
  },
  {
    name: 'Three',
    suit: 'Diamond',
    value: 3,
    img: ''
  },
  {
    name: 'Four',
    suit: 'Diamonds',
    value: 4,
    img: ' '
  },
  {
    name: 'Five',
    suit: 'Diamonds',
    value: 5,
    img: ' '
  },
  {
    name: 'Six',
    suit: 'Diamonds',
    value: 6,
    img: ' '
  },
  {
    name: 'Seven',
    suit: 'Diamonds',
    value: 7,
    img: ' '
  },
  {
    name: 'Eight',
    suit: 'Diamonds',
    value: 8,
    img: ''
  },
  {
    name: 'Nine',
    suit: 'Diamonds',
    value: 9,
    img: ' '
  },
  {
    name: 'Ten',
    suit: 'Diamonds',
    value: 10,
    img: ' '
  },
  {
    name: 'Jack',
    suit: 'Diamonds',
    value: 10,
    img: ''
  },
  {
    name: 'Queen',
    suit: 'Diamonds',
    value: 10,
    img: ' '
  },
  {
    name: 'King',
    suit: 'Diamonds',
    value: 10,
    img: ' '
  },
  {
    name: 'Ace',
    suit: 'Hearts',
    value: 1,
    img: ''
  },
  {
    name: 'Two',
    suit: 'Hearts',
    value: 2,
    img: ''
  },
  {
    name: 'Three',
    suit: 'Hearts',
    value: 3,
    img: ''
  },
  {
    name: 'Four',
    suit: 'Hearts',
    value: 4,
    img: ' '
  },
  {
    name: 'Five',
    suit: 'Hearts',
    value: 5,
    img: ' '
  },
  {
    name: 'Six',
    suit: 'Hearts',
    value: 6,
    img: ' '
  },
  {
    name: 'Seven',
    suit: 'Hearts',
    value: 7,
    img: ' '
  },
  {
    name: 'Eight',
    suit: 'Hearts',
    value: 8,
    img: ''
  },
  {
    name: 'Nine',
    suit: 'Hearts',
    value: 9,
    img: ' '
  },
  {
    name: 'Ten',
    suit: 'Hearts',
    value: 10,
    img: ' '
  },
  {
    name: 'Jack',
    suit: 'Hearts',
    value: 10,
    img: ''
  },
  {
    name: 'Queen',
    suit: 'Hearts',
    value: 10,
    img: ' '
  },
  {
    name: 'King',
    suit: 'Hearts',
    value: 10,
    img: ' '
  },
  {
    name: 'Ace',
    suit: 'Spades',
    value: 1,
    img: ''
  },
  {
    name: 'Two',
    suit: 'Spades',
    value: 2,
    img: ''
  },
  {
    name: 'Three',
    suit: 'Spades',
    value: 3,
    img: ''
  },
  {
    name: 'Four',
    suit: 'Spades',
    value: 4,
    img: ' '
  },
  {
    name: 'Five',
    suit: 'Spades',
    value: 5,
    img: ' '
  },
  {
    name: 'Six',
    suit: 'Spades',
    value: 6,
    img: ' '
  },
  {
    name: 'Seven',
    suit: 'Spades',
    value: 7,
    img: ' '
  },
  {
    name: 'Eight',
    suit: 'Spades',
    value: 8,
    img: ''
  },
  {
    name: 'Nine',
    suit: 'Spades',
    value: 9,
    img: ' '
  },
  {
    name: 'Ten',
    suit: 'Spades',
    value: 10,
    img: ' '
  },
  {
    name: 'Jack',
    suit: 'Spades',
    value: 10,
    img: ''
  },
  {
    name: 'Queen',
    suit: 'Spades',
    value: 10,
    img: ' '
  },
  {
    name: 'King',
    suit: 'Spades',
    value: 10,
    img: ' '
  },
  {
    name: 'Ace',
    suit: 'Clubs',
    value: 1,
    img: ''
  },
  {
    name: 'Two',
    suit: 'Clubs',
    value: 2,
    img: ''
  },
  {
    name: 'Three',
    suit: 'Clubs',
    value: 3,
    img: ''
  },
  {
    name: 'Four',
    suit: 'Clubs',
    value: 4,
    img: ' '
  },
  {
    name: 'Five',
    suit: 'Clubs',
    value: 5,
    img: ' '
  },
  {
    name: 'Six',
    suit: 'Clubs',
    value: 6,
    img: ' '
  },
  {
    name: 'Seven',
    suit: 'Clubs',
    value: 7,
    img: ' '
  },
  {
    name: 'Eight',
    suit: 'Clubs',
    value: 8,
    img: ''
  },
  {
    name: 'Nine',
    suit: 'Clubs',
    value: 9,
    img: ' '
  },
  {
    name: 'Ten',
    suit: 'Clubs',
    value: 10,
    img: ' '
  },
  {
    name: 'Jack',
    suit: 'Clubs',
    value: 10,
    img: ''
  },
  {
    name: 'Queen',
    suit: 'Clubs',
    value: 10,
    img: ' '
  },
  {
    name: 'King',
    suit: 'Clubs',
    value: 10,
    img: ' '
  }
]
console.log(deck)

let playerCards = []
let dealerCards = []
let playerScore = 0
let dealerScore = 0
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
  let a = deck.shift()
  playerCards.push(a)
  let b = deck.shift()
  playerCards.push(b)
  let c = deck.shift()
  dealerCards.push(c)
  let d = deck.shift()
  dealerCards.push(d)
}
console.log(playerCards)
console.log(dealerCards)

const sumPlayerCards = () => {
  let playerScore = 0
  for (let i = 0; i < playerCards.length; i++) {
    playerScore += playerCards[i].value
  }
  console.log(playerScore, 'playerScore')
}
const sumDealerCards = () => {
  let dealerScore = 0
  for (let i = 0; i < dealerCards.length; i++) {
    dealerScore += dealerCards[i].value
  }
  console.log(dealerScore, 'playerScore')
}

function hitCard() {
  let e = deck.shift()
  playerCards.push(e)
}
function hitDealerCard() {
  let f = deck.shift()
  playerCards.push(f)
}

// console.log(sumPlayerCards())
// console.log(sumDealerCards())

function checkWinner() {
  if (sumPlayerCards === 21) {
    ;(playerSum.innerText = `Blackjack!`), (options.innerText = `You Win!`)
  } else if (sumPlayerCards < 20) {
    ;(playerSum.innerText = 'What do you want to do?'),
      (options.innerText = `Hit or Stay`)
  } else if (sumPlayerCards > 21) {
    ;(playerSum.innerText = `You Busted!`),
      (options.innerText = `Better luck next time!`)
  }
}

function checkDealerWinner() {
  if (sumDealerCards < sumPlayerCards) {
    hitDealerCard()
  } else if (sumDealerCards > sumPlayerCards && sumDealerCards < 21) {
    ;(playerSum.innerText = `Dealer Win!`),
      (options.innerText = 'Better luck next time!')
  } else if (sumDealerCards === 21) {
    ;(playerSum.innerText = 'Dealer Blackjack'),
      (options.innerText = 'Better luck next time!')
  } else if (sumDealerCards > 21) {
    ;(playerSum.innerText = 'Dealer Busted'), (options.innerText = 'You Win!')
  }
}
// // const restartGame(){
// }
// ////////////////////////////////
// Event Listeners Here
startGame.addEventListener('click', () => {
  dealCards()
  sumPlayerCards()
  sumDealerCards()
  // console.log(sumPlayerCards())
  // console.log(sumDealerCards())
  checkWinner()
  startGame.classList.add('disableclick')
})
hitMe.addEventListener('click', () => {
  hitCard()
  sumPlayerCards()
  checkWinner()
})
