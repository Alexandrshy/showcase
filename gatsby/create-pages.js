"use strict"

const path = require("path")

const createPostsPages = require("./pagination/create-posts-pages")
const createTagsPages = require("./pagination/create-tags-pages")

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  createPage({
    path: "/404",
    component: path.resolve("./src/templates/not-found-template.tsx"),
  })

  createPage({
    path: "/tags",
    component: path.resolve("./src/templates/tags-template.tsx"),
  })

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const { edges } = result.data.allMarkdownRemark

  edges.forEach(edge => {
    const { id } = edge.node
    const { template } = edge.node.frontmatter
    const { slug } = edge.node.fields
    if (template === "post") {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve("src/templates/post-template.tsx"),
        context: { slug: edge.node.fields.slug },
      })
    } else {
      createPage({
        path: slug,
        component: path.resolve(`src/templates/${template}.tsx`),
        context: {
          slug,
        },
      })
    }
  })

  await createPostsPages(graphql, actions)
  await createTagsPages(graphql, actions)
}

module.exports = createPages
