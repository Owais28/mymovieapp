import React from 'react'
import { Card } from '../styles/Cards.styled'
import { GridOfTwo } from '../styles/Grids.styled';
import {HeadingOne, HeadingThree, HeadingTwo} from '../styles/Headings.styled'
export default function MovieCard(props) {
    const title = props.Title || 'none';
    const img = props.Poster || 'none';
    const year = props.Year || 'none';
    const type = props.Type || 'none';

  return (
    <div>
        <Card>
                <div className='moviecard__imgContainer'>
                    <img src={img} alt=""/>
                </div>
                <div>
                    <HeadingThree>
                        {title}
                    </HeadingThree>
                    <p>Year : {year} <span>Type : {type} </span> </p>
                </div>
            
            
        </Card>
    </div>
  )
}
