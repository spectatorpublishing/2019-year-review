import React, {Component} from 'react';
import styled from 'styled-components'
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

import Article from '../components/ArticleBox'

import white_arrow from '../assets/right_arrow.svg'
import filledCircle from '../assets/filledCircleWhite.svg'
import emptyCircle from '../assets/emptyCircleWhite.svg'


const n = 2

const mobileSize = 992

const ImageContainer = styled.div`
	width: 80vw;	
	overflow: hidden;
	display: flex;
	position: relative;
	left: 9vw;
`
const MobileArticleContainer = styled.div`
	width: 80vw;
`

const BoxPanel = styled.div` 
	display: flex;
	width: 80vw;
	transform: translate(${props => props.translateValue}vw);
    transition: transform ease-out 0.45s;
`
const Arrow = styled.img`
	cursor: pointer;
	width: 2vw;
  	z-index: 1;
  	transform: ${props => !props.left ? "":"rotate(180deg)"};
  	position: relative;
	top: 23vh;
	left: ${props => props.left ? "4vw" : "90vw"};
	opacity: ${({disabled}) => disabled ? "0" : "0.5"};
	transition: opacity ease .3s;
	
	& path {
	  stroke: ${props => props.theme.transparentWhite};
	}

	&:hover path {
	  stroke: ${props => props.theme.white};
	}

    @media(min-width: 992px){
		top: 15vh;
		&:hover {
			${({disabled}) => !disabled && `opacity: 1;`}
			transition: opacity ease .3s;
		}
    }
`

const CircleContainer = styled.div`
	width: 100vw;
	height: 5vh;	
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	top: 30vh;
	@media (max-width: 991px){
        top: 45vh;
    }
`
const Circle = styled.img`
  cursor: pointer;
	margin: 10px;
	opacity: 0.5;
	
	&:hover {
		${({disabled}) => !disabled && `opacity: 1;`}
		transition: opacity ease .3s;
	}
`

const DesktopContainer = styled.div`
	padding-bottom: 20px;
`

class ImageBoxSlider extends Component {

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
		if (current_index === Math.floor(this.props.data.length/n)-1){
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
		if (current_index === Math.ceil(this.props.data.length/n)-1){
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
		if (i === Math.floor(this.props.data.length/n)){
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
		let boxes = this.props.data.map ( (data,i) => 
			<Article title= {data.title} author={data.author} 
				onClick = {() => this.props.handleClick(i)} url={data.link}
				img_src={data.img} key = {i}/>)

		let leftArrow = <Arrow src={white_arrow} disabled={this.state.leftDisabled} onClick={this.onLeft} left/> 
		let rightArrow = <Arrow src={white_arrow} disabled={this.state.rightDisabled} onClick={this.onRight}/> 

		if (this.state.isMobile){
			boxes = this.props.data.map ( (data,i) => {
				if (i % 2 === 1)
					return null
				let article2 = null
				if (i !== this.props.data.length-1){
					let data2 = this.props.data[i+1]
					article2 = <Article title= {data2.title} author={data2.author} url = {data2.link}
							img_src={data2.img} />
				}
				return (
					<MobileArticleContainer key = {i}>
						<Article title= {data.title} author={data.author} url = {data.link}
							img_src={data.img} />
						{article2}
					</MobileArticleContainer>
				)
			})
		}

		let circles = this.props.data.map ( (_, i) => {
				if (i===this.state.circle_index)
					return <Circle src={filledCircle} disabled={true} onClick={() => this.onCircle(i)} key={i}/>
				else if (i<this.props.data.length/n)
					return <Circle src={emptyCircle} onClick={() => this.onCircle(i)} key={i}/>
				return null
			}
		)

		return (
		[
	      <MobileAndTablet>
	        <div style={{position: "relative"}}>
	        	{leftArrow}
				{rightArrow}
				<ImageContainer>
					<BoxPanel translateValue = {this.state.box_index*(-80)}>
						{boxes}		 
					</BoxPanel>
				</ImageContainer>
				<CircleContainer> {circles} </CircleContainer> 
			</div>
	      </MobileAndTablet>, 
	      
	      <Desktop>
			<DesktopContainer>
				{leftArrow}
				{rightArrow}
				<ImageContainer>
					<BoxPanel translateValue = {this.state.box_index*(-80)}>
						{boxes}		 
					</BoxPanel>
				</ImageContainer>
				<CircleContainer> {circles} </CircleContainer> 	
			</DesktopContainer>
		  </Desktop>
        ]
		)
	}
}

export default ImageBoxSlider
