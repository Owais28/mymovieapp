import React from 'react'
import { Card } from '../styles/Cards.styled'
import { GridOfTwo } from '../styles/Grids.styled';
import {HeadingOne} from '../styles/Headings.styled'
export default function MovieCard(props) {
    const title = props.Title;
    const img = props.Poster;
  return (
    <div>
        <Card className='moviecard'>
            <div className='moviecard__imgContainer'>
            <img src={img} alt=""/>
            </div>
            <h1>{title}</h1>
            
        </Card>
    </div>
  )
}
