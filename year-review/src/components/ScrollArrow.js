import React from 'react';
import styled from 'styled-components'
import arrow from '../assets/hamburger.svg'

const hamburgUrl = "https://s3.amazonaws.com/year-in-review-assets/hamburger.svg"

const Arrow = styled.img`
  width: 2vw;
  &:hover {
      background: ${props => props.src? '#500' : '#555'};
    }
  z-index: 1;
  position: absolute;
  left: 95%;
  top: 35vh;
`
const handleClick = () => {
  window.scrollTo(0, 0)
}

const scrollArrow = () =>{
  return <Arrow src={hamburgUrl} onClick = {handleClick}/>
}

export default scrollArrow