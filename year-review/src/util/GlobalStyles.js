import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Branding';
    src: url('https://s3.amazonaws.com/spectator-fonts/Branding-BlackItalic.eot');
    src: url('https://s3.amazonaws.com/spectator-fonts/Branding-BlackItalic.eot?#iefix') format('embedded-opentype'),
        url('https://s3.amazonaws.com/spectator-fonts/Branding-BlackItalic.woff2') format('woff2'),
        url('https://s3.amazonaws.com/spectator-fonts/Branding-BlackItalic.woff') format('woff'),
        url('https://s3.amazonaws.com/spectator-fonts/Branding-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
  }
  @font-face {
    font-family: 'Branding';
    src: url('https://s3.amazonaws.com/spectator-fonts/Branding-Medium.eot');
    src: url('https://s3.amazonaws.com/spectator-fonts/Branding-Medium.eot?#iefix') format('embedded-opentype'),
        url('https://s3.amazonaws.com/spectator-fonts/Branding-Medium.woff2') format('woff2'),
        url('https://s3.amazonaws.com/spectator-fonts/Branding-Medium.woff') format('woff'),
        url('https://s3.amazonaws.com/spectator-fonts/Branding-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Founders Grotesk';
    src: url('https://s3.amazonaws.com/spectator-fonts/FoundersGroteskTextTest-LightItalic.eot');
    src: url('https://s3.amazonaws.com/spectator-fonts/FoundersGroteskTextTest-LightItalic.eot?#iefix') format('embedded-opentype'),
        url('https://s3.amazonaws.com/spectator-fonts/FoundersGroteskTextTest-LightItalic.woff2') format('woff2'),
        url('https://s3.amazonaws.com/spectator-fonts/FoundersGroteskTextTest-LightItalic.woff') format('woff'),
        url('https://s3.amazonaws.com/spectator-fonts/FoundersGroteskTextTest-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Branding';
    src: url('https://s3.amazonaws.com/spectator-fonts/Branding-Black.eot');
    src: url('https://s3.amazonaws.com/spectator-fonts/Branding-Black.eot?#iefix') format('embedded-opentype'),
        url('https://s3.amazonaws.com/spectator-fonts/Branding-Black.woff2') format('woff2'),
        url('https://s3.amazonaws.com/spectator-fonts/Branding-Black.woff') format('woff'),
        url('https://s3.amazonaws.com/spectator-fonts/Branding-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Branding';
    src: url('https://s3.amazonaws.com/spectator-fonts/Branding-Bold.eot');
    src: url('https://s3.amazonaws.com/spectator-fonts/Branding-Bold.eot?#iefix') format('embedded-opentype'),
        url('https://s3.amazonaws.com/spectator-fonts/Branding-Bold.woff2') format('woff2'),
        url('https://s3.amazonaws.com/spectator-fonts/Branding-Bold.woff') format('woff'),
        url('https://s3.amazonaws.com/spectator-fonts/Branding-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Avenir';
    src: url('https://s3.amazonaws.com/spectator-fonts/AvenirNextLTW01-MediumIt.eot');
    src: url('https://s3.amazonaws.com/spectator-fonts/AvenirNextLTW01-MediumIt.eot?#iefix') format('embedded-opentype'),
        url('https://s3.amazonaws.com/spectator-fonts/AvenirNextLTW01-MediumIt.woff2') format('woff2'),
        url('https://s3.amazonaws.com/spectator-fonts/AvenirNextLTW01-MediumIt.woff') format('woff'),
        url('https://s3.amazonaws.com/spectator-fonts/AvenirNextLTW01-MediumIt.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
  }
    
  html {
    font-family: 'Founders Grotesk', sans-serif;
    font-weight: 300;
    font-style: italic;
    scroll-behavior: smooth;
    background: #222430;
  }
  body,
  button {
    color: ${props => props.theme.black};
    margin: 0;
  }
  h1 {
    font-family: 'Branding', sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 8rem;
    letter-spacing: .3rem;
    margin: 0;
    @media only screen and (max-width: 767px) {
      font-size: 4rem;
    }
  }
  h2 {
    font-family: 'Branding', sans-serif;
    font-weight: 900;
    font-style: italic;
    font-size: 5rem;
    letter-spacing: .2rem;
    margin: 0;
    @media only screen and (max-width: 767px) {
      font-size: 3rem;
    }
  }
  h3 {
    font-family: 'Branding', sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 3rem;
    letter-spacing: .2rem;
    margin: 0;
    @media only screen and (max-width: 767px) {
      font-size: 2rem;
    }
  }
  h4 {
    font-family: 'Branding', sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 2rem;
    margin: 0;
    @media only screen and (max-width: 767px) {
      font-size: 1.5rem;
    }
  }
  h5 {
    font-family: 'Branding', sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 1.2rem;
    margin: 0;
  }
  h6 {
    font-family: 'Branding', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 1rem;
    margin: 0;
  }
  p {
    font-family: 'Avenir', sans-serif;
    font-weight: 500;
    font-style: italic;
    font-size: 1rem;
    margin: 0;
  }
`

export const Theme = {
  black: "#000000",
  white: "#FFFFFF",
  blue: "#3CABDB",
  indigo: "#222430",
  shadow: "rgba(0, 0, 0, 0.3) 0 0 10px",
  transparentBlack: "rgba(0, 0, 0, 0.32)",
  transparentWhite: "rgba(255, 255, 255, 0.5)",
};
