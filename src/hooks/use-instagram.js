import { graphql, useStaticQuery } from 'gatsby';

const useInstagram = () => {
	const data = useStaticQuery(graphql`
		query {
			allInstaNode(limit: 12) {
				nodes {
					id
					caption
					username
					localFile {
						childImageSharp {
							fluid(maxWidth: 120, maxHeight: 120) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			}
		}
	`);

	return data.allInstaNode.nodes.map(({ id, caption, username, localFile }) => ({
		id,
		caption,
		username,
		...localFile.childImageSharp
	}));
};

export default useInstagram;
