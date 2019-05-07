import React, {Component} from 'react';
import styled from 'styled-components'
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

import SpectrumSlide from '../components/SpectrumSlide'
import SpectrumSlider from '../components/SpectrumSlider'

import white_arrow from '../assets/right_arrow.svg'
import black_arrow from '../assets/left_arrow.svg'
import filledCircle from '../assets/filledCircleWhite.svg'
import emptyCircle from '../assets/emptyCircleWhite.svg'

const mobileSize = 992

const ImageContainer = styled.div`
	width: 100vw;
	height: calc(100vh - 48px);
	display: flex;
	overflow: hidden;
	position: relative;
`
const BoxPanel = styled.div`
	display: flex;
	width: 100vw;
	transform: translate(${props => props.translateValue}vw);
    transition: transform ease-out 0.45s;
`

const ArrowContainer = styled.div`
	position: absolute;
	top: 0;
	left: ${props => props.left ? "0" : "90vw"};
	width: 10vw;
	height: calc(100vh - 48px);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
`

const Arrow = styled.img`
	width: 5vw;
  	transform: ${props => props.left ? "rotate(180deg)" : ""};
`

const CircleContainer = styled.div`
	width: 100vw;	
	height: 5vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: absolute;
	top: 85vh;
`

const Circle = styled.img`
	margin: 10px;
`

const SpectrumWrapper = styled.div`
	width: 100vw;
  	height: 100%;
`;

const Header = styled.div`
	padding: 5vh 10vw;
	background: ${props => props.theme.white};
`
const Title = styled.h3`
`
const Blurb = styled.p`
	padding-top: 1rem;
	line-height: 150%;
`

class SpectrumLayout extends Component {

	constructor() {
	    super()
	    this.onLeft = this.onLeft.bind(this)
	    this.onRight = this.onRight.bind(this)
	    this.onCircle = this.onCircle.bind(this)
	}

	state = {
		box_index: 0,
		circle_index: 0,
		leftDisabled: true,
		rightDisabled: false,
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

	onLeft(){
		if (this.state.leftDisabled)
			return
		let current_index = this.state.box_index - 1
		let current_circle = this.state.circle_index -1 
		this.setState({
			box_index: current_index,
			circle_index: current_circle
		})

		if (current_index === 0){
			this.setState({
				leftDisabled: true
			})
		}
		if (current_index === this.props.data.articles-2){
			this.setState({
				rightDisabled: false
			})
		}
		
	}

	onRight(){
		if (this.state.rightDisabled)
			return
		let current_index = this.state.box_index + 1
		let current_circle = this.state.circle_index + 1 
		this.setState({
			box_index: current_index,
			circle_index: current_circle
		})
		if (current_index === this.props.data.articles.length-1){
			this.setState({
				rightDisabled: true
			})
		}
		if (current_index === 1){
			this.setState({
				leftDisabled: false
			})
		}
	}

	onCircle = (i) => {
		let leftDisabled = false
		let rightDisabled = false
		if (i === this.props.data.articles.length-1){
		 	rightDisabled = true
		}
		else if (i === 0)
			leftDisabled = true

		this.setState({
			box_index: i,
			circle_index: i,
			leftDisabled: leftDisabled,
			rightDisabled: rightDisabled
		})
	}

	render(){

		// mobile components
		let boxes = this.props.data.articles.map ( (data,i) => 
			<SpectrumSlide title= {data.title} url={data.link} author={data.author} img_src={data.img} key = {i}/>
		)
		let circles = this.props.data.articles.map ( (_, i) => {
				if (i===this.state.circle_index)
					return <Circle src = {filledCircle} onClick={ () => this.onCircle(i)} key={i}/>
				else 
					return <Circle src = {emptyCircle} onClick={() => this.onCircle(i)} key={i}/>
			}
		)
		let leftArrow = this.state.leftDisabled ? null: <ArrowContainer onClick={this.onLeft} left><Arrow src={white_arrow} left/></ArrowContainer>
		let rightArrow = this.state.rightDisabled ? null: <ArrowContainer onClick={this.onRight}><Arrow src={white_arrow}/></ArrowContainer>
		// mobile components-finished

		return (
	      [
	      <MobileAndTablet>
	        <ImageContainer>
				{leftArrow}
				{rightArrow}
				<BoxPanel translateValue = {this.state.box_index*(-100)}>
					{boxes}		
				</BoxPanel>
				<CircleContainer> {circles} </CircleContainer> 
			</ImageContainer>
	      </MobileAndTablet>,
	      
	      <Desktop>
				<SpectrumWrapper>
				<Header>
					<Title>{this.props.data.name}</Title>
					<Blurb>{this.props.data.blurb}</Blurb>
				</Header>
				<SpectrumSlider data = {this.props.data.articles}/>	
			</SpectrumWrapper>
	      </Desktop>
	      ]
	    )
	}
}

export default SpectrumLayout
