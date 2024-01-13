/**
 * Day 5:
 * 
 * Problem: food production problem
 * Almanac: lists all the seeds, fertilizer type, type of water
 * 
 * 
 * 
 */

import { data } from './input.mjs'

// console.log(data.split('\n'))
const splitNewLine = data.split('\n').filter(element => !!element)
const seeds = splitNewLine.shift().split(': ')[1].split(' ')

// let mapping = {
//     'seed': {
//         'soil': {
//           98: 50,
//           99: 51,
//           50: 52,
//         }
//     },
// }

let type, element;

const mapping = splitNewLine.reduce((accumulator, line) => {
  if (line.includes(':')) {
    line = line.replace(' map:', '')
    // fertilizer-to-water
    type = line.split('-to-')[0]
    element = line.split('-to-')[1]

    accumulator = {
      ...accumulator,
      [type]: {
        [element]: []
      }
    }

    return accumulator

    // console.log(accumulator)
    // return acc
  } else {
    // console.log(line)
    const [destination, source, range] = line.split(' ')
    // console.log(range)

    // Array.from({ length: range }, (_, i) => i).map(r => {
    //   accumulator[type][element][(Number(source) + r)] = Number(destination) + r
    // })

    accumulator[type][element].push([Number(source), Number(destination), Number(range)])

    // console.log(destination, source, range)
    // console.log(type, element)
  }

  return accumulator
}, {})

// console.log('maps- > ', mapping)
let locations = []
seeds.map(seed => {
  element = 'seed'

  let nextKey = seed

  while (true) {
    type = element

    if (mapping[type] === undefined) {
      break;
    }
    // console.log(type, mapping[type])
    element = Object.keys(mapping[type])[0]

    // accumulator.seed.soil
    // console.log(mapping[type][element])
    let replaced = false
    mapping[type][element].map(el => {
      if (!replaced) {
        let source = el[0]
        let destination = el[1]
        let range = el[2]

        //98 - 50
        //99 - 51
        //50 - 52
        // ...
        //97 - 99

        //next key 35
        //source 56
        //destination 37
        //range 60

        //source 50
        //destination 52
        //range 48

        // 50 + 48 - 79 - 52



        // console.log(type, element, nextKey, source, range, destination)
        if (nextKey >= source && nextKey < source + range) {
          let distanceFromSource = nextKey - source

          nextKey = destination + distanceFromSource
          //   console.log(nextKey)

          replaced = true
        }
      }
    })




    // Array.from({ length: accumulator[type][element][2] }, (_, i) => i).map(r => {
    //   // accumulator[type][element][(Number(source) + r)] = Number(destination) + r
    //   if (mapping[type][element][nextKey] !== undefined) {
    //     nextKey = mapping[type][element][nextKey]
    //   }
    // })

  }

  // console.log(seed, nextKey)
  locations.push(nextKey)

})

console.log(Math.min(...locations))




// {'soil-to-fertilizer': [['0', '15' 37'], ]}

// cosnt splitToFertilizer = 

// console.log('---> ', seeds)

// console.log('new line ', splitNewLine)
/**
 * seeds: 79 14 55 13

seed-to-soil map:
(dest) (source) (lenght)
  50  ...  98       2
  52  ...  50       48
 */

// 1 -> 1
// ...
// 49 -> 49

// 50 -> 52
// 51 -> 53
// ...
// 97 -> 99

// 98 -> 50
// 99 -> 51

// 100 -> 100
