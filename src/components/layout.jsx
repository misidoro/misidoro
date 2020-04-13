import React from 'react';
import { Global, css } from '@emotion/core';
import Header from './header';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-site-metadata.js'

require('typeface-open-sans')

const globalCss = css`
  * {
    box-sizing: border-box;
    margin: 0;
    
  }

  * + * {
    margin-top: 1rem;
  }

  html,
  body {
    margin: 0;
    color: #555;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1.4;

    > div {
      margin-top: 0;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: #222;
    line-height: 1.1;

    + * {
      margin-top: 0.5rem;
    }
  }

  strong {
    color: #222;
  }

  li {
    margin-top: 0.25rem;
  }
`

const mainCss = css`
  margin: 2rem auto 4rem;
  max-width: 90vw;
  width: 550px;
`

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Global styles={globalCss} />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header></Header>
      <main css={mainCss}>{children}</main>
    </>
  );
}

export default Layout;

