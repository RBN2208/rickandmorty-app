import './Card.css'

export default function Card({ name, species, image }) {
  return (
    <section className="Card">
      <h2>{name}</h2>
      {species === 'Human' ? '👤' : '👽'}
      <img className="Card__img" src={image} alt="" />
    </section>
  )
}
