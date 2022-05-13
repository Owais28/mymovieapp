
import Container from './styles/Container.styled'
import Section from './styles/Sections.styled'
import SearchBar from './components/SearchBar'
import React from 'react'
import MovieList from './components/MovieList'
import axios from 'axios'
// d500b261

// const API_URL = 'http://www.omdbapi.com/?apikey=d500b261'




function App() {
  
  
    
  const [movies, setMovies] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('spider')

  const fetchMovie = async (title='spider') => {
    const results = await fetch(`/.netlify/functions/searchMovie?title=${title}`)
    const data = await results.json()
    const response = data.data
    // const mList = results.json()
    // const response = await fetch(`${API_URL}&s=${title}`);
    // const data = await response.json()
    // const movies = data.Search
    setMovies(response.Search)
    console.log(response.Search)
  }

  React.useEffect(() => {
    fetchMovie(searchTerm)
    // searchMovie(searchTerm);
  }

  ,[searchTerm])

    function handleSearch(event){
      setSearchTerm(event.target.value)
    }

    function handleClear(event) {
      event.target.value = ""
      setSearchTerm('');
    }

  return (
    <Section>
      <Container>
        <SearchBar search={searchTerm} onSearchChange={handleSearch} onClear={handleClear}/>
        <MovieList movies={movies}/>
      </Container>
    </Section>
  );
}

export default App;
