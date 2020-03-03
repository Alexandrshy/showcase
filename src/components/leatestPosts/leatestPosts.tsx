import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import { PropType as PostTypeType } from "../posts/post/post"
import { Posts } from "../posts/posts"

import style from "./leatestPosts.module.css"

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
}) => (
  <>
    {edges.length > 0 && <Posts list={edges} title="My last posts" />}
    {edges.length === 5 && (
      <div className={style.box}>
        <Link to="/posts" className={style.link}>
          Read all posts
        </Link>
      </div>
    )}
  </>
)

export default () => (
  <StaticQuery
    query={graphql`
      query PostListTemplate {
        allMarkdownRemark(
          filter: {
            frontmatter: { template: { eq: "post" } }
            fields: { langKey: { eq: "en" } }
          }
          limit: 5
          sort: { order: DESC, fields: [frontmatter___date] }
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
