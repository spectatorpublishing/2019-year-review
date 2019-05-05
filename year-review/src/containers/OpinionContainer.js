import React, { Component } from 'react';
import styled from 'styled-components';

import ExpandingColumns from '../components/ExpandingColumns';
import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import PageIntro from '../components/PageIntro'
import EditorLetter from '../components/EditorLetter'
import Columnists from '../components/Columnists';

import { opinion_sections } from '../util/OpinionData'
import { opinion_data } from '../util/TestData'

const description = "Most undergraduates will only experience a small sliver of Columbia's history during their time here; current students just lived through a year for the record books. As the University marked the fiftieth anniversary of the 1968 protests that redined its identity, campus was roiled by a new series of student protests."
const img_src = "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80"

export default class OpinionContainer extends Component {
  render() {
    return (
      <React.Fragment>
          <PageIntro title="OPINION" description={description} img_src={img_src}/>
          <EditorLetter/>

          <ExpandingColumns data = {opinion_sections}/>
          <ScrollingNavBar menuItems={opinion_sections}>
            <div style={{background: "url(https://images.unsplash.com/photo-1466129646777-494b376a670c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)", width: "100vw", height: "100vh",}}>
              <h3 style={{color: "white"}}>Op-Eds</h3>
            </div>
            <div style={{background: "url(https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)", width: "100vw", height: "100vh",}}>
              <h3 style={{color: "white"}}>Love Actualized</h3>
            </div>
            <div>
              <h3 style={{color: "white"}}>Columnists: Fall 2018</h3>
              <Columnists data={opinion_data} />)
              <h3 style={{color: "white"}}>Columnists: Spring 2019</h3>
              <Columnists data={opinion_data} />)
            </div>
            <div style={{background: "url(https://images.unsplash.com/photo-1479030160180-b1860951d696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)", width: "100vw", height: "100vh",}}>
              <h3 style={{color: "white"}}>Discourse &amp; Debate</h3>
            </div>
          </ScrollingNavBar>
      </React.Fragment>
    );
  }
}
