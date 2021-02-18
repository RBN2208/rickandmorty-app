import './Optionbox.css'
import React, { useState } from 'react'
import Searchbar from '../Searchbar/Searchbar'

export default function Optionbox({ userInput, setUserInput }) {
  const [isBoxVisible, setIsBoxVisible] = useState(false)

  return (
    <div className="Optionbox">
      <button
        className="Optionbox__button"
        onClick={() => {
          setIsBoxVisible(!isBoxVisible)
        }}
      >
        {isBoxVisible ? 'Hide Options' : 'Show Options'}
      </button>

      {isBoxVisible && (
        <div className="Optionbox__options">
          <label>
            <Searchbar userInput={userInput} setUserInput={setUserInput} />
            <button>Favorites</button>
          </label>
          <label>
            Species:
            <button>Human</button>
            <button>Alien</button>
            <button>All</button>
          </label>
          <label>
            <button>Random Character</button>
            <button>All Characters</button>
          </label>
        </div>
      )}
    </div>
  )
}
/*
function liveSearch(searchedValue) {
  const filterSearch = characters.filter(character =>
    character.name.toLowerCase().includes(searchedValue.toLowerCase())
  )
  setCharacters(filterSearch)
}
*/
