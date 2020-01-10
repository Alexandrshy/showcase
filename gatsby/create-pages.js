"use strict"

const path = require("path")

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  createPage({
    path: "/404",
    component: path.resolve("./src/templates/not-found-template.tsx"),
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
      //   TODO: need to add
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
}

module.exports = createPages
