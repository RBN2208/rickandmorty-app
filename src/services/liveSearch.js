// actually unused
export default function liveSearch(userInput) {
  return character =>
    character.name.toLowerCase().includes(userInput.toLowerCase())
}
