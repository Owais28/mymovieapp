
import Container from './styles/Container.styled'
import Section from './styles/Sections.styled'
import SearchBar from './components/SearchBar'
import React from 'react'
import MovieList from './components/MovieList'
// d500b261

const API_URL = 'http://www.omdbapi.com/?apikey=d500b261'


function App() {
  
  const searchMovie = async (title='spider') => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()
    const movies = data.Search
    setMovies(movies)
    console.log(movies)
  
  }
  const [movies, setMovies] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('spider')

  React.useEffect(() => {
    searchMovie(searchTerm);
  }

  ,[searchTerm])

    function handleSearch(event){
      setSearchTerm(event.target.value)
    }

  return (
    <Section>
      <Container>
        <SearchBar onSearch={handleSearch}/>
        <MovieList movies={movies}/>
      </Container>
    </Section>
  );
}

export default App;
