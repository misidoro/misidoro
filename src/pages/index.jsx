import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';


export default () => (
  <Layout>
    <h1>Hey folks!</h1>
    <p>This website was built using gatsby, emotion, graphql and love</p>
    <Link to="/about">About</Link>
  </Layout>
)  
