import { data } from './input.mjs'

// https://adventofcode.com/2022/day/7

class Directory {
  constructor(name = '', parent = Directory, size = 0, children = {}) {
    this.size = size
    this.name = name
    this.parent = parent
    this.children = children
  }

}

let MAX_SIZE = 100000
let TOTAL_AVAILABLE_SPACE = 70000000
let UNUSED_SPACE_NEEDED = 30000000
let totalSize = 0
let current = new Directory('root')
current.children['/'] = new Directory('/')
console.log(current)

data.split(`\n`).forEach(line => {
  let [first, second, third] = line.split(' ')

  if (first === '$' && second === 'cd' && third === '..') {
    // '$ cd ..'
    if (current.size <= MAX_SIZE) {
      totalSize += current.size
    }
    current.parent.size += current.size
    current = current.parent
  } else if (first === '$' && second === 'cd' && third !== '..') {
    // '$ cd hhlg'
    current = current.children[third]
  } else if (first === 'dir') {
    // 'dir ghsl'
    current.children[second] = new Directory(second, current)
  } else if (!isNaN(first)) {
    // '32274 gctgt.stn'
    current.size += JSON.parse(first)
  }
})


console.log(`Result part one: ${totalSize}`)