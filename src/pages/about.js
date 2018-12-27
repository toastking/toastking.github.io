import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Avatar from '../components/avatar';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display:flex;

  /* change the direction to columns if its a mobile device */
  @media (min-width: 800px){
    flex-direction:row;
  }

  @media (max-width: 800px) {
    flex-direction:column-reverse;
  }

  padding:1.5em;
`;

const AvatarCol = styled.div`
  flex;1;
  min-width:300px;
  max-height:500px;
`;

const BioCol = styled.div`
  flex:2;
  margin-left:1em;
  margin-right:auto;
  margin-bottom:2em;
`;
const AboutPage = () => (
  <Layout>
    <SEO title="Matthew Del Signore" keywords={[`coder`, `portfolio`, `frontend`, `react`, `gatsby`,`about`]} />
    <AboutContainer>
      <AvatarCol><Avatar/></AvatarCol>
      <BioCol>
        I am fullstack software engineer in the New York City area. 
        I currently work at <a href="https://1010data.com/">1010data</a>. My speciality is building data visualization and data analysis tools.
        <br/>
        If you like what you see, <a href="mailto:mattdelsig@me.com">drop me a line at mattdelsig@me.com</a>. 
        <br/>
        Check out my <a href="https://github.com/toastking">Github</a>.
        <br/>
        You can also find me on <a href="https://www.linkedin.com/in/mattdelsig/">LinkedIn</a>.
        <br/>
      </BioCol>
    </AboutContainer>
  </Layout>
);

export default AboutPage;
