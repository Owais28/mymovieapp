import React from 'react'
import { GridOfOne } from '../styles/Grids.styled'
import MovieCard from '../components/MovieCard'
export default function MovieList(props) {
    let movies = props.movies || [<h2>Sorry...</h2>];
    

  return (
    <GridOfOne>
        {movies.map(
            (movie) => <MovieCard id={movie.imdbId} {...movie}/>
        )}
    </GridOfOne>
  )
}
