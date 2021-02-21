import './Card.css'
import React, { useState } from 'react'

export default function Card({ name, species, image, origin, location }) {
  const [isTextVisible, setIsTextVisible] = useState(false)

  return (
    <section className="Card">
      <button
        className="Card__button"
        onClick={() => {
          setIsTextVisible(!isTextVisible)
        }}
      >
        {species === 'Human' ? '👤' : '👽'}
        {name}
      </button>

      {isTextVisible && (
        <div className="Card__infobox scale-up-ver-top">
          <img className="Card__img" src={image} alt="" />

          <p>
            <span className="Card__infobox--top">Origin:</span> {origin}
            <br />
            <span className="Card__infobox--top">Species:</span> {species}
            <br />
            <span className="Card__infobox--top">Location:</span> {location}
            <br />
          </p>
        </div>
      )}
    </section>
  )
}
