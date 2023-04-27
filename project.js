////////////////////////////////
// Global Variables Here
let deck = [
  {
    name: 'Ace',
    suit: 'Hearts',
    value: 11,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-A.svg'
  },
  {
    name: 'Two',
    suit: 'Hearts',
    value: 2,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-r02.svg'
  },
  {
    name: 'Three',
    suit: 'Hearts',
    value: 3,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-r03.svg'
  },
  {
    name: 'Four',
    suit: 'Hearts',
    value: 4,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-r04.svg'
  },
  {
    name: 'Five',
    suit: 'Hearts',
    value: 5,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-r05.svg'
  },
  {
    name: 'Six',
    suit: 'Hearts',
    value: 6,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-r06.svg'
  },
  {
    name: 'Seven',
    suit: 'Hearts',
    value: 7,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-r07.svg'
  },
  {
    name: 'Eight',
    suit: 'Hearts',
    value: 8,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-r08.svg'
  },
  {
    name: 'Nine',
    suit: 'Hearts',
    value: 9,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-r09.svg'
  },
  {
    name: 'Ten',
    suit: 'Hearts',
    value: 10,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-r10.svg'
  },
  {
    name: 'Jack',
    suit: 'Hearts',
    value: 10,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-J.svg'
  },
  {
    name: 'Queen',
    suit: 'Hearts',
    value: 10,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-Q.svg'
  },
  {
    name: 'King',
    suit: 'Hearts',
    value: 10,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-K.svg'
  },
  {
    name: 'Ace',
    suit: 'Diamonds',
    value: 11,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-A.svg'
  },
  {
    name: 'Two',
    suit: 'Diamonds',
    value: 2,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-r02.svg'
  },
  {
    name: 'Three',
    suit: 'Diamonds',
    value: 3,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-r03.svg'
  },
  {
    name: 'Four',
    suit: 'Diamonds',
    value: 4,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-r04.svg'
  },
  {
    name: 'Five',
    suit: 'Diamonds',
    value: 5,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-r05.svg'
  },
  {
    name: 'Six',
    suit: 'Diamonds',
    value: 6,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-r06.svg'
  },
  {
    name: 'Seven',
    suit: 'Diamonds',
    value: 7,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-r07.svg'
  },
  {
    name: 'Eight',
    suit: 'Diamonds',
    value: 8,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-r08.svg'
  },
  {
    name: 'Nine',
    suit: 'Diamonds',
    value: 9,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-r09.svg'
  },
  {
    name: 'Ten',
    suit: 'Diamonds',
    value: 10,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-r10.svg'
  },
  {
    name: 'Jack',
    suit: 'Diamonds',
    value: 10,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-J.svg'
  },
  {
    name: 'Queen',
    suit: 'Diamonds',
    value: 10,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-Q.svg'
  },
  {
    name: 'King',
    suit: 'Diamonds',
    value: 10,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-K.svg'
  },
  {
    name: 'Ace',
    suit: 'Spades',
    value: 11,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-A.svg'
  },
  {
    name: 'Two',
    suit: 'Spades',
    value: 2,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-r02.svg'
  },
  {
    name: 'Three',
    suit: 'Spades',
    value: 3,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-r03.svg'
  },
  {
    name: 'Four',
    suit: 'Spades',
    value: 4,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-r04.svg'
  },
  {
    name: 'Five',
    suit: 'Spades',
    value: 5,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-r05.svg'
  },
  {
    name: 'Six',
    suit: 'Spades',
    value: 6,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-r06.svg'
  },
  {
    name: 'Seven',
    suit: 'Spades',
    value: 7,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-r07.svg'
  },
  {
    name: 'Eight',
    suit: 'Spades',
    value: 8,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-r08.svg'
  },
  {
    name: 'Nine',
    suit: 'Spades',
    value: 9,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-r09.svg'
  },
  {
    name: 'Ten',
    suit: 'Spades',
    value: 10,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-r10.svg'
  },
  {
    name: 'Jack',
    suit: 'Spades',
    value: 10,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-J.svg'
  },
  {
    name: 'Queen',
    suit: 'Spades',
    value: 10,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-Q.svg'
  },
  {
    name: 'King',
    suit: 'Spades',
    value: 10,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-K.svg'
  },
  {
    name: 'Ace',
    suit: 'Clubs',
    value: 11,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-A.svg'
  },
  {
    name: 'Two',
    suit: 'Clubs',
    value: 2,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-r02.svg'
  },
  {
    name: 'Three',
    suit: 'Clubs',
    value: 3,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-r03.svg'
  },
  {
    name: 'Four',
    suit: 'Clubs',
    value: 4,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-r04.svg'
  },
  {
    name: 'Five',
    suit: 'Clubs',
    value: 5,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-r05.svg'
  },
  {
    name: 'Six',
    suit: 'Clubs',
    value: 6,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-r06.svg'
  },
  {
    name: 'Seven',
    suit: 'Clubs',
    value: 7,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-r07.svg'
  },
  {
    name: 'Eight',
    suit: 'Clubs',
    value: 8,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-r08.svg'
  },
  {
    name: 'Nine',
    suit: 'Clubs',
    value: 9,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-r09.svg'
  },
  {
    name: 'Ten',
    suit: 'Clubs',
    value: 10,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-r10.svg'
  },
  {
    name: 'Jack',
    suit: 'Clubs',
    value: 10,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-J.svg'
  },
  {
    name: 'Queen',
    suit: 'Clubs',
    value: 10,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-Q.svg'
  },
  {
    name: 'King',
    suit: 'Clubs',
    value: 10,
    img: 'https://raw.githubusercontent.com/CMerenu/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-K.svg'
  }
]
// console.log(deck)

let playerCards = []
let dealerCards = []
let playerScore = 0
let dealerScore = 0
let pSum = 0
let pCash = 0
let bet = 0
let buyIn = 0
let dSum = 0
let playerAceCount = 0
let dealerAceCount = 0
let hidden = 0
let wins = 0
let losses = 0
let draws = 0
const dealerSum = document.getElementById('dealer-sum')
const playerSum = document.getElementById('player-sum')
const playerStatus = document.getElementById('player-status')
const options = document.getElementById('options')
const startGame = document.getElementById('start')
const hitMe = document.getElementById('hit')
let playerCash = document.getElementById('player-cash')
let betInput = document.getElementById('bet-input')
let betAmt = document.getElementById('bet-amt')
let profit = document.getElementById('profit')
let betUI = document.getElementById('betting')
let winCount = document.getElementById('wins')
let lossCount = document.getElementById('losses')
let drawCount = document.getElementById('draws')
const nextRound = document.getElementById('newRound')
nextRound.addEventListener('click', () => {
  newRound()
})
// const restartGame = document.getElementById('restart')
// restartGame.addEventListener('click', () => {
//   location.reload()
// })
const stay = document.getElementById('stay')
const deal1 = document.getElementById('dealer-card1')
if (deal1 && deal1.style) {
  deal1.style.height = '125px'
  deal1.style.width = '100px'
  // deal1.style.background = 'white'
}
const deal2 = document.getElementById('dealer-card2')
if (deal2 && deal2.style) {
  deal2.style.height = '125px'
  deal2.style.width = '100px'
  // deal2.style.background = 'white'
}
const deal3 = document.getElementById('dealer-card3')
if (deal3 && deal3.style) {
  deal3.style.height = '125px'
  deal3.style.width = '100px'
}

const play1 = document.getElementById('player-card1')
if (play1 && play1.style) {
  play1.style.height = '125px'
  play1.style.width = '100px'
}
const play2 = document.getElementById('player-card2')
if (play2 && play2.style) {
  play2.style.height = '125px'
  play2.style.width = '100px'
}
const play3 = document.getElementById('player-card3')
if (play3 && play3.style) {
  play3.style.height = '125px'
  play3.style.width = '100px'
}

const dealerContainer = document.getElementById('dealer-container')
const playerContainer = document.getElementById('player-container')

////////////////////////////////
// Functions For Game Logic Here

function shuffleCards() {
  deck.sort((a, b) => 0.5 - Math.random())
}

addPlayerPicture1 = () => {
  var img = new Image()
  img.src = deck[0].img
  play1.appendChild(img)
}

addPlayerPicture2 = () => {
  var img = new Image()
  img.src = deck[0].img
  play2.appendChild(img)
}

addPlayerPictureRest = () => {
  var img = new Image()
  img.src = deck[0].img
  play3.appendChild(img)
}

addDealerPicture1 = () => {
  var img = new Image()
  img.src = deck[0].img
  deal1.appendChild(img)
}

addDealerPicture2 = () => {
  var img = new Image()
  img.src =
    'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/backs/red.svg'
  img.setAttribute('id', 'dealercard2')
  deal2.appendChild(img)
}
addDealerPictureRest = () => {
  var img = new Image()
  img.src = deck[0].img
  deal3.appendChild(img)
}

revealDealerPicture2 = () => {
  document.getElementById('dealercard2').src = dealerCards[1].img
}

function dealCards() {
  shuffleCards(deck)
  addPlayerPicture1()
  let a = deck.shift()
  playerCards.push(a)
  addPlayerPicture2()
  let b = deck.shift()
  playerCards.push(b)
  addDealerPicture1()
  let c = deck.shift()
  dealerCards.push(c)
  addDealerPicture2()
  let d = deck.shift()
  dealerCards.push(d)
}

console.log(dealerCards)
console.log(playerCards)

function win() {
  wins++
  winCount.textContent = wins
}

function loss() {
  losses++
  lossCount.textContent = losses
}
function draw() {
  draws++
  drawCount.textContent = draws
}

console.log(wins)
console.log(losses)
console.log(draws)

function checkPlayerCardsValue() {
  for (let i = 0; i < playerCards.length; i++)
    if (playerScore > 21 && playerCards[i].name === 'Ace') {
      playerCards
    } else {
      playerCards = playerCards
    }
}

function pushDealerCards() {
  for (let i = 0; i < dealerCards.length; i++) {
    deck.push(dealerCards[i])
  }
}
function pushPlayerCards() {
  for (let i = 0; i < playerCards.length; i++) {
    deck.push(playerCards[i])
  }
}

function newRound() {
  pushDealerCards()
  pushPlayerCards()
  shuffleCards()
  console.log(deck)
}

// function getValue(value) {
//   if (isNaN(value)) {
//     if (value == 'A') {
//       return 11
//     } else {
//       return 10
//     }
//   }
//   return value
// }

// function checkAce(card) {
//   if (card == 'Ace') {
//     return 1
//   } else {
//     return 0
//   }
// }

// function reduceAce(sum, aceCount) {
//   while (sum > 21 && aceCount > 0) {
//     sum -= 10
//     aceCount--
//   }
//   return sum
// }

console.log(dealerCards)
console.log(playerCards)
// console.log(deck)

// const sumPlayerCards = () => {
//   if (playerCards.length === 2) {
//     for (let i = 0; i < playerCards.length; i++) {
//       playerScore += playerCards[i].value
//     }
//     playerSum.innerText = playerScore
//   } else {
//     let recentCard = playerCards.slice(-1)
//     playerScore += recentCard[0].value
//     playerSum.innerText = playerScore
//   }
// }

const sumPlayerCards = () => {
  if (playerCards.length === 2) {
    for (let i = 0; i < playerCards.length; i++) {
      playerScore += playerCards[i].value
    }
    playerSum.innerText = playerScore
  } else if (
    playerCards.length >= 2 &&
    playerCards.find((e) => e.Name === 'Ace')
  ) {
    console.log('ACE is here')
  } else {
    let recentCard = playerCards.slice(-1)
    playerScore += recentCard[0].value
    playerSum.innerText = playerScore
  }
}

const sumDealerCards = () => {
  if (dealerCards.length === 2) {
    dealerScore = 0
    for (let i = 0; i < dealerCards.length; i++) {
      dealerScore += dealerCards[i].value
    }
  } else {
    console.log(dealerScore)
    let dealerRecentCard = dealerCards.slice(-1)
    console.log(dealerRecentCard)
    dealerScore += dealerRecentCard[0].value
    dealerSum.innerText = dealerScore
  }
}

function hitCard() {
  addPlayerPictureRest()
  let e = deck.shift()
  playerCards.push(e)
  console.log(deck)
}
function hitDealerCard() {
  addDealerPictureRest()
  let e = deck.shift()
  dealerCards.push(e)
  console.log(dealerCards.length)
  console.log(dealerScore)
  console.log(dealerCards)
  sumDealerCards()
}

const checkWinner = () => {
  console.log(playerScore)
  if (playerScore === 21) {
    playerStatus.innerText = 'Blackjack!'
    options.innerText = 'You Win!'
    win()
  } else if (dealerScore === 21 && playerScore < 21) {
    playerStatus.innerText = 'Dealer Win!'
    options.innerText = 'Better luck next time!'
    loss()
  } else if (playerScore === dealerScore) {
    playerStatus.innerText = ' Push!'
    options.innerText = 'Dealer and Player Wins'
    draw()
  } else if (playerScore < 21) {
    playerStatus.innerText = 'What do you want to do?'
    options.innerText = 'Hit or Stay!'
  } else if (playerScore > 21) {
    playerStatus.innerText = "You've Busted!"
    options.innerText = 'Better luck next time!'
    loss()
  }
}

function checkDealerWinner() {
  while (dealerScore < playerScore) {
    hitDealerCard()
    dealerSum.innerText = dealerScore
  }
  if (dealerScore > playerScore && dealerScore < 21) {
    playerStatus.innerText = 'Dealer Win!'
    options.innerText = 'Better luck next time!'
    loss()
  } else if (dealerScore === 21) {
    playerStatus.innerText = 'Dealer Blackjack'
    options.innerText = 'Better luck next time!'
    loss()
  } else if (dealerScore > 21) {
    playerStatus.innerText = 'Dealer Busted'
    options.innerText = 'You Win!'
    win()
  } else if (dealerScore === playerScore) {
    playerStatus.innerText = ' Push!'
    options.innerText = 'Dealer and Player Wins'
    draw()
  }
}

// ////////////////////////////////
// Event Listeners Here
startGame.addEventListener('click', () => {
  dealCards()
  sumPlayerCards()
  sumDealerCards()
  checkPlayerCardsValue()
  checkWinner()
  startGame.classList.add('disableclick')
})
hitMe.addEventListener('click', () => {
  hitCard()
  checkPlayerCardsValue()
  sumPlayerCards()
  checkWinner()
})
stay.addEventListener('click', () => {
  revealDealerPicture2()
  checkDealerWinner()
  hitMe.classList.add('disableclick')
})
