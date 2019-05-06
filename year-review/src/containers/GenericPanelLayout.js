import React, { Component } from "react";
import styled from "styled-components";
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

import ImageBoxSlider from './ImageBoxSlider';
import scrollArrow from '../assets/hamburger.svg'

const hamburgUrl = "https://s3.amazonaws.com/year-in-review-assets/hamburger.svg"

const mobileSize = 992

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  postion: relative;
  
`

const TopContainer = styled.div`
  width: 100vw;
  height: ${props => props.isMobile? '40vh' : '60vh'};
  float: top;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${({img_src}) => img_src});
  background-position: center;
`

const BottomContainer = styled.div`
	width: 100vw;
	height: ${props => props.isMobile? '70vh' : '40vh'};
	float: bottom;
  background-color: ${props => props.theme.indigo};
`

const Head = styled.h3`
	textAlign: left;
	padding: 12vh 2vw 4vh 8vw;
  color: white;
  width: 60vw;
`
const MobileHead = styled.h3`
  textAlign: left;
  padding: 4vh 0vw 2vh 8vw;
  color: white;
  width: 80vw;
  text-size: 10px;
  font-size: 1.5rem;
`

const Subtitle = styled.p`
  textAlign: left;
  padding: 0vh 0vw 4vh 8vw;
  color: white;
  width: 60vw;
` 

const MobileSubtitle = styled.p`
  textAlign: left;
  padding: 0vh 0vw 4vh 8vw;
  color: white;
  width: 80vw;
` 

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.black};
`

export default class GenericPanelLayout extends Component {
  constructor(props) {
    super(props);
  }

  state = { 
      isMobile: window.innerWidth <= mobileSize,
  }

  componentWillMount() {
      window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
      this.setState({ isMobile: window.innerWidth <= mobileSize });
  };

  render() {
    return (
      <React.Fragment>
      <MobileAndTablet>
        <TopContainer img_src = {this.props.data.img} isMobile = {this.state.isMobile} />

        <BottomContainer isMobile = {this.state.isMobile}>
          <MobileHead>{this.props.data.name}</MobileHead>
          <ImageBoxSlider data = {this.props.data.articles}/>
        </BottomContainer>
      </MobileAndTablet>
      
      <Desktop>
        <Container>
          <TopContainer img_src = {this.props.data.img}>
              <Head>{this.props.data.name}</Head>
              <Subtitle>{this.props.data.blurb}</Subtitle>
          </TopContainer>
          <BottomContainer>
              <ImageBoxSlider data = {this.props.data.articles}/>
          </BottomContainer>
        </Container>
      </Desktop>
      </React.Fragment>
    );
  }
}
