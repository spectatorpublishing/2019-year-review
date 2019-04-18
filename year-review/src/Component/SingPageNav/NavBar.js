import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
	background: black;
	padding: 1em;
	text-align: center;
	top: 0px;
	left: 0px;
	width: 100%;
	display: block;
	position: fixed;
`;

const Nav = styled.div`
	font-size: 0.8em;
	color: white;
	margin-right: 50px;
	display: inline-flex;

	:hover {
		color: skyblue;
	}
`;

const Body = styled.section`
	color: black;
	margin-top: 100px;
`;

 

class Navbar extends Component {
    render() {
        return (
        	<div>
            <Wrapper>
			  	<Nav> <a> FREEDOM OF SPEECH </a></Nav>
			  	<Nav> GRADUATE STUDENT UNION </Nav>
			  	<Nav> SEXUAL MISCONDUCT </Nav>
			  	<Nav> FACULTY-RELATED ISSUES </Nav>
  			</Wrapper>
  				
  			<Body name = "1">
  				Nineteen alleged hate crimes and bias-related incidents have been reported 
	  			to Public Safety on Columbia’s Morningside campus since 2015, 
	  			according to a Spectator review of crime logs. 
	  				A majority of those incidents did not trigger immediate University-wide 
	  				communications sent directly to students. Under a federal law known as 
	  				the Clery Act, the University is not mandated to notify students of 
	  				all bias-related incidents documented in its crime logs; Public Safety is 
	  				only required to inform the student body of Clery reportable crimes, 
	  				including hate crimes, that pose an “ongoing security threat” to students. 
	  				Legally, this excludes all incidents categorized as “harassment” under 

	  			Nineteen alleged hate crimes and bias-related incidents have been reported 
	  			to Public Safety on Columbia’s Morningside campus since 2015, 
	  			according to a Spectator review of crime logs. 
	  				A majority of those incidents did not trigger immediate University-wide 
	  				communications sent directly to students. Under a federal law known as 
	  				the Clery Act, the University is not mandated to notify students of 
	  				all bias-related incidents documented in its crime logs; Public Safety is 
	  				only required to inform the student body of Clery reportable crimes, 
	  				including hate crimes, that pose an “ongoing security threat” to students. 
	  				Legally, this excludes all incidents categorized as “harassment” under

	  			Nineteen alleged hate crimes and bias-related incidents have been reported 
	  			to Public Safety on Columbia’s Morningside campus since 2015, 
	  			according to a Spectator review of crime logs. 
	  				A majority of those incidents did not trigger immediate University-wide 
	  				communications sent directly to students. Under a federal law known as 
	  				the Clery Act, the University is not mandated to notify students of 
	  				all bias-related incidents documented in its crime logs; Public Safety is 
	  				only required to inform the student body of Clery reportable crimes, 
	  				including hate crimes, that pose an “ongoing security threat” to students. 
	  				Legally, this excludes all incidents categorized as “harassment” under 
  			</Body>

  			<Body name = "two">
  			Nineteen alleged hate crimes and bias-related incidents have been reported 
	  			to Public Safety on Columbia’s Morningside campus since 2015, 
	  			according to a Spectator review of crime logs. 
	  				A majority of those incidents did not trigger immediate University-wide 
	  				communications sent directly to students. Under a federal law known as 
	  				the Clery Act, the University is not mandated to notify students of 
	  				all bias-related incidents documented in its crime logs; Public Safety is 
	  				only required to inform the student body of Clery reportable crimes, 
	  				including hate crimes, that pose an “ongoing security threat” to students. 
	  				Legally, this excludes all incidents categorized as “harassment” under

	  			Nineteen alleged hate crimes and bias-related incidents have been reported 
	  			to Public Safety on Columbia’s Morningside campus since 2015, 
	  			according to a Spectator review of crime logs. 
	  				A majority of those incidents did not trigger immediate University-wide 
	  				communications sent directly to students. Under a federal law known as 
	  				the Clery Act, the University is not mandated to notify students of 
	  				all bias-related incidents documented in its crime logs; Public Safety is 
	  				only required to inform the student body of Clery reportable crimes, 
	  				including hate crimes, that pose an “ongoing security threat” to students. 
	  				Legally, this excludes all incidents categorized as “harassment” under 

	  			Nineteen alleged hate crimes and bias-related incidents have been reported 
	  			to Public Safety on Columbia’s Morningside campus since 2015, 
	  			according to a Spectator review of crime logs. 
	  				A majority of those incidents did not trigger immediate University-wide 
	  				communications sent directly to students. Under a federal law known as 
	  				the Clery Act, the University is not mandated to notify students of 
	  				all bias-related incidents documented in its crime logs; Public Safety is 
	  				only required to inform the student body of Clery reportable crimes, 
	  				including hate crimes, that pose an “ongoing security threat” to students. 
	  				Legally, this excludes all incidents categorized as “harassment” under 
  			</Body>
  			</div>
        );
    }
}

export default Navbar;