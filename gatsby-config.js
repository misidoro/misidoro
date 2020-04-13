module.exports = {
	siteMetadata: {
		title: 'Miguel Isidoro',
		description: 'A site to demonstrate my skills as a software engineer'
	},
	plugins: [
		'gatsby-plugin-emotion',
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				defaultLayouts: {
					default: require.resolve('./src/components/layout.jsx')
				},
				gatsbyRemarkPlugins: [ { resolve: 'gatsby-remark-images' } ]
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: 'posts'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: 'images'
			}
		},
		{
			resolve: 'gatsby-source-instagram',
			options: {
				username: 'gatsbyjs'
			}
		},
		{
			resolve: 'gatsby-plugin-webpack-bundle-analyzer',
			options: {
				production: true,
				disable: !process.env.ANALYZE_BUNDLE_SIZE,
				generateStatsFile: true,
				analyzerMode: 'static'
			}
		}
	]
};
