import { data } from './input.mjs'

// https://adventofcode.com/2022/day/4

let contains = 0
let overlap = 0
data.split('\n').forEach(pair => {
  let single = pair.split(',')
  let first = single[0]
  let second = single[1]

  let firstFrom = JSON.parse(first.split('-')[0])
  let firstTo = JSON.parse(first.split('-')[1])
  let secondFrom = JSON.parse(second.split('-')[0])
  let secondTo = JSON.parse(second.split('-')[1])

  if ((firstFrom >= secondFrom && firstTo <= secondTo) || (firstFrom <= secondFrom && firstTo >= secondTo)) {
    contains++
  }

  if ((firstFrom <= secondTo && firstTo >= secondFrom)) {
    overlap++
  }
})

console.log(`Part one result is: ${contains}`)

console.log(`Part two result is: ${overlap}`)