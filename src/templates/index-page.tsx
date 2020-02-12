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
      frontmatter: { title: string; subtitle: string; image: any }
    }
  }
}

const MainPage: React.FC<PropsType> = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, subtitle, image },
    },
  } = data

  return (
    <Layout>
      <Intro title={title} subtitle={subtitle} image={image} />
      <Wrapper>
        <LatestPosts />
      </Wrapper>
    </Layout>
  )
}

export default MainPage

export const mainPageQuery = graphql`
  query MainPage {
    markdownRemark(frontmatter: { template: { eq: "index-page" } }) {
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
