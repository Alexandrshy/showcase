const path = require("path")

const siteConfig = require("../../config")

module.exports = async (graphql, actions) => {
  const { createPage } = actions
  const { postsPerPage } = siteConfig

  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" } } }) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  const tags = result.data.allMarkdownRemark.group

  tags.forEach(({ totalCount, fieldValue }) => {
    const numPages = Math.ceil(totalCount / postsPerPage)
    const tagSlug = `/tags/${fieldValue}`

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? tagSlug : `${tagSlug}/page/${i}`,
        component: path.resolve("./src/templates/tag-template.tsx"),
        context: {
          tag: fieldValue,
          currentPage: i,
          postsLimit: postsPerPage,
          postsOffset: i * postsPerPage,
          prevPagePath: i <= 1 ? tagSlug : `${tagSlug}/page/${i - 1}`,
          nextPagePath: `${tagSlug}/page/${i + 1}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1,
        },
      })
    }
  })
}
