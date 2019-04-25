import React, { Component, Children } from "react";
import { withRouter } from 'react-router-dom';
import NavBar from './NavBar';

const ScrollerTarget = React.forwardRef((props, ref) => (
  <div ref={ref} id={props.id}>
    {props.children}
  </div>
));

class ScrollingNav extends Component {
  constructor(props) {
    super(props);

    this.scrollRef = React.createRef();
    this.menuItemRefs = {};
    props.menuItems.forEach((item) => {
      this.menuItemRefs[item.name] = React.createRef();
    });

    this.state = {
      fixed: false,
      activeSection: null,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.getChildrenScrollerTargets = this.getChildrenScrollerTargets.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    /* NAVBAR POSITIONING */

    // Target scrollTop changes depending on scroll position
    let targetTop = e.target.scrollingElement.scrollTop;
    // Ref offsetTop is static location of element on page
    let refTop = this.scrollRef.current.offsetTop;
    
    let shouldBeFixed = false;
    // Once we pass the ref's Y location, fix the navbar to top
    if (targetTop > refTop) {
      shouldBeFixed = true;
    }

    if (this.state.fixed !== shouldBeFixed) {
      this.setState({ fixed: !this.state.fixed });
    }

    /* NAVBAR ACTIVE */
    let nextActiveSection;
    for (let i = 0; i < this.props.menuItems.length; i++) {
      let section = this.props.menuItems[i];
      let currentRef = this.menuItemRefs[section.name];
      
      if (targetTop < currentRef.current.offsetTop - 150) {
        break;
      }
      nextActiveSection = section.link.slice(1);
    }

    let currentActiveSection = this.props.history.location.hash.slice(1);
    if (nextActiveSection && nextActiveSection !== currentActiveSection) {
      this.props.history.push("#" + nextActiveSection);
    }
  }

  getChildrenScrollerTargets() {
    // This component only works if # of children == # of menu items !!!
    return Children.map(this.props.children, (child, i) => {
      let currentRef = this.menuItemRefs[this.props.menuItems[i].name];
      return (
        <ScrollerTarget key={i} ref={currentRef} id={this.props.menuItems[i].link.slice(1)}>
          {child}
        </ScrollerTarget>
      );
    });
  }

  render() {
    return (
      <ScrollerTarget ref={this.scrollRef}>
        <NavBar fixed={this.state.fixed} menuItems={this.props.menuItems} isScrolling />
        {this.getChildrenScrollerTargets()}
      </ScrollerTarget>
    );
  }
}

export default withRouter(ScrollingNav);