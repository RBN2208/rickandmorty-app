import './Optionbox.css'
import React from 'react'

export default function Optionbox() {
  const [isBoxVisible, setIsBoxVisible] = React.useState(false)

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
            <input placeholder="search for a name" />
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
