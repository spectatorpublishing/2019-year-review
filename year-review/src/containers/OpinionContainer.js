import React, { Component } from 'react';
import styled from 'styled-components';

import ExpandingColumns from '../components/ExpandingColumns';
import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import GenericPanelLayout from './GenericPanelLayout';
import PageIntro from '../components/PageIntro'
import EditorLetter from '../components/EditorLetter'
import PhotoGrid from '../components/PhotoGrid';
import { opinion_sections } from '../util/OpinionData'

const letter = "There’s an essay by Joan Didion called “Goodbye to All That” that discusses the transient nature of New York City and her own fleeting place within it. In many ways, Columbia deals with its own unique sense of transience—students coming and going as four years quickly pass by. There is a paradox that exists on this campus that becomes clear when the flowers start blooming and everyone floods to Low Steps after the slightest glimpse of sun.\
\n\nOur campus begins to come alive at the same moment that we’re meant to leave it.\
\n\nBecause of this, it’s hard not to reminisce on all that’s happened throughout the whirlwind of the past nine months—what’s been done, seen, and said by those around you. Over the past year you’ve talked about your love lives, your careers, and, of course, your Juul addictions. \
\n\nWithin the opinion section, students, faculty, professors, and administrators have responded to and written about how Columbia deals with sexual assault, the virulent acts of racism our campus has grappled with, the college admissions scandal, and so much more. Our job is not to report what’s going on, but to give members of this community a chance and a platform to reflect on it. We hope that the following pages, in many ways, help do just that. \
\n\nSo now, it’s time to say goodbye to all that—for summer at least. "


const LogoWrapper = styled.div`
  position: sticky;
  top: 120px;
  height: 0;
  z-index: 10;

`

const Logo = styled.h6`
  background-color: #494949;
  opacity: 0.8;
  display: inline-block;
  margin-left: 30px;
  padding: 10px;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
`

export default class OpinionContainer extends Component {

  render() {
    return (
      <React.Fragment>
          <PageIntro title="OPINION" description={this.props.data.blurb} img_src={this.props.data.img}/>
          <EditorLetter letter={letter} author="Kaili Meier and Erin Neil" role="Editorial Page Editors"/>

          <ExpandingColumns data = {opinion_sections}/>
          <ScrollingNavBar menuItems={opinion_sections}>
            <div>
              <GenericPanelLayout data={this.props.data.items[0]} />
            </div>
            <div>
              <GenericPanelLayout data={this.props.data.items[1]} />
            </div>
            <div>
              <GenericPanelLayout data={this.props.data.items[2]} />
            </div>
            <div>
              <h3 style={{"height":"5vh"}}></h3>
              <h3 style={{color: "white", Left: "1vw", padding: "1vh", "backgroundColor": "black"}}>Column</h3>
              <PhotoGrid data={this.props.data.items[3].items} flip />
            </div>
          </ScrollingNavBar>
      </React.Fragment>
    );
  }
}
