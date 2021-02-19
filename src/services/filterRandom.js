export default function filterRandom(characters, randomCharacter) {
  const randomNumber = Math.floor(Math.random() * characters.length)
  if (randomCharacter === true)
    return (character, index) => randomNumber === index
}

// randomCharacter === 'all' || character.species === randomCharacter
// if true alle ausgeben

/* 
export default function filterRandom(characters, setRandomCharacter) {
  const randomNumber = Math.floor(Math.random() * characters.length)
  return (character, index) => randomNumber === index
}
*/
