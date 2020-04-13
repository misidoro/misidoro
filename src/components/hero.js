import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBG = styled(BackgroundImage)`
	background-position: top 20% center;
	height: 50vh;

	+ * {
		margin-top: 0;
	}
`;

const TextBox = styled.div`
	background-image: linear-gradient(to top, #120A8F00 2rem, #120A8Fdd);
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: flex-end;
	padding: 0 calc( (100vw - 550px) / 2) 2rem;
	width: 100%;

	h1 {
		text-shadow: 1px 1px 3px #eeddff66;
		font-size: 2.25rem;
	}

	p,
	a {
		color: #222;
		margin-top: 0;
	}

	a {
		margin: 0.5rem;
	}
`;

const Hero = () => {
	const { image } = useStaticQuery(graphql`
		query {
			image: file(relativePath: { eq: "johny-goerend-surf.jpg" }) {
				sharp: childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);
	return (
		<ImageBG Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
			<TextBox>
				<h1>Welcome to my website</h1>
				<p>Built using gatsby and &hearts;</p>
				<Link to="/about">About</Link>
			</TextBox>
		</ImageBG>
	);
};

export default Hero;
