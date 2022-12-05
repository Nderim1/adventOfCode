import { data } from './input.mjs'

// https://adventofcode.com/2022/day/1

let sum = 0
let greatest = 0

let splitDataPerReindeer = data.split(`\n`)

let summedCaloriesPerReindeer = splitDataPerReindeer.map(d => {
  let a = JSON.parse(d || 0)
  if (a) {
    sum += a
    if (greatest < sum) {
      greatest = sum
    }

    if (sum) {
      return sum
    }

  } else {
    sum = 0
  }
}).filter(a => !!a)

console.log('First part: ', greatest)
let sortedCaloriesDsc = summedCaloriesPerReindeer.sort((a, b) => b - a)

let sumOfFirstThree = sortedCaloriesDsc.splice(0, 3).reduce((acc, data) => acc + data)
console.log('Second part: ', sumOfFirstThree)