import React from 'react'
import { Card } from '../styles/Cards.styled'
import { GridOfTwo } from '../styles/Grids.styled';
import {HeadingOne, HeadingTwo} from '../styles/Headings.styled'
export default function MovieCard(props) {
    const title = props.Title;
    const img = props.Poster;
  return (
    <div>
        <Card>
            <div className='moviecard'>
                <div className='moviecard__imgContainer'>
                    <img src={img} alt=""/>
                </div>
                <div>
                    <HeadingTwo>
                        {title}
                    </HeadingTwo>
                    <p>Year </p>
                </div>
            </div>
            
            
        </Card>
    </div>
  )
}
