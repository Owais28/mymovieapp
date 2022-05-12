import styled from 'styled-components'

export const GridOfTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 50px;
    grid-column-gap: 78px;
    justify-content: center;
    align-items: center;
  @media screen and (min-width : 979px) {
      grid-template-columns: 2fr 1fr;
  }
`

export const GridOfThree = styled.div`
  display : grid;
  grid-template-columns : 1fr;
  grid-column-gap : 40px;
  grid-row-gap : 50px;
  @media screen and (min-width : 747px) {
    grid-template-columns : 1fr 1fr;
    grid-column-gap : 50px;
  }
  @media screen and (min-width : 991px) {
    grid-template-columns : 1fr 1fr 1fr;
    grid-column-gap : 50px;
  }
`

export const GridOfOne = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 50px;
    justify-content: center;
    align-items: center;
`