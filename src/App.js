
import Container from './styles/Container.styled'
import Section from './styles/Sections.styled'
import SearchBar from './components/SearchBar'
import React from 'react'

// d500b261

const API_URL = 'http://www.omdbapi.com/?apikey=d500b261'

const searchMovie = async (title='spiderman') => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json()
  console.log(data.Search[0])

}


function App() {

  React.useEffect(
    () => {
      searchMovie();
    }
  ,[])

  return (
    <Section>
      <Container>
        <SearchBar/>
      </Container>
    </Section>
  );
}

export default App;
