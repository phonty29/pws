import React from 'react';
import { Layout} from '../components';
import { Hero, About, Jobs, Blog, Projects, Contact } from '../components/sections';

const IndexPage = ({location}) => {
  return (
    <Layout location={location}>
      <div className="fillHeight">
        <Hero location={location}/>
        <About/>
        <Jobs/>
        <Blog/>
        <Projects/>
        <Contact/>
      </div>
    </Layout>
  )
}

export default IndexPage;

