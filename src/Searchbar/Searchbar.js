import './Searchbar.css'

export default function Searchbar({ userInput, setUserInput }) {
  return (
    <input
      className="Searchbar"
      placeholder="search for a name"
      value={userInput}
      onChange={event => setUserInput(event.target.value)}
    />
  )
}
