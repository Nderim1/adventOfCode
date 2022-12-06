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

const containsDuplicates = (array) => {
  const result = array.some(element => {
    if (array.indexOf(element) !== array.lastIndexOf(element)) {
      return true;
    }

    return false;
  });

  return result;
}

export {
  checkIfUpperCase,
  alphabetToNumber,
  containsDuplicates
}