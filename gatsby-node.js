const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  createPage({
    path: "/404",
    component: path.resolve("./src/templates/not-found-template.tsx"),
  })

  try {
    // const result = await graphql(`
    //   {
    //     allContentfulBlog(limit: 100) {
    //       edges {
    //         node {
    //           title
    //           slug
    //         }
    //       }
    //     }
    //   }
    // `)
    // const { edges } = result.data.allContentfulBlog
    // edges.forEach(edge => {
    //   createPage({
    //     path: edge.node.slug,
    //     component: path.resolve("./src/templates/blog-post.tsx"),
    //     context: {
    //       slug: edge.node.slug,
    //     },
    //   })
    // })
  } catch (error) {
    console.log(error)
  }
}
