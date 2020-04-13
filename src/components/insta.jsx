import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useInstagram from '../hooks/use-instagram';

const instaPhotoCss = css`
  box-shadow: 0;
  display: block;
  margin: 0.5rem;
  max-width: calc(33% - 1rem);
  width: 120px;
  transition: 200ms box-shadow linear;
  
  :focus, :hover {
    box-shadow: 0 2px 14px #22222244;
    z-index: 10;
  }
`;

const imageCss = css`
  width: 100%;

  * {
    margin-top: 0;
  }
`;

const imageWrapper = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem -0.5rem;
`;

const  Insta = () => {
  const instaData = useInstagram();
  const {username} = instaData[0];

  return (
    <>
      <h2>Instagram post from {username}</h2>
      <div css={imageWrapper}>
        {instaData.map(photo => (
          <a href={`https://instagram/p/${photo.id}`} css={instaPhotoCss}>
            <Image fluid={photo.fluid} alt={photo.caption} css={imageCss} />
          </a>
        ))}
      </div>
      <a href={`https://instagram.com/${username}`}>See more on Instagram &rarr;</a>
    </>
  );
}

export default Insta;