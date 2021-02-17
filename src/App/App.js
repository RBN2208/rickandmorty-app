import data from '../rickandmortyapi.json'
import Card from '../Card/Card'
import './App.css'

export default function App() {
  const apiData = data.results
  return (
    <div className="App">
      {apiData.map(({ id, name, species, image, origin, location }) => (
        <Card
          key={id}
          name={name}
          species={species}
          image={image}
          origin={origin.name}
          location={location.name}
        />
      ))}
    </div>
  )
}
