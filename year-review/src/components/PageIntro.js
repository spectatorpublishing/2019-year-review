import React, { Component } from 'react';
import styled from 'styled-components';
import scroll from '../assets/scroll.svg';
import { Mobile, Desktop } from 'react-responsive-simple';


let TempTitle = styled.h1`
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
  z-index: 2;
  position: relative;
  font-size: 12em;
  @media (max-width: 991px){
        font-size: 6rem;
  }
`

let TempHeader = styled.div`
  height: 95vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.img_src});
  background-position: center;
  background-size: cover;
  background-color: blue;
  justify-content: center;
  align-items: center;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);

  &::after {
    content: "";
    background: ${props => props.theme.indigo};
    opacity: 0.3;
    height: 100vh;
    width: 100vw;
    position: absolute;
  }
`

const TitleBlurb = styled.h4`
  font-weight: 25;
  color: white;
  margin-top: 3rem;
  text-align: center;
  text-shadow: ${props => props.theme.shadow};
  z-index: 2;
  position: relative;
  margin-left: 15rem;
  margin-right: 15rem;

  
`;

let MobileTitle = styled.h1`
color: ${props => props.theme.white};
text-shadow: ${props => props.theme.shadow};
z-index: 2;
position: relative;
font-size: 5rem;
padding: 15px;
margin-top: 0.7em;`


let MobileHeader = styled.div`
height: 75vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;

background-image: url(${props => props.img_src});
background-position: center;
background-size: cover;
-webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);

&::after {
  content: "";
  background: ${props => props.theme.indigo};
  opacity: 0.3;
  height: 100vh;
  width: 100vw;
  position: absolute;
}
`


class PageIntro extends Component {

  constructor() {
      super()
  }

  render() {
    return ([
      <Desktop><React.Fragment>
        <TempHeader {...this.props}>
          <TempTitle>{this.props.title}</TempTitle>
          <TitleBlurb>
              {this.props.description}
          </TitleBlurb>
        </TempHeader>
      </React.Fragment></Desktop>,
      <Mobile>
        <React.Fragment>
          <MobileHeader {...this.props}>
            <MobileTitle>
              {this.props.title}
            </MobileTitle>
          </MobileHeader>

        </React.Fragment>
      </Mobile>
      ]
    );
  }
}

export default PageIntro;
