import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/layout/layout"
import { Page } from "../components/page/page"

type PropsType = {
  data: {
    markdownRemark: {
      html: string
      frontmatter: { title: string; image: any }
    }
  }
}

const AboutPage: React.FC<PropsType> = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, image },
      html,
    },
  } = data
  return (
    <Layout>
      <Page title={title}>
        <img src={image.childImageSharp.fluid.src} alt="" />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Page>
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
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
