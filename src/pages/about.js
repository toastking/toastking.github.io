import React from 'react'
import { Link,graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Avatar from '../components/avatar';

const AboutPage = () => (
  <Layout>
    <Avatar/>
    <div>
      I am fullstack software engineer in the New York City area. 
      I currently work at <a href="https://1010data.com/">1010data</a>. My speciality is building data visualization and data analysis tools.
      If you like what you see, <a href="mailto:mattdelsig@me.com">drop me a line</a>, or check out my <a href="https://github.com/toastking">Github</a>.
    </div>
  </Layout>
);

export default AboutPage;
