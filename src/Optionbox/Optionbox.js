import './Optionbox.css'
import React, { useState } from 'react'
import Searchbar from '../Searchbar/Searchbar'

export default function Optionbox({
  userInput,
  setUserInput,
  filteredSpecies,
  setFilteredSpecies,
}) {
  const [isOptionsBoxVisible, setIsOptionsBoxVisible] = useState(false)

  return (
    <div className="Optionbox">
      <button
        className="Optionbox__button"
        onClick={() => {
          setIsOptionsBoxVisible(!isOptionsBoxVisible)
        }}
      >
        {isOptionsBoxVisible ? 'Hide Options' : 'Show Options'}
      </button>

      {isOptionsBoxVisible && (
        <div className="Optionbox__options">
          <label>
            <Searchbar userInput={userInput} setUserInput={setUserInput} />
            <button>Favorites</button>
          </label>
          <label>
            Species:
            <button
              onClick={() => setFilteredSpecies('Human')}
              disabled={filteredSpecies === 'Human'}
            >
              Humans
            </button>
            <button
              onClick={() => setFilteredSpecies('Alien')}
              disabled={filteredSpecies === 'Alien'}
            >
              Alien
            </button>
            <button
              onClick={() => setFilteredSpecies('all')}
              disabled={filteredSpecies === 'all'}
            >
              All
            </button>
          </label>
          <label>
            <button>Random Character</button>
          </label>
        </div>
      )}
    </div>
  )
}
