import React, { Component } from 'react';

import SportsSlideShow from './SportsSlideShow';
import PageIntro from '../components/PageIntro'

const description = "Most undergraduates will only experience a small sliver of Columbia's history during their time here; current students just lived through a year for the record books. As the University marked the fiftieth anniversary of the 1968 protests that redined its identity, campus was roiled by a new series of student protests."
const img_src = "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80"

class SportsContainer extends Component {

  render() {
    return (
      <React.Fragment>
          <PageIntro title="SPORTS" description={description} img_src={img_src}/>
          <SportsSlideShow data = {this.props.SportsData} />
      </React.Fragment>
      
    );
  }
}

export default SportsContainer;
