import data from '../rickandmortyapi.json'
import Card from '../Card/Card'
import './App.css'

export default function App() {
  const apiData = data.results
  return <div className="App">
    { apiData.map(({id, name, species, image}) => <Card key={id} name={name} species={species} image={image}/>) } 
  </div>
}

  

