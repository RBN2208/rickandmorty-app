import './Card.css'

export default function Card({ name, species, image }) {
  return (
    <section className="Card">
      <h2>
        {species === 'Human' ? '👤' : '👽'}
        {name}
      </h2>
      <img className="Card__img" src={image} alt="" />
    </section>
  )
}
