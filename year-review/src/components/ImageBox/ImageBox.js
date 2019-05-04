import React from "react";
import styled from "styled-components";
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

const Flipcard = styled.div`
  background-color: transparent;
  width: 25vw;
  height: 25vw; 

  @media only screen and (max-width: 991px){
    width: 50vw;
    height: 50vw;
  }

  perspective: 1000px;
  -webkit-perspective: 1000px;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transition: transform 0.8s;

  @media only screen and (min-width:992px){
    :hover{
      -webkit-transform: rotateY(180deg);
      transform: rotateY(180deg);
  	}
  }

  -webkit-transform: rotateY(${props => props.flipped ? "180deg" : "0deg"});
  transform: rotateY(${props => props.flipped ? "180deg" : "0deg"});
`;

const Inner = styled.div`
	position: relative;
	text-align: center;
  height: 100%;
  width: 100%;

`;

const Front = styled.div`
  background-image: url(${({front_image}) => front_image});
  background-size: cover;
  position: absolute;
  backface-visibility: hidden;
  height: 100%;
  width: 100%;
  
`;

const Back = styled.div`
  background-image: url(${({back_image}) => back_image});
  background-size: cover;
  color: white;
  position: absolute;
  backface-visibility: hidden;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);

`;

const FrontAuthor = styled.h1`
  text-align: left;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 140px;
  font-size: 40px;
  color: white;
  
`;


const Title = styled.h3`
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 5px;
  color: white;
 
`;

const Header = styled.p`
  text-align: left;
  font-size: small;
  margin-right: 20px;
  margin-top: 20px;
  display: flex;
  color: white;
`;

const Body = styled.div`
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: white;
`;

const Section = styled.h5`
  font-size: small;
  color: white;
`;

const Author = styled.div`
  margin-left: 20px;
  padding-right: 5px;
  color: white;

`;

class ImageBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      flipped: false
    }
    this.flipCard = this.flipCard.bind(this)
  }

  flipCard(){
    console.log('flip')
    this.setState({flipped: !this.state.flipped})
  }

  render(){
    const props = this.props
    return (
        <div>
          <Flipcard onClick={this.flipCard} flipped={this.state.flipped}>
            <Inner>
              <Front {...props.data}>
                <FrontAuthor>{props.data.author}</FrontAuthor>
              </Front>
              <Back {...props.data}>
                <Header>
                  <Author>{props.data.author}</Author>
                  <Section>{props.data.section}</Section>
                </Header>
                <Title>{props.data.title}</Title> 
                <Body>{props.data.body}</Body> 
              </Back>
            </Inner>
          </Flipcard>
        </div>
    )
  }
} 

export default ImageBox;	
