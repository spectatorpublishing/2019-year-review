import React, { Component } from 'react';
import styled from 'styled-components';
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

const letter = 
"Most undergraduates spend just four short years on this campus, and every moment—from the mundane to the pivotal—matters. This year, like each that has come before it, gave rise to moments of victory and defeat, separation and unity, stasis and progress. \
\n\nFollowing several hate crimes and incidents of racist harassment on campus, an investigation in The Eye found that university response protocols had been applied inconsistently, if at all. Students mobilized in support of their peers, giving new energy to enduring conversations about racial discrimination at Columbia and Barnard, including on the role of Public Safety. \
\n\nBoth nationally and locally, conversations about the role of institutions in handling allegations of sexual misconduct sparked heated discourse. At the beginning of the fall semester, students flocked to Low Steps in protest of Justice Brett Kavanaugh’s confirmation to the Supreme Court. After numerous tenured professors were accused or found guilty of sexual misconduct, Spectator conducted a yearlong investigation into the tension between faculty tenure and Title IX protections, which revealed that Columbia has never in its history stripped tenure rights from a faculty member accused or found guilty of sexual misconduct.\
\n\nConsequential administrative decisions and changes further swept the University. In November, after years of refusing to recognize the graduate student union, the University met the union at the bargaining table and consented to enter contract negotiations. Provost John Coatsworth announced that he will leave the University in June, while Barnard students saw the appointment of Dean of the College Leslie Grinage as well as inaugural VP of Diversity, Equity, and Inclusion Ariana González Stokas. And in February, a beloved member of the Columbia community, former General Studies Dean Peter Awn, passed away. \
\n\nAs the semester comes to a close, we invite you to take a look back on the stories that shaped a pivotal year in Columbia’s history. "


let LetterContain = styled.div`
  width: 100%;
  // margin-top: 5vw;
  padding-left: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  padding-top: 15px;
  padding-bottom: 30px;
  background-color: ${props => props.theme.indigo};
`

let MobileContain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.blue};

`

let TempLetter = styled.h1`
  height: 15%;
  width: 80%;
  max-width: 999px;
  color: ${props => props.theme.white};
  display: flex;
  align-text: justify;
  align-items: left;
  margin-right: 10vw;
  margin-bottom: 20px;
  font-size: 8em;
  position: relative;
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

let MobileLetter = styled.h3`
    display: flex;
    padding: 15px 10vw;
    margin-top: 0.8rem;
    text-align: center;
    color: ${props => props.theme.white};
`

const MobileBlurb = styled.p`
  font-size: 1rem;
  color: white;
  white-space: pre-line;
  padding: 15px 10vw;

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
    padding: 0px 10vw 15px 10vw;
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
            <TempLetter> Dear Readers, </TempLetter>
            <TitleBlurb>{letter}</TitleBlurb>
            <Border><SectionDivider/></Border>
            <Line>Katherine Gerberich, <Role>Editor in Chief, President</Role></Line> 
            <Line>Rahil Kamath, <Role>Managing Editor, Vice President</Role></Line> 
          </LetterContain>
        </Desktop>
        <MobileAndTablet>
          <MobileContain>
            <MobileLetter> Dear Readers, </MobileLetter>
            <MobileBlurb>{letter}</MobileBlurb>
            <Border><SectionDivider/></Border>
            <Line>Katherine Gerberich, <Role>Editor in Chief, President</Role></Line> 
            <Line>Rahil Kamath, <Role>Managing Editor, Vice President</Role></Line> 
          </MobileContain>
        </MobileAndTablet>
      </React.Fragment>
    );
  }
}

export default EditorLetter;
