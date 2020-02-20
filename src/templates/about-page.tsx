import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { Title } from "../components/title/title"
import { Layout } from "../components/layout/layout"
import { Page } from "../components/page/page"
import { Wrapper } from "../components/wrapper/wrapper"

import style from "./about-page.module.css"

type PropsType = {
  data: {
    markdownRemark: {
      html: string
      frontmatter: { title: string; subtitle: string; image: any }
    }
  }
}

const AboutPage: React.FC<PropsType> = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, subtitle, image },
      html,
    },
  } = data
  return (
    <Layout title="About me">
      <Page>
        <Wrapper className={style.wrapper} width="increased">
          <Title title={title} inline={true} />
          {subtitle && <h3 className={style.subtitle}>{subtitle}</h3>}
          <Img fluid={image.childImageSharp.fluid} />
        </Wrapper>
        <Wrapper>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Wrapper>
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
