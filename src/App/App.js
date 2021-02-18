import Card from '../Card/Card'
import Appheader from '../Appheader/Appheader'
import './App.css'
import Optionbox from '../Optionbox/Optionbox'
import { useState } from 'react'
import { useEffect } from 'react'
import getAllCharacters from '../services/getAllCharacters'

export default function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getAllCharacters({
      url: 'https://rickandmortyapi.com/api/character',
      setCharacters,
    })
  }, [])

  return (
    <div className="App">
      <Appheader />
      <main className="Content">
        <Optionbox />
        {characters.map(({ id, name, species, image, origin, location }) => (
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
