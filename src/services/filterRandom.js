export default function filterRandom({ characters, index }) {
  const scheisse = characters.filter(
    Math.floor(Math.random() * characters.length - 1)
  )
  return scheisse
}

//

/* 
export default function filterRandom(characters, setRandomCharacter) {
  const randomNumber = Math.floor(Math.random() * characters.length)
  return (character, index) => randomNumber === index
}
*/
