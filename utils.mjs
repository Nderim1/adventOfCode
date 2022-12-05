const checkIfUpperCase = (character) => {
  if (character == character.toUpperCase()) {
    return true
  }
  return false
}

const alphabetToNumber = (character) => {
  let isCommonCharUppercase = checkIfUpperCase(character)

  return isCommonCharUppercase ? character.charCodeAt() - 38 : character.charCodeAt() - 96
}

export {
  checkIfUpperCase,
  alphabetToNumber
}