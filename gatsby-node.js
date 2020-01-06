const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  createPage({
    path: "/404",
    component: path.resolve("./src/templates/not-found-template.tsx"),
  })

  try {
    const result = await graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                templateKey
              }
            }
          }
        }
      }
    `)

    console.log("result", result)
  } catch (error) {
    console.log(error)
  }
}
