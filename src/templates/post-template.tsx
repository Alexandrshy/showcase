import React from "react"
import { graphql } from "gatsby"

import { Title } from "../components/title/title"
import { Layout } from "../components/layout/layout"
import { Page } from "../components/page/page"
import { Wrapper } from "../components/wrapper/wrapper"

type PropsType = {
  data: {
    markdownRemark: {
      html: string
      frontmatter: { date: string; title: string; tags: string }
    }
  }
}

const BlogTemplate: React.FC<PropsType> = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { date, title, tags },
      html,
    },
  } = data
  return (
    <Layout title={title}>
      <Page>
        <Wrapper>
          <Title title={title} />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Wrapper>
      </Page>
    </Layout>
  )
}

export default BlogTemplate

export const postPageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`
