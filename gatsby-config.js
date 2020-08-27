/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: `Alliance Disposal`,
		description: `Modern On-Demand Waste Services. Roll-Off Dumpster Rentals, Commercial Waste Dumpsters and Residential Trash Pickup.`,
		author: `Alliance Disposal`,
		siteUrl: `https://www.alliancedsp.com`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-material-ui`,
			options: {
			  	stylesProvider: {
					injectFirst: true,
			  	},
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				exclude: ['/cart', '/checkout', '/roll-off-scheduled', '/internet-explorer-page', '/admin']
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		"gatsby-remark-images",
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
			  	gatsbyRemarkPlugins: [
					{
				  		resolve: `gatsby-remark-images`,
				  		options: {
							maxWidth: 800,
				  		},
					},
			  	],
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "service-areas",
				path: `${__dirname}/src/service-areas/`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "trash-talks-blog",
				path: `${__dirname}/src/trash-talks-blog/`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://www.alliancedsp.com',
				sitemap: 'https://www.alliancedsp.com/sitemap.xml',
				policy: [{ userAgent: '*', disallow: [
					'/checkout', '/roll-off-scheduled, /admin'
				] }]
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Alliance Disposal`,
				short_name: `Alliance`,
				start_url: `/`,
				background_color: `#FFFFFF`,
				theme_color: `#063852`,
				display: `standalone`,
				icon: `src/assets/images/favicon.svg`
			},
		},
		{
			resolve: "@sentry/gatsby",
			options: {
				dsn: "https://556591c9130741b29a6b29d974faf83e@sentry.io/1796753",
				blacklistUrls: ['localhost:8000']
			}
		},
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: "GTM-K662XTS",
			
				// Include GTM in development.
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: false,
			
				// datalayer to be set before GTM is loaded
				// should be an object or a function that is executed in the browser
				// Defaults to null
				//   defaultDataLayer: { platform: "gatsby" },
			
				// Specify optional GTM environment details.
				//   gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
				//   gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
				//   dataLayerName: "YOUR_DATA_LAYER_NAME",
			},
		},
		{
			resolve: `gatsby-plugin-breadcrumb`,
			options: {
			 	useAutoGen: true
		   	}
		}
	],
}
