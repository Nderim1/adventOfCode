import { data, crates } from './input.mjs'

// https://adventofcode.com/2022/day/5

data.split(`\n`).forEach(order => {
  let quantity = order.split(' ')[1]
  let moveFrom = order.split(' ')[3]
  let moveTo = order.split(' ')[5]

  let arrayToTakeFrom = crates[`arr_${moveFrom}`]
  let arrayToMoveTo = crates[`arr_${moveTo}`]

  let elementsToMove = arrayToTakeFrom.splice(arrayToTakeFrom.length - quantity)

  // Solution for part ONE
  let elementsToMoveReversed = elementsToMove.reverse()

  // To get solution for part two, dont reverse the array
  crates[`arr_${moveTo}`] = [...arrayToMoveTo, ...elementsToMoveReversed]
})

let solution = Object.keys(crates).reduce((acc, el) => {
  console.log(crates[el].length, el, crates[el][crates[el].length - 1])
  acc += crates[el][crates[el].length - 1]

  return acc
}, '')

console.log(solution)