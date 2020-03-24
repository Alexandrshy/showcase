import React from "react"
import { Link, graphql } from "gatsby"
import classNames from "classnames"
import Img from "gatsby-image"

import { Layout } from "../components/layout/layout"
import { Page } from "../components/page/page"
import { Wrapper } from "../components/wrapper/wrapper"
import useSiteMetadata from "../hooks/use-site-metadata"

import style from "./not-found-template.module.css"

type PropsType = {
  data: {
    fileName: {
      childImageSharp: {
        fluid: {
          base64: string
          aspectRatio: number
          src: string
          srcSet: string
          sizes: string
        }
      }
    }
  }
}

const NotFoundTemplate: React.FC<PropsType> = ({ data }) => {
  const { github } = useSiteMetadata()

  return (
    <Layout title="Page not Found">
      <Page>
        <Wrapper>
          <div className={style.grid}>
            <div
              className={classNames(
                style.item,
                style.itemMessage,
                style.item1of2
              )}
            >
              <h2 className={style.title}>Page not found</h2>
              <h3 className={style.subtitle}>
                Something went wrong. Try refreshing the page or{" "}
                <a
                  href={`https://github.com/${github.name}/${github.repo}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  let me know
                </a>{" "}
                about the problem. Thanks!
              </h3>
              <Link to="/" className={style.link}>
                Go to Home page
              </Link>
            </div>
            <div
              className={classNames(
                style.item,
                style.itemPicture,
                style.item1of2
              )}
            >
              <Img fluid={data.fileName.childImageSharp.fluid} alt="" />
            </div>
          </div>
        </Wrapper>
      </Page>
    </Layout>
  )
}

export default NotFoundTemplate

export const query = graphql`
  query NotFoundPage {
    fileName: file(relativePath: { eq: "not-found.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
