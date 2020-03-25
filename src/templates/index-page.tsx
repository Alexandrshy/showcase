import React from "react"
import { graphql } from "gatsby"

import LatestPosts from "../components/leatestPosts/leatestPosts"
import { Layout } from "../components/layout/layout"
import { Intro } from "../components/intro/intro"
import { Wrapper } from "../components/wrapper/wrapper"

type PropsType = {
  data: {
    markdownRemark: {
      html: string
      frontmatter: { title: string }
    }
  }
}

const MainPage: React.FC<PropsType> = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title },
    },
  } = data

  return (
    <Layout>
      <Wrapper>
        <Intro title={title} subtitle={html} />
        <LatestPosts />
      </Wrapper>
    </Layout>
  )
}

export default MainPage

export const mainPageQuery = graphql`
  query MainPage {
    markdownRemark(frontmatter: { template: { eq: "index-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
