exports.createPages = async ({ actions, graphql, reporter }) => {
	const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

	if (result.errros) {
		reporter.panic('failed to create posts', result.erros);
	}

	const posts = result.data.allMdx.nodes;

	posts.forEach((post) => {
		actions.createPage({
			path: post.frontmatter.slug,
			component: require.resolve('./src/templates/post.js'),
			context: {
				slug: post.frontmatter.slug
			}
		});
	});
};
