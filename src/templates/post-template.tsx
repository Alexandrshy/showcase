import React from "react"
import { graphql } from "gatsby"

import { Title } from "../components/title/title"
import { Layout } from "../components/layout/layout"
import { Page } from "../components/page/page"
import { Wrapper } from "../components/wrapper/wrapper"

import style from "./post-page.module.css"

type PropsType = {
  data: {
    markdownRemark: {
      html: string
      frontmatter: { date: string; title: string; tags: Array<string> }
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
          <article className={style.article}>
            <header>
              <Title title={title} />
            </header>
            <div className={style.translation}>
              <p>
                This article has a <a>Russian</a> translation
              </p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <hr className={style.line} />
            <footer>
              <a
                className={style.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Discuss on Twitter
              </a>
              {` • `}
              <a
                className={style.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit on GitHub
              </a>
            </footer>
          </article>
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
