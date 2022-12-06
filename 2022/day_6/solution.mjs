import { data } from './input.mjs'
import { containsDuplicates } from '../../utils.mjs'
// https://adventofcode.com/2022/day/6

let marker = []
let foundMarker = false
let messageMarker = []
let foundMessageMarker = false
data.split('').forEach((character, index) => {
  if (marker.length === 4) {
    marker.shift()
  }

  if (messageMarker.length === 14) {
    messageMarker.shift()
  }
  marker.push(character)
  messageMarker.push(character)

  if (marker.length >= 4 && !containsDuplicates(marker) && !foundMarker) {
    console.log('Found the packet marker => ', index + 1, marker)
    foundMarker = true
  }

  if (messageMarker.length >= 14 && !containsDuplicates(messageMarker) && !foundMessageMarker) {
    console.log('Found the message marker => ', index + 1, messageMarker)
    foundMessageMarker = true
  }
})