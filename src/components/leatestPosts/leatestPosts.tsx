import React from "react"
import { graphql, StaticQuery } from "gatsby"

import { PropType as PostTypeType } from "../posts/post/post"
import { Posts } from "../posts/posts"

type PropsType = {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          id: string
          fields: {
            slug: string
          }
          frontmatter: PostTypeType
        }
      }>
    }
  }
}

const LatestPosts: React.FC<PropsType> = ({
  data: {
    allMarkdownRemark: { edges = [] },
  },
}) => edges.length > 0 && <Posts list={edges} title="Last Posts" />

export default () => (
  <StaticQuery
    query={graphql`
      query PostListTemplate {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" } } }
          limit: 5
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                date
                tags
              }
            }
          }
        }
      }
    `}
    render={data => <LatestPosts data={data} />}
  />
)
