import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ReadLink from './read-link';

const articleCss = css`
	border-bottom: 1px solid #ddd;
	margin-top: 0.75rem;
	padding-bottom: 1rem;
	display: flex;

	:first-of-type {
		margin-top: 1rem;
	}
`;

const imageLinkCss = css`
	margin: 1rem 1rem 0 0;
	flex: 0 0 100px;
`;

const imageCss = css`
	* {
		margin-top: 0;
	}
`;

const PostPreview = ({ post }) => (
	<article css={articleCss}>
		<Link to={post.slug} css={imageLinkCss}>
			<Image fluid={post.image.sharp.fluid} css={imageCss} alt={post.title} />
		</Link>
		<div>
			<h3>
				<ReadLink to={post.slug}>{post.title}</ReadLink>
			</h3>
			<p>{post.excerpt}</p>
			<ReadLink to={post.slug}>read this post &rarr;</ReadLink>
		</div>
	</article>
);

export default PostPreview;
