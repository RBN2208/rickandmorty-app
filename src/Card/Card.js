import './Card.css'
import React from 'react'

export default function Card({ name, species, image, origin, location }) {
  const [isTextVisible, setIsTextVisible] = React.useState(false)

  return (
    <section className="Card">
      <h2>
        {species === 'Human' ? '👤' : '👽'}
        {name}
      </h2>
      <img className="Card__img" src={image} alt="" />
      <button
        className="Card__button"
        onClick={() => {
          setIsTextVisible(!isTextVisible)
        }}
      >
        {isTextVisible ? 'Show less Details' : 'Show more Details'}
      </button>

      {isTextVisible && (
        <div className="Card__infobox scale-up-ver-top">
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
