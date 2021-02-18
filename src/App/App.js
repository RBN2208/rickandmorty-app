import data from '../rickandmortyapi.json'
import Card from '../Card/Card'
import Appheader from '../Appheader/Appheader'
import './App.css'
import Optionbox from '../Optionbox/Optionbox'

export default function App() {
  const apiData = data.results
  return (
    <div className="App">
      <Appheader />
      <main className="Content">
        <Optionbox />
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
      </main>
    </div>
  )
}
