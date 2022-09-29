import React from 'react';
import styled from 'styled-components';
import { Layout} from '../components';
import { Hero, About, Blog, Projects, Contact } from '../components/sections';

const IndexPage = ({location}) => {
  return (
    <Layout location={location}>
      <div className="fillHeight">
        {/* <Hero/>
        <About/>
        <Blog/>
        <Projects/>
        <Contact/> */}
      </div>
    </Layout>
  )
}

export default IndexPage;

