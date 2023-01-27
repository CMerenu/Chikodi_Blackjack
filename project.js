////////////////////////////////
// Global Variables Here
let deck = [
  {
    name: 'Ace',
    suit: 'Hearts',
    value: 1,
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
    value: 1,
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
    value: 1,
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
    value: 1,
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
console.log(deck)

let playerCards = []
let dealerCards = []
let playerScore = 0
let dealerScore = 0
const dealerSum = document.getElementById('dealer-sum')
const playerSum = document.getElementById('player-sum')
const playerStatus = document.getElementById('player-status')
const options = document.getElementById('options')
const startGame = document.getElementById('start')
const hitMe = document.getElementById('hit')
const restartGame = document.getElementById('restart')
restartGame.addEventListener('click', () => {
  location.reload()
})
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
  // deal3.style.background = 'white'
}
// const deal4 = document.getElementById('dealer-card4')
// if (deal4 && deal4.style) {
//   deal4.style.height = '125px'
//   deal4.style.width = '100px'
//   // deal4.style.background = 'white'
// }
// const deal5 = document.getElementById('dealer-card5')
// if (deal5 && deal5.style) {
//   deal5.style.height = '125px'
//   deal5.style.width = '100px'
//   // deal5.style.background = 'white'
// }

const play1 = document.getElementById('player-card1')
if (play1 && play1.style) {
  play1.style.height = '125px'
  play1.style.width = '100px'
  // play1.style.background = 'white'
}
const play2 = document.getElementById('player-card2')
if (play2 && play2.style) {
  play2.style.height = '125px'
  play2.style.width = '100px'
  // play2.style.background = 'white'
}
const play3 = document.getElementById('player-card3')
if (play3 && play3.style) {
  play3.style.height = '125px'
  play3.style.width = '100px'
  // play3.style.background = 'white'
}
// const play4 = document.getElementById('player-card4')
// if (play4 && play4.style) {
//   play4.style.height = '125px'
//   play4.style.width = '100px'
//   // play4.style.background = 'white'
// }
// const play5 = document.getElementById('player-card5')
// if (play5 && play5.style) {
//   play5.style.height = '125px'
//   play5.style.width = '100px'
//   // play5.style.background = 'white'
// }
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

// addPlayerPicture4 = () => {
//   var img = new Image()
//   img.src = deck[0].img
//   play4.appendChild(img)
// }
// addPlayerPicture5 = () => {
//   var img = new Image()
//   img.src = deck[0].img
//   play5.appendChild(img)
// }

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
  // dc2.parentNode.removeChild(img)
  // var img = new Image()
  // img.src = dealerCards[1].img
  // deal2.appendChild(img)
}
// addDealerPicture4 = () => {
//   var img = new Image()
//   img.src = deck[0].img
//   deal4.appendChild(img)
// }
// addDealerPicture5 = () => {
//   var img = new Image()
//   img.src = deck[0].img
//   deal5.appendChild(img)
// }

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
  // THIS CARD IS GOING TO BE THE BACK!!!
  console.log(deck)
}

console.log(dealerCards)
console.log(playerCards)

const sumPlayerCards = () => {
  // let playerScore = 0
  if (playerCards.length === 2) {
    for (let i = 0; i < playerCards.length; i++) {
      playerScore += playerCards[i].value
    }
    playerSum.innerText = playerScore
  } else {
    let recentCard = playerCards.slice(-1)
    playerScore += recentCard[0].value
    playerSum.innerText = playerScore
    // console.log(recentCard)
  }
  // playerSum.innerText = playerScore
  // console.log(playerScore, 'playerScore')
  // checkWinner()
}

const sumDealerCards = () => {
  if (dealerCards.length === 2) {
    dealerScore = 0
    for (let i = 0; i < dealerCards.length; i++) {
      dealerScore += dealerCards[i].value
    }
    // dealerSum.innerText = dealerScore
  } else {
    console.log(dealerScore)
    let dealerRecentCard = dealerCards.slice(-1)
    console.log(dealerRecentCard)
    dealerScore += dealerRecentCard[0].value
    dealerSum.innerText = dealerScore
    // console.log(dealerRecentCard)
  }
}

function hitCard() {
  addPlayerPictureRest()
  let e = deck.shift()
  playerCards.push(e)
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
  } else if (dealerScore === 21 && playerScore < 21) {
    playerStatus.innerText = 'Dealer Win!'
    options.innerText = 'Better luck next time!'
  } else if (playerScore === dealerScore) {
    playerStatus.innerText = ' Push!'
    options.innerText = 'Dealer and Player Wins'
  } else if (playerScore < 21) {
    playerStatus.innerText = 'What do you want to do?'
    options.innerText = 'Hit or Stay!'
  } else if (playerScore > 21) {
    playerStatus.innerText = "You've Busted!"
    options.innerText = 'Better luck next time!'
  }
}

function checkDealerWinner() {
  while (dealerScore < playerScore) {
    hitDealerCard()
    dealerSum.innerText = dealerScore
  }
  // if (dealerScore < playerScore) {
  // hitDealerCard()
  if (dealerScore > playerScore && dealerScore < 21) {
    playerStatus.innerText = 'Dealer Win!'
    options.innerText = 'Better luck next time!'
  } else if (dealerScore === 21) {
    playerStatus.innerText = 'Dealer Blackjack'
    options.innerText = 'Better luck next time!'
  } else if (dealerScore > 21) {
    playerStatus.innerText = 'Dealer Busted'
    options.innerText = 'You Win!'
  } else if (dealerScore === playerScore) {
    playerStatus.innerText = ' Push!'
    options.innerText = 'Dealer and Player Wins'
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
stay.addEventListener('click', () => {
  revealDealerPicture2()
  checkDealerWinner()
  // sumDealerCards()
  hitMe.classList.add('disableclick')
})
// restartGame.addEventListener('click', () => {
//   location.reload()
// })
