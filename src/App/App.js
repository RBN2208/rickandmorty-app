import Card from '../Card/Card'
import Appheader from '../Appheader/Appheader'
import './App.css'
import Optionbox from '../Optionbox/Optionbox'
import { useState, useEffect } from 'react'
import getAllCharacters from '../services/getAllCharacters'

export default function App() {
  const [userInput, setUserInput] = useState('blue')
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
    <div className="App">
      <Appheader />
      <Optionbox
        characters={characters}
        userInput={userInput}
        setUserInput={setUserInput}
        filteredSpecies={filteredSpecies}
        setFilteredSpecies={setFilteredSpecies}
        randomCharacter={randomCharacter}
        setRandomCharacter={setRandomCharacter}
        randomIndex={setRandomIndex}
      />
      <main className="Content">
        {characters
          .filter(character =>
            character.name.toLowerCase().includes(userInput.toLowerCase())
          )
          .filter(
            character =>
              filteredSpecies === 'all' || character.species === filteredSpecies
          )
          .filter(character => !randomCharacter || character.id === randomIndex)
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
