export default function getAllCharacters({ url, setCharacters }) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      setCharacters(characters => [...characters, ...data.results])

      const nextUrl = data.info.next
      nextUrl && getAllCharacters({ url: nextUrl, setCharacters })
    })
}
