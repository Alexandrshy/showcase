import React from "react"
import { graphql } from "gatsby"

type PropsType = {
  data: {
    contentfulBlog: {
      title: string
      slug: string
    }
  }
}

const BlogTemplate: React.FC<PropsType> = props => {
  const { title } = props.data.contentfulBlog
  return <h1>Это блог {title}</h1>
}

export default BlogTemplate

export const pageQuery = graphql`
  query blogPostQuery($slug: String) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
    }
  }
`
