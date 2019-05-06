import React from 'react'
import styled from 'styled-components'
import arrow from '../assets/hamburger.svg'
import read_more from '../assets/hamburger.svg'

const hamburgUrl = "https://s3.amazonaws.com/year-in-review-assets/hamburger.svg"

const Article = styled.div`
  margin: 0vw;
`
const Image = styled.div`
  background-image: url(${({img_src}) => img_src});
	width: 100vw;
	height: 100vh;
	object-fit: cover;
  position: relative;
`
const Title = styled.h3`
  position: absolute;
	top: 40vh;
  color: white;
  padding: 0vh 10vw;
`

const Arrow = styled.img`
  width: 2vw;
  &:hover {
      background: ${props => props.src? '#500' : '#555'};
    }
  z-index: 1;
  position: absolute;
  left: 95%;
  top: 95%;
`

const Logo = styled.img`
  display: block;
  width: 3vw;
`
  
const Link = styled.a`
  text-decoration: none;
  position: absolute;
  left: 80vw;
  top: 70%;
`

const handleClick = () => {
  window.scrollTo(0, 0)
}

const slide = (props) =>{
  return (
    <Article>
        <Image {...props}>
            <Title>{props.title}</Title>
            <Arrow src={arrow} onClick = {handleClick}/>
            <Link href={props.url}><Logo src={hamburgUrl} alt="readmore"/> </Link>
        </Image>
    </Article>
  );
}

export default slide;
