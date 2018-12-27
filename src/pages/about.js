import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Avatar from '../components/avatar';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display:flex;
  flex-direction:row;
  padding:1.5em;
`;

const AvatarCol = styled.div`
  flex;1;
  min-width:300px;
`;

const BioCol = styled.div`
  flex:2;
  margin-left:1em;
  margin-right:auto;
`;
const AboutPage = () => (
  <Layout>
    <SEO title="Matthew Del Signore" keywords={[`coder`, `portfolio`, `frontend`, `react`, `gatsby`,`about`]} />
    <AboutContainer>
      <AvatarCol><Avatar/></AvatarCol>
      <BioCol>
        I am fullstack software engineer in the New York City area. 
        I currently work at <a href="https://1010data.com/">1010data</a>. My speciality is building data visualization and data analysis tools.
        If you like what you see, <a href="mailto:mattdelsig@me.com">drop me a line</a>, or check out my <a href="https://github.com/toastking">Github</a>.
      </BioCol>
    </AboutContainer>
  </Layout>
);

export default AboutPage;
