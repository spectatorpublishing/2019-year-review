import React from 'react';
import styled from 'styled-components';
import { Mobile, Tablet, Desktop } from 'react-responsive-simple';

const Background = styled.div`
  width: 100%;
  background-color: ${props => props.theme.indigo};
  color: ${props => props.theme.white};
  padding-top: 5vh;
`;

const Names = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media only screen and (max-width: 767px){
    margin: 0 5vw;
`
const Heading = styled.h3`
  text-align: center;
  padding: 1rem 0;
  @media only screen and (max-width: 767px){
    font-size: 1.8em;
 }
`
const Column = styled.div`
  padding-top: 1rem;
  padding-left: 1em;
  @media only screen and (max-width: 767px){
    padding-left: 0.5rem;
 }
`;
const RoleHeading = styled.h4`
  margin: 0.8rem 0;
  @media only screen and (max-width: 767px){
    font-size: 1em;
 }
`
const Role = styled.div`
 color: ${props => props.theme.transparentWhite};
 padding-left: 0.5rem;
 @media only screen and (max-width: 767px){
    padding-left: 0;
 }
`;
const Line = styled.h5`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;
  @media only screen and (max-width: 767px){
    //padding: 0px 10vw 15px 10vw;
    font-size: 1em;
    //margin: 0;
 }
`;

const footerHome = (props) =>{
  return (
    <div className="FooterHome">
        <Background>

        <Heading>Design and Development Credits</Heading>

        <React.Fragment>

        <Desktop>
          <Names>
          <Column>
            <RoleHeading>Designed By</RoleHeading>
            <Line>Shannon Hui, <Role>Product Manager</Role></Line> 
            <Line>David Wang, <Role>Product Designer</Role></Line> 
            <Line>Kevin Li, <Role>Head of Product</Role></Line> 
          </Column>

          <Column>
            <RoleHeading>Developed By</RoleHeading>
            <Line>Yulong Li, <Role>Engineering Manager</Role></Line> 
            <Line>Amina Assal, <Role>Developer</Role></Line> 
            <Line>Julie Song, <Role>Developer</Role></Line> 
            <Line>Stacy Tao, <Role>Developer</Role></Line> 
          </Column>
          <Column>
            <RoleHeading>&nbsp;</RoleHeading>
            <Line>Wendy Wang, <Role>Developer</Role></Line> 
            <Line>Yunsu Kim, <Role>Developer</Role></Line> 
            <Line>Daniel Kim, <Role>Developer</Role></Line> 
            <Line>Arsalaan Ansari, <Role>Head of Engineering</Role></Line> 
          </Column>
        </Names>
        </Desktop>

        <Tablet>
          <Names>
          <Column>
            <RoleHeading>Designed By</RoleHeading>
            <Line>Shannon Hui, <Role>Product Manager</Role></Line> 
            <Line>David Wang, <Role>Product Designer</Role></Line> 
            <Line>Kevin Li, <Role>Head of Product</Role></Line> 
          </Column>

          <Column>
            <RoleHeading>Developed By</RoleHeading>
            <Line>Yulong Li, <Role>Engineering Manager</Role></Line> 
            <Line>Amina Assal, <Role>Developer</Role></Line> 
            <Line>Julie Song, <Role>Developer</Role></Line> 
            <Line>Stacy Tao, <Role>Developer</Role></Line> 
          </Column>
          <Column>
            <RoleHeading>&nbsp;</RoleHeading>
            <Line>Wendy Wang, <Role>Developer</Role></Line> 
            <Line>Yunsu Kim, <Role>Developer</Role></Line> 
            <Line>Daniel Kim, <Role>Developer</Role></Line> 
            <Line>Arsalaan Ansari, <Role>Head of Engineering</Role></Line> 
          </Column>
        </Names>
        </Tablet>


        <Mobile>
          <Names>
          <Column>
            <RoleHeading>Designed By</RoleHeading>
            <Line>Shannon Hui,</Line> 
            <Role>Product Manager</Role>
            <Line>David Wang,</Line> 
            <Role>Product Designer</Role>
            <Line>Kevin Li,</Line> 
            <Role>Head of Product</Role>
          </Column>

          <Column>
            <RoleHeading>Developed By</RoleHeading>
            <Line>Yulong Li,</Line> 
            <Role>Engineering Manager</Role>
            <Line>Amina Assal,</Line> 
            <Role>Developer</Role>
            <Line>Julie Song,</Line> 
            <Role>Developer</Role>
            <Line>Stacy Tao,</Line> 
            <Role>Developer</Role>
          </Column>
          <Column>
            <RoleHeading>&nbsp;</RoleHeading>
            <Line>Wendy Wang,</Line> 
            <Role>Developer</Role>
            <Line>Yunsu Kim,</Line> 
            <Role>Developer</Role>
            <Line>Daniel Kim,</Line> 
            <Role>Developer</Role>
            <Line>Arsalaan Ansari,</Line> 
            <Role>Head of Engineering</Role>
          </Column>
        </Names>
        </Mobile>

      </React.Fragment>

        

        </Background>
         
    </div>
  );
}

export default footerHome;
