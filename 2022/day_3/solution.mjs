import { data } from './input.mjs'
import { alphabetToNumber } from '../../utils.mjs'

// https://adventofcode.com/2022/day/3

let sum = 0
let groupBadges = []

// First Part
data.split(`\n`).forEach((bag) => {
  let middle = Math.floor(bag.length / 2)
  let firstHalf = bag.substring(0, middle)
  let secondHalf = bag.substring(middle)

  let sameCharPerBag = []

  firstHalf.split('').forEach(character => {
    if (secondHalf.includes(character) && !sameCharPerBag.includes(character)) {
      sameCharPerBag.push(character)
      let charToNumber = alphabetToNumber(character)
      sum += charToNumber
    }
  })
})

console.log(`First part result is: ${sum}`)

// Second Part
let groupBags = []
let groupBag = []
data.split(`\n`).forEach((bag, index) => {
  groupBag.push(bag)
  if ((1 + index) % 3 === 0) {
    groupBags.push(groupBag)
    return groupBag = []
  }
})

let sumGroupBadges = 0
groupBags.forEach(groupBag => {
  let alreadyCounted = []
  let [firstBag, secondBag, thirdBag] = groupBag
  let availableOn2bags = []

  secondBag.split('').forEach(character => {
    if (firstBag.includes(character) && !availableOn2bags.includes(character)) {
      availableOn2bags.push(character)
    }
  })

  thirdBag.split('').forEach(character => {
    if (availableOn2bags.includes(character) && !alreadyCounted.includes(character)) {
      let charToNumber = alphabetToNumber(character)
      sumGroupBadges += charToNumber

      alreadyCounted.push(character)
    }
  })

})

console.log(`Second part result is: ${sumGroupBadges}`)