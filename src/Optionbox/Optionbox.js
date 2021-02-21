import './Optionbox.css'
import React, { useState } from 'react'
import Searchbar from '../Searchbar/Searchbar'
import randomNumber from '../services/randomNumber'

export default function Optionbox({
  userInput,
  setUserInput,
  filteredSpecies,
  setFilteredSpecies,
  setRandomCharacter,
  randomCharacter,
  characters,
  randomIndex,
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
          <Searchbar userInput={userInput} setUserInput={setUserInput} />
          <button className="Optionbox__optionsbutton">Favorites</button>
          Filter:
          <button
            className={
              filteredSpecies === 'Human'
                ? 'Optionbox__optionsbutton active'
                : 'Optionbox__optionsbutton'
            }
            onClick={() => setFilteredSpecies('Human')}
          >
            Humans
          </button>
          <button
            className={
              filteredSpecies === 'Alien'
                ? 'Optionbox__optionsbutton active'
                : 'Optionbox__optionsbutton'
            }
            onClick={() => setFilteredSpecies('Alien')}
          >
            Alien
          </button>
          <button
            className={
              filteredSpecies === 'all'
                ? 'Optionbox__optionsbutton active'
                : 'Optionbox__optionsbutton'
            }
            onClick={() => setFilteredSpecies('all')}
          >
            All
          </button>
          Random Character
          <button
            className="Optionbox__optionsbutton"
            onClick={() => {
              setRandomCharacter(!randomCharacter) // switch true/false
              randomIndex(randomNumber(characters))
            }}
          >
            Random
          </button>
        </div>
      )}
    </div>
  )
}
