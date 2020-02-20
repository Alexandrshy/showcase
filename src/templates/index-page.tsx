import React from "react"
import { graphql, Link } from "gatsby"

import LatestPosts from "../components/leatestPosts/leatestPosts"
import { Layout } from "../components/layout/layout"
import { Intro } from "../components/intro/intro"
import { Wrapper } from "../components/wrapper/wrapper"

import style from "./index-page.module.css"

type PropsType = {
  data: {
    markdownRemark: {
      html: string
      frontmatter: { title: string; subtitle: string }
    }
  }
}

const MainPage: React.FC<PropsType> = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title, subtitle },
    },
  } = data

  return (
    <Layout>
      <Wrapper>
        <Intro title={title} subtitle={html} />
        <LatestPosts />
        <div className={style.box}>
          <Link to="/posts" className={style.link}>
            Read all posts
          </Link>
        </div>
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
        subtitle
      }
    }
  }
`
