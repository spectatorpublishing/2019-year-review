import React, { Component } from 'react';
import styled from 'styled-components';
import { Mobile, Desktop } from 'react-responsive-simple';


let LetterContain = styled.div`
  height: 150vh;
  width: 100%;
  // margin-top: 5vw;
  margin-left: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
`

let MobileContain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


`

let TempLetter = styled.h1`
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
          </LetterContain>
        </Desktop>
        <Mobile><MobileContain>
        </MobileContain>
          <MobileLetter>LETTER FROM THE EDITOR</MobileLetter>
          <MobileBlurb>{this.props.letter}</MobileBlurb>
        </Mobile>
      </React.Fragment>
    );
  }
}

export default EditorLetter;
