import React, { Component } from 'react';
import styled from 'styled-components';
import { MobileAndTablet, Desktop } from 'react-responsive-simple';


let LetterContain = styled.div`
  width: 100%;
  // margin-top: 5vw;
  margin-left: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  padding-top: 1rem;
  padding-bottom: 3rem;
`

let MobileContain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

let TempLetter = styled.h2`
  height: 15%;
  width: 80%;
  max-width: 999px;
  color: ${props => props.theme.white};
  display: flex;
  align-text: justify;
  background-color: ${props => props.theme.indigo};
  align-items: left;
  margin-right: 10vw;
  font-size: 8em;
  position: relative;
`

let MobileLetter = styled.h3`
    display: flex;
    padding: 15px;
    margin-top: 0.8rem;
    text-align: center;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.indigo};

    
`

const TitleBlurb = styled.p`
  font-size: .9em;
  font-weight: 25;
  width: 80%;
  // margin-left: 5vw;
  // margin-right: 5vw;
  color: white;
  // margin-top: 5vh;
  text-align: left;
  z-index: 2;
  position: relative;
  white-space: pre-line;
`;

const MobileBlurb = styled.p`
  font-size: 0.7rem;
  color: white;
  white-space: pre-line;
  padding: 15px;

`
const Role = styled.div`
 color: ${props => props.theme.transparentWhite};
 padding-left: 0.5rem;

`;
const Line = styled.h5`
   color: ${props => props.theme.white};
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;

   @media only screen and (max-width: 991px){
    padding: 15px 15px;
    font-size: 1em;
    margin: 0;
 }
`;
const Border = styled.div`
    margin-top: 30px;
    margin-bottom: 20px;
    color: black;
    width: 69.211px;
    border-width: 2pt;
    float: left;
    @media only screen and (max-width: 991px){
      padding: 15px 10vw 5px 10vw;
      margin: 0;
   }
`
const SectionDivider = styled.hr`
  height: 1px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.white};
  border: none;
`


class EditorLetter extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <React.Fragment>
        <Desktop>
          <LetterContain>
            <TempLetter> LETTER FROM THE EDITOR </TempLetter>
            <TitleBlurb>{this.props.letter}</TitleBlurb>
            <Border><SectionDivider/></Border>
            <Line>{this.props.author}, <Role>{this.props.role}</Role></Line> 
          </LetterContain>
        </Desktop>

        <MobileAndTablet><MobileContain>
        </MobileContain>
          <MobileLetter>LETTER FROM THE EDITOR</MobileLetter>
          <MobileBlurb>{this.props.letter}</MobileBlurb>
          
          <Line>{this.props.author}, <Role>{this.props.role}</Role></Line> 
        </MobileAndTablet>
      </React.Fragment>
    );
  }
}

export default EditorLetter;
