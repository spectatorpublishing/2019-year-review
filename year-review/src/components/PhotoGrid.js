import React from "react";
import styled from "styled-components";
import { MobileAndTablet, Desktop } from 'react-responsive-simple';
import LazyLoad from 'react-lazy-load';


const Flipcard = styled.div`
  @media only screen and (max-width: 991px){
    width: 50vw;
    height: 50vw;

  }

  @media only screen and (min-width:992px){
    width: 25vw;
    height: 25vw; 
    .inner {${({flip}) => flip && `
      perspective: 1000px;
      -webkit-perspective: 1000px;
      transform-style: preserve-3d; 
      -webkit-transform-style: preserve-3d;
      transition: transform 0.5s;
      `}
    }

    :hover .inner{
      ${({flip}) => flip && `
      -webkit-transform: rotateY(180deg);
      transform: rotateY(180deg);
      `}
  	}
  }

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
  background-position: center;
  transition: background-image .3s ease;
  background-size: cover;
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
`;
const Card = styled(Front)`
  &:hover {
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${({front_image}) => front_image});
    background-size: cover;
    background-position: center;
    transition: background-image .3s ease;
  }
`
const Back = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${({back_image}) => back_image});
  background-size: cover;
  background-position: center;
  color: ${props => props.theme.white};
  position: absolute;
  backface-visibility: hidden;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  height: 100%;
  width: 100%;
`;

const FrontAuthor = styled.h4`
  text-align: left;
  vertical-align: middle;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 10vh;
  font-size: 1.7em;
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
  opacity: ${({shadowed}) => shadowed && "0.4"};

  @media only screen and (max-width: 991px){
    font-size: 1.2rem;
    margin-left: 8px;
    margin-right: 8px;
  }
`
const CardAuthor = styled(FrontAuthor)`
  opacity: 0;
  transition: opacity .3s ease;

  ${Card}:hover & {
    opacity: 1;
    transition: opacity .3s ease;
  }
`
const Title = styled.h4`
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  line-height: 1em;
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
`;

const Header = styled.div`
  text-align: left;
  font-size: small;
  margin-right: 20px;
  margin-top: 20px;
  display: flex;
  color: ${props => props.theme.white};
`;

const Body = styled.p`
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${props => props.theme.white};
`;

const Section = styled.h5`
  font-size: 1em;
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
`;

const Author = styled.h5`
  font-size: 1em;
  margin-left: 20px;
  padding-right: 5px;
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
`;

const Grid = styled.div`
    display: grid;
    @media only screen and (min-width:992px){
        grid-template-columns: 25% 25% 25% 25%;
        grid-auto-rows: 25vw; 
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    @media only screen and (max-width: 991px){
        grid-template-columns: calc(50% - 3px) calc(50% - 3px);
        grid-auto-rows: calc(50vw - 3px); 
        grid-column-gap: 3px;
        grid-row-gap: 3px;
    }

`;

const GridRow = styled.div`
  ${({expanded}) => !expanded && `height: 50vw;`}
`

const MobileBox = styled.div`
  background-image: ${({shadowed}) => shadowed && "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )," } url(${({front_image}) => front_image});
  background-size: cover;
  height: 100%;
  width: 100%;
  overflow: hidden;
`
const MobileBack = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${({back_image}) => back_image});
  background-size: cover;
  color: ${props => props.theme.white};
  height:  ${({shown}) => shown ? 100:0}vw;
  width: ${({shown}) => shown ? 100:0}vw;
  opacity: ${({shown}) => shown ? "100" : "0"};
  transition: height .3s ease;
  -webkit-transition: height .3s ease;
  overflow: hidden; 
`
const ArticleLink = styled.a`
  text-decoration: none;
  color: white;

  @media only screen and (min-width:992px){
    margin-left: 50%;
    margin-right: auto;
  }

  @media only screen and (max-width: 991px){
    text-align: right;
    margin-left: 85%;
  }

`

const ImageBox = (props) => {
  return (
      <Flipcard flip={props.flip}>
        <LazyLoad debounce = {false} throttle = {250}><Inner className="inner">
          {props.flip ? (
          <React.Fragment>
            <Front {...props.data}>
              <FrontAuthor>{props.data.author}</FrontAuthor>
            </Front>
            <Back {...props.data}>
                <Header>
                  <Author>{props.data.author}</Author>
                </Header>
                <Title>{props.data.section}</Title> 
                <Body>{props.data.title}</Body> 
                <ArticleLink href={props.data.url} target="_blank">Read More</ArticleLink>
            </Back>  
          </React.Fragment>
          ) : (
            <Card {...props.data} onClick={() => props.handleClick(props.index)}>
              <CardAuthor>By {props.data.author}</CardAuthor>
            </Card>
          )}
        </Inner></LazyLoad>
      </Flipcard>
  )
}

export default class PhotoGrid extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  state = {
    toggle_control: {},
    selected: false
  }

  componentDidMount(){
    let i = 0
    let control_orig = {}
    for (; i<this.props.data.length;i++)
      control_orig[i] = false
    this.setState({toggle_control: control_orig})
  }

  handleClick = (index) =>{
    let selected = false
    let new_control = {}
    let i = 0
    for (; i<this.props.data.length;i++)
      new_control[i] = false
    if (!this.state.toggle_control[index]){
      new_control[index] = true
      selected = true
    }
    this.setState({toggle_control: new_control, selected: selected})
  }

  render(){
    const mobile = this.props.data.map((data, i) =>{
      if (i % 2 === 1)
          return null
      
      let shadow = this.state.selected && !this.state.toggle_control[i]

      let handleClick = this.props.flip ? () => this.handleClick(i) : () => this.props.openLightbox(i);
      let front1 = 
      <MobileBox {...data} shadowed={shadow} onClick={handleClick}>
        <FrontAuthor shadowed={shadow}>{data.author}</FrontAuthor>
      </MobileBox>

      shadow = this.state.selected && !this.state.toggle_control[i+1]

      handleClick = this.props.flip ? ()=>this.handleClick(i+1) : () => this.props.openLightbox(i+1);
      let front2 = i===this.props.data.length-1 ? null : 
      <MobileBox {...this.props.data[i+1]} shadowed={shadow} onClick={handleClick}>
        <FrontAuthor shadowed={shadow}>{this.props.data[i+1].author}</FrontAuthor>
      </MobileBox>

      let grid = <Grid>{front1}{front2}</Grid>
      
      if (!this.props.flip) {
        return <GridRow key={i}>{grid}</GridRow>
      }

      let back1 = 
          <MobileBack {...data} shown={this.state.toggle_control[i]}>
            <Header>
              <Author>{data.author}</Author>
            </Header>
            <Title>{data.section}</Title> 
            <Body>{data.title}</Body> 
            <ArticleLink href={data.url} target="_blank">Read More</ArticleLink>
          </MobileBack>

      let back2 = i === this.props.data.length-1 ? null : 
          <MobileBack {...this.props.data[i+1]} shown={this.state.toggle_control[i+1]}>
            <Header>
              <Author>{this.props.data[i+1].author}</Author>
            </Header>
            <Title>{this.props.data[i+1].section}</Title> 
            <Body>{this.props.data[i+1].title}</Body> 
            <ArticleLink href={this.props.data[i+1].url} target="_blank">Read More</ArticleLink>
          </MobileBack>

      return (<GridRow expanded={this.state.selected} key={i}>{grid}{back1}{back2}</GridRow> )
    })

    const desktop = this.props.data.map((data, i) => 
      <ImageBox flip={this.props.flip} key={i} index={i} data={data} handleClick={!this.props.flip && this.props.openLightbox}/>
    );

    return (
      <React.Fragment>
        <MobileAndTablet>
          <div>
            {mobile}
          </div>
        </MobileAndTablet>
        <Desktop>
          <Grid>{desktop}</Grid>
        </Desktop>
      </React.Fragment>
    )
  }
} 
