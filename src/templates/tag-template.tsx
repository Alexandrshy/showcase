import React from "react"
import { graphql } from "gatsby"

import { PropType as PostTypeType } from "../components/posts/post/post"
import { Layout } from "../components/layout/layout"
import { Wrapper } from "../components/wrapper/wrapper"
import { Pagination } from "../components/pagination/pagination"
import { Posts } from "../components/posts/posts"

import style from "./posts-page.module.css"

type PropsType = {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          id: string
          fields: { slug: string }
          frontmatter: PostTypeType
        }
      }>
    }
  }
  pageContext: {
    tag: string
    currentPage: number
    postsLimit: number
    postsOffset: number
    prevPagePath: string
    nextPagePath: string
    hasPrevPage: boolean
    hasNextPage: boolean
  }
}

const TagPage: React.FC<PropsType> = ({ data, pageContext }) => {
  const {
    allMarkdownRemark: { edges },
  } = data
  const {
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath,
    tag,
  } = pageContext

  return (
    <Layout>
      <Wrapper>
        <div className={style.box}>
          <Posts
            list={edges}
            title={`
Posts by tag #${tag}`}
          />
          <Pagination
            prevPagePath={prevPagePath}
            nextPagePath={nextPagePath}
            hasPrevPage={hasPrevPage}
            hasNextPage={hasNextPage}
          />
        </div>
      </Wrapper>
    </Layout>
  )
}

export default TagPage

export const tagPageQuery = graphql`
  query TagPage($tag: String, $postsLimit: Int, $postsOffset: Int) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        frontmatter: { tags: { in: [$tag] }, template: { eq: "post" } }
        fields: { langKey: { eq: "en" } }
      }
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
`
