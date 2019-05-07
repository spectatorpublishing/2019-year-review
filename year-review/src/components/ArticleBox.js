import React from "react";
import styled from "styled-components";
import { MobileAndTablet, Desktop } from "react-responsive-simple";
import LazyLoad from "react-lazy-load";

const Article = styled.div`
  margin: 2.5vh 2.5vw;
`;
const Title = styled.h5`
  font-weight: bold;
  font-size: 0.9rem;
  padding: 5px;
  @media (max-width: 991px) {
    font-size: 0.8rem;
  }
`;

const Container = styled.a`
  background-color: white;
  border-radius: 5px;
  display: flex;
  width: 35vw;
  height: 20vh;
  text-decoration: none;
  color: black;
  box-shadow: ${props => props.theme.shadow};

  @media (max-width: 991px) {
    width: 75vw;
    height: 18vh;
  }
`;

const Image = styled.div`
  background-image: url(${({ img_src }) => img_src});
  background-position: center;
  background-size: cover;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  margin-right: 0.5rem;
  width: 15vw;
  height: 100%;
  object-fit: contain;
  align-self: flex-start;

  @media (max-width: 991px) {
    margin-right: 0.8rem;
    width: 35vw;
    height: 100%;
  }
`;
const Text = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 100%;
  overflow: hidden;

  @media (max-width: 991px) {
    width: 40vw;
  }
`;

const Desc = styled.div`
  font-size: 0.8rem;
  padding: 5px;
  overflow: hidden;
  @media (max-width: 991px) {
    padding: 1px;
  }
  text-overflow: ellipsis;
`;

const articlebox = props => {
  if (props.title.length >= 105) {
    var mobileTitle = props.title.substring(0, 100) + "...";
  } else {
    var mobileTitle = props.title;
  }
  return (
    <React.Fragment>
      <Desktop>
        <Article>
          <Container href={props.url} target="_blank">
            <LazyLoad offsetVertical={500} debounce={false} throttle={250}>
              <Image img_src={props.img_src} />
            </LazyLoad>
            <Text>
              <Title>{props.title}</Title>
              <Desc>{props.author}</Desc>
            </Text>
          </Container>
        </Article>
      </Desktop>

      <MobileAndTablet>
        <Article>
          <Container onClick={() => window.open(props.url, "_blank")}>
            <Image img_src={props.img_src} />
            <Text>
              <Title>{mobileTitle}</Title>
              <Desc>{props.author}</Desc>
            </Text>
          </Container>
        </Article>
      </MobileAndTablet>
    </React.Fragment>
  );
};

export default articlebox;
