const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const work = require('./content/data/work.json');

const IMAGE_PATH = './content/assets/';

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `blog${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  work.forEach((project, index) => {
    const {
      title,
      description,
      image,
    } = project;

    const { name, ext } = path.parse(image);
    const absolutePath = path.resolve(__dirname, IMAGE_PATH, image);
    const imageData = {
      name,
      ext,
      absolutePath,
      extension: ext.substring(1)
    };
    const imageNode = {
      ...imageData,
      id: createNodeId(`work-image-${name}-${index}`),
      internal: {
        type: 'WorkProjectImage',
        contentDigest: createContentDigest(imageData),
      },
    };
    actions.createNode(imageNode);

    const idTitle = title.split(' ')
      .map(elem => elem.toLowerCase())
      .join('-');

    const node = {
      title,
      description,
      image: imageNode, 
      id: createNodeId(`work-${idTitle}`),
      internal: {
        type: 'WorkProject',
        contentDigest: createContentDigest(project),
      },
    };

    actions.createNode(node);
  });
};