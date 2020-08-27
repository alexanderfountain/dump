const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });

    if (node.frontmatter.type === 'blog') {
      createNodeField({
        // Name of the field you are adding
        name: "slug",
        // Individual MDX node
        node,
        // Generated value based on filepath with "service-areas" prefix. you
        // don't need a separating "/" before the value because
        // createFilePath returns a path with the leading "/".
        value: `/trash-talks-blog${value}`,
      })
    } else {
      createNodeField({
        // Name of the field you are adding
        name: "slug",
        // Individual MDX node
        node,
        // Generated value based on filepath with "service-areas" prefix. you
        // don't need a separating "/" before the value because
        // createFilePath returns a path with the leading "/".
        value: `/service-areas${value}`,
      })
    }
  }
};

const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              level
              imagePath
              headerImagePath
              type
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create service area pages.
  const newPages = result.data.allMdx.edges

  // you'll call `createPage` for each result
  newPages.forEach(({ node }, index) => {

    if (node.frontmatter.type === 'blog') {

      let resolvePath = `./src/components/blog/BlogLayout.js`;
      
      createPage({
        // This is the slug you created before
        // (or `node.frontmatter.slug`)
        path: node.fields.slug,
        // This component will wrap our MDX content in the appropriate layout
        component: path.resolve(resolvePath),
        // You can use the values in this context in
        // our page layout component
        context: { id: node.id },
      });

    } else {

      let resolvePath = `./src/components/service-areas/CountyLayout.js`;

      if (node.frontmatter.level === 'town') {
        resolvePath = `./src/components/service-areas/TownLayout.js`;
      }

      if (node.frontmatter.level === 'state') {
        resolvePath = `./src/components/service-areas/StateLayout.js`;
      }

      createPage({
        // This is the slug you created before
        // (or `node.frontmatter.slug`)
        path: node.fields.slug,
        // This component will wrap our MDX content in the appropriate layout
        component: path.resolve(resolvePath),
        // You can use the values in this context in
        // our page layout component
        context: { id: node.id, imagePath: node.frontmatter.imagePath, headerImagePath: node.frontmatter.headerImagePath },
      })
    }
  })
};

// exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
//   let config = getConfig();
//   if (!config.optimization) { return; };

//   config.optimization.splitChunks = {
//     chunks: 'all',
//     name: false,
//     cacheGroups: {
//       vendors: {
//         test: /[\\/]node_modules[\\/]/,
//         reuseExistingChunk: true
//       },
//       commons: {
//         minChunks: 6, // setting this to less than 2 seems to break the lazy image loading
//         reuseExistingChunk: true
//       }
//     }
//   };

//   actions.replaceWebpackConfig(config);

// };