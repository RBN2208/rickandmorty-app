export default function filterRandom(characters) {
  const randomNumber = Math.floor(Math.random() * characters.length)
  return randomNumber
}
