import { data } from './input.mjs'

// https://adventofcode.com/2022/day/8

let treeStructure = data.split('\n').map(row => row.split(''))

let visibleTrees = 0
treeStructure.forEach((row, rowIndex) => {
  row.forEach((tree, treeIndex) => {
    let currTree = treeStructure[rowIndex][treeIndex]

    let top = false
    let left = false
    let right = false
    let bottom = false

    for (let i = rowIndex - 1; i >= 0; i--) {
      // search top
      if (i < 0) {
        top = true
        break
      }
      // console.log(i, treeIndex)
      top = currTree > treeStructure[i][treeIndex]
      // console.log(`currTree => ${currTree} i[${i}] treeIndex[${treeIndex}] top[${top}]` + treeStructure[i][treeIndex])
      if (!top)
        break
    }
    for (let i = treeIndex - 1; i > 0; i--) {
      // search left
      if (rowIndex === 0 && i === 0) {
        left = true
        break
      }
      left = currTree > treeStructure[rowIndex][i]
      console.log(`currTree => ${currTree} i[${i}] rowIndex[${rowIndex}] left[${left}]` + treeStructure[rowIndex][i])
      if (!left)
        break
    }

    for (let i = treeIndex + 1; i <= row.length; i++) {
      // search right
      if (rowIndex === 98) {
        right = true
        break;
      }
      if (!treeStructure[rowIndex][i]) {
        right = true
        break
      }
      right = currTree > treeStructure[rowIndex][i]
      // console.log(`currTree => ${currTree} rowIndex[${rowIndex}] i[${i}] right[${right}]` + treeStructure[rowIndex][i])
      if (!right)
        break
    }

    for (let i = rowIndex + 1; i <= treeStructure.length; i++) {
      if (rowIndex === 98) {
        bottom = true
        break;
      }
      if (treeStructure[i] && treeStructure[i][treeIndex]) {
        bottom = currTree > treeStructure[i][treeIndex]
        // console.log(`currTree => ${currTree} | compares to => ${treeStructure[i][treeIndex]} | row => ${i} | treeIndex => ${treeIndex} | rowIndex =>${rowIndex} | ${bottom}`)
      } else {
        bottom = true
      }

      if (!bottom)
        break
    }

    if (top || left || right || bottom) {
      visibleTrees += 1
    }
    console.log('=========')
  })
})

console.log(visibleTrees)