import React from 'react'
import { GridOfOne } from '../styles/Grids.styled'
import MovieCard from '../components/MovieCard'
export default function MovieList(props) {
    const movies = props.movies;

  return (
    <GridOfOne>
        {movies.map(
            (movie) => <MovieCard id={movie.imdbId} {...movie}/>
        )}
    </GridOfOne>
  )
}
