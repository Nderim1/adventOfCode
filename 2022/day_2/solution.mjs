import { data } from './input.mjs'

// https://adventofcode.com/2022/day/2

let splitData = data.split(`\n`)

let splitRound = splitData.map(a => a.split(' '))

const resultsToPoints = {
  'W': 6,
  'D': 3,
  'L': 0
}

const shapeToPoints = {
  'X': 1,
  'Y': 2,
  'Z': 3,
  'A': 1,
  'B': 2,
  'C': 3
}

const convertToShape = {
  'R': ['A', 'X'],
  'P': ['B', 'Y'],
  'S': ['C', 'Z']
}

let pt1Score = {
  'p1': 0,
  'p2': 0
}

let pt2Score = {
  'p1': 0,
  'p2': 0
}

const playRPSPartOne = (round, scoreStore) => {
  let player1Pick = round[0]
  let player2Pick = round[1]

  if (
    // Draw
    (convertToShape['R'].includes(player1Pick) && convertToShape['R'].includes(player2Pick)) ||
    (convertToShape['P'].includes(player1Pick) && convertToShape['P'].includes(player2Pick)) ||
    (convertToShape['S'].includes(player1Pick) && convertToShape['S'].includes(player2Pick))
  ) {
    scoreStore['p1'] += shapeToPoints[player1Pick] + resultsToPoints['D']
    scoreStore['p2'] += shapeToPoints[player2Pick] + resultsToPoints['D']
  } else if (
    // Player 2 wins
    (convertToShape['R'].includes(player1Pick) && convertToShape['P'].includes(player2Pick)) ||
    (convertToShape['S'].includes(player1Pick) && convertToShape['R'].includes(player2Pick)) ||
    (convertToShape['P'].includes(player1Pick) && convertToShape['S'].includes(player2Pick))
  ) {
    scoreStore['p1'] += shapeToPoints[player1Pick] + resultsToPoints['L']
    scoreStore['p2'] += shapeToPoints[player2Pick] + resultsToPoints['W']
  } else if (
    // Player 1 wins
    (convertToShape['R'].includes(player1Pick) && convertToShape['S'].includes(player2Pick)) ||
    (convertToShape['S'].includes(player1Pick) && convertToShape['P'].includes(player2Pick)) ||
    (convertToShape['P'].includes(player1Pick) && convertToShape['R'].includes(player2Pick))
  ) {
    scoreStore['p1'] += shapeToPoints[player1Pick] + resultsToPoints['W']
    scoreStore['p2'] += shapeToPoints[player2Pick] + resultsToPoints['L']
  }
}

const winLosePartTwo = {
  'A': { // rock
    'X': 'C', // lose
    'Y': 'A', // draw
    'Z': 'B' // win
  },
  'B': { // paper
    'X': 'A', // lose
    'Y': 'B', // draw
    'Z': 'C' // win
  },
  'C': { // scissors
    'X': 'B', // lose
    'Y': 'C', // draw
    'Z': 'A' // win
  },
}

const playRPSPartTwo = (round) => {
  let player1Pick = round[0]
  let order = round[1]

  playRPSPartOne([player1Pick, winLosePartTwo[player1Pick][order]], pt2Score)
}

splitRound.map(round => {
  playRPSPartOne(round, pt1Score)
  playRPSPartTwo(round)
})

console.log(`Part One: Player 1 Score is: ${pt1Score.p1}`)
console.log(`Part One: Player 2 Score is: ${pt1Score.p2}`)
console.log(`Part Two: Player 1 Score is: ${pt2Score.p1}`)
console.log(`Part Two: Player 2 Score is: ${pt2Score.p2}`)
