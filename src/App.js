
import Container from './styles/Container.styled'
import Section from './styles/Sections.styled'
import SearchBar from './components/SearchBar'
import React from 'react'
import MovieList from './components/MovieList'
import axios from 'axios'



function App() {
  
  
    
  const [movies, setMovies] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('spider')

  const fetchMovie = async (title='spider') => {
    const results = await axios.get(`/.netlify/functions/searchMovie?title=${title}`)
    const data = await results.data
    const response = data.data
    const allSearchedMovies = response.Search;
    setMovies(allSearchedMovies)
    // console.log(allSearchedMovies)
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
