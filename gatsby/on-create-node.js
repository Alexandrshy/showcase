"use strict"

const { createFilePath } = require("gatsby-source-filesystem")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)

  if (node.internal.type === "MarkdownRemark") {
    const { slug, lang, hasTranslation } = node.frontmatter
    if (typeof slug !== "undefined") {
      const dirname = getNode(node.parent).relativeDirectory
      const langPath = lang && lang !== "en" ? lang : ""
      createNodeField({
        node,
        name: "slug",
        value: `/${dirname}/${slug}/${langPath}`,
      })
      createNodeField({
        node,
        name: "langKey",
        value: lang ? lang : "",
      })
      createNodeField({
        node,
        name: "hasTranslation",
        value: hasTranslation,
      })
    } else {
      const value = createFilePath({ node, getNode })
      createNodeField({
        node,
        name: "slug",
        value,
      })
    }
  }
}

module.exports = onCreateNode
