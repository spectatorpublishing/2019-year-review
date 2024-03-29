import React, { Component } from 'react';

import PageIntro from '../components/PageIntro';
import PhotoGrid from '../components/PhotoGrid.js';
import Lightbox from '../components/Lightbox/Lightbox'
import GenericPanelLayout from './GenericPanelLayout';

class PhotoContainer extends Component {
	constructor(props){
		super(props)
		this.state={
			lightboxActive: false,
			lightboxIndex: 0
		}
		this.closeLightbox = this.closeLightbox.bind(this)
		this.openLightbox = this.openLightbox.bind(this)
	}

	closeLightbox(){
		this.setState({"lightboxActive": false})
	}
	openLightbox(i){
		this.setState({"lightboxActive": true, "lightboxIndex": i})
	}

	render() {
    return (
      <React.Fragment>
        <PageIntro title="PHOTO" description={this.props.data.blurb} img_src={this.props.data.img}/>
				<GenericPanelLayout data = {this.props.data.items.Photo_Essays} />)}
        <PhotoGrid data={this.props.data.items.Photos} openLightbox={this.openLightbox}/>
				{this.state.lightboxActive && <Lightbox
					index={this.state.lightboxIndex} 
					media={this.props.data.items.Photos} 
					authorLabel="photographer"
					onClose={this.closeLightbox}>
				</Lightbox>
				}
      </React.Fragment>
    );
  }
}

export default PhotoContainer;
