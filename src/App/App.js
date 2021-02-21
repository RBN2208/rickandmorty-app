import Card from '../Card/Card'
import Appheader from '../Appheader/Appheader'
import './App.css'
import Optionbox from '../Optionbox/Optionbox'
import { useState, useEffect } from 'react'
import getAllCharacters from '../services/getAllCharacters'
import liveSearch from '../services/liveSearch'
import filterSpecies from '../services/filterSpecies'

export default function App() {
  const [userInput, setUserInput] = useState('')
  const [filteredSpecies, setFilteredSpecies] = useState('all')
  const [characters, setCharacters] = useState([])
  const [randomCharacter, setRandomCharacter] = useState(false)
  const [randomIndex, setRandomIndex] = useState('')

  useEffect(() => {
    getAllCharacters({
      url: 'https://rickandmortyapi.com/api/character',
      setCharacters,
    })
  }, [])

  return (
    <>
      <div className="App">
        <Appheader />
        <Optionbox
          userInput={userInput}
          setUserInput={setUserInput}
          filteredSpecies={filteredSpecies}
          setFilteredSpecies={setFilteredSpecies}
          randomCharacter={randomCharacter}
          setRandomCharacter={setRandomCharacter}
          characters={characters}
          randomIndex={setRandomIndex}
        />
        <main className="Content">
          {characters
            .filter(liveSearch(userInput))
            .filter(filterSpecies(filteredSpecies))
            .filter(character =>
              randomCharacter ? character.id === randomIndex : character
            ) // warum nicht mit &&
            .map(({ id, name, species, image, origin, location }) => (
              <Card
                key={id}
                name={name}
                species={species}
                image={image}
                origin={origin.name}
                location={location.name}
              />
            ))}
        </main>
      </div>
    </>
  )
}

/*<button onClick={() => filterRandom(characters)}>Random!</button>

? character.id === filterRandom(characters)
                : character
*/
