export default function filterSpecies(filteredSpecies) {
  return character =>
    filteredSpecies === 'all' || character.species === filteredSpecies
}
