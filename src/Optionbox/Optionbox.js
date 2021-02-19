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
  // const [isActive, setIsActive] = useState(false)

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
            onClick={
              () => setFilteredSpecies('Human') // , setIsActive(!isActive))
            }
            // disabled={filteredSpecies === 'Human'}
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
            // disabled={filteredSpecies === 'Alien'}
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
            // disabled={filteredSpecies === 'all'}
          >
            All
          </button>
          <button className="Optionbox__optionsbutton">Random Character</button>
        </div>
      )}
    </div>
  )
}

/* {
              isActive
                ? 'Optionbox__optionsbutton'
                : 'Optionbox__optionsbutton active'
            }*/
