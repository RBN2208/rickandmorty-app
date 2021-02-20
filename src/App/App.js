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
  const [randomCharacter, setRandomCharacter] = useState('all')

  useEffect(() => {
    getAllCharacters({
      url: 'https://rickandmortyapi.com/api/character',
      setCharacters,
    })
  }, [])

  function Random(characters) {
    characters(Math.floor(Math.random() * characters.length - 1))
  }

  return (
    <div className="App">
      <Appheader />
      <Optionbox
        userInput={userInput}
        setUserInput={setUserInput}
        filteredSpecies={filteredSpecies}
        setFilteredSpecies={setFilteredSpecies}
        randomCharacter={randomCharacter}
        setRandomCharacter={Random}
      />
      <main className="Content">
        {characters
          // .filter(filterRandom(characters))
          .filter((character, index) => randomCharacter === index)
          .filter(liveSearch(userInput))
          .filter(filterSpecies(filteredSpecies))
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
  )
}
