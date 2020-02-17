"use strict"

const path = require("path")

const siteConfig = require("../../config")

module.exports = async (graphql, actions) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" } } }) {
        totalCount
      }
    }
  `)
  const { postsPerPage } = siteConfig
  const numPages = Math.ceil(
    result.data.allMarkdownRemark.totalCount / postsPerPage
  )

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? "/posts" : `/posts/${i}`,
      component: path.resolve("./src/templates/posts-page.tsx"),
      context: {
        currentPage: i,
        postsLimit: postsPerPage,
        postsOffset: i * postsPerPage,
        prevPagePath: i <= 1 ? "/posts" : `/posts/${i - 1}`,
        nextPagePath: `/posts/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1,
      },
    })
  }
}
