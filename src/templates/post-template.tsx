import React from "react"
import { graphql, Link } from "gatsby"

import { Title } from "../components/title/title"
import { Layout } from "../components/layout/layout"
import { Page } from "../components/page/page"
import { Wrapper } from "../components/wrapper/wrapper"
import { Time } from "../components/time/time"
import useSiteMetadata from "../hooks/use-site-metadata"

import style from "./post-page.module.css"

type PropsType = {
  data: {
    markdownRemark: {
      html: string
      frontmatter: { date: string; title: string }
      fields: {
        slug: string
        langKey: string
        hasTranslation: boolean
      }
    }
  }
}

const BlogTemplate: React.FC<PropsType> = ({ data }) => {
  const { github } = useSiteMetadata()
  const {
    markdownRemark: {
      frontmatter: { date, title },
      fields: { slug, langKey, hasTranslation },
      html,
    },
  } = data
  const discussUrl = `https://mobile.twitter.com/search?q=https://alexandrshy.com/posts${slug}`
  const gitHubUrl = `https://github.com/${github.name}/${
    github.repo
  }/edit/master/content/pages${slug.slice(0, -1)}.md`

  return (
    <Layout title={title}>
      <Page>
        <Wrapper>
          <article className={style.article}>
            <header>
              <Title title={title} />
            </header>
            {hasTranslation && langKey === "en" && (
              <div className={style.translation}>
                <p>
                  This article has a <Link to={`${slug}/ru`}>Russian</Link>{" "}
                  translation
                </p>
              </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <footer className={style.footer}>
              <Time date={date} />
              <div>
                <a
                  className={style.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={discussUrl}
                >
                  Discuss on Twitter
                </a>
                <span className={style.separator}> / </span>
                <a
                  className={style.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={gitHubUrl}
                >
                  Edit on GitHub
                </a>
              </div>
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
      }
      fields {
        slug
        langKey
        hasTranslation
      }
    }
  }
`
