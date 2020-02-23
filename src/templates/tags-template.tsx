import React from "react"
import { graphql, Link } from "gatsby"

import { Title } from "../components/title/title"
import { Layout } from "../components/layout/layout"
import { Wrapper } from "../components/wrapper/wrapper"

type PropsType = {
  data: {
    allMarkdownRemark: {
      group: Array<{ fieldValue: string; totalCount: number }>
    }
  }
}

const TagsPage: React.FC<PropsType> = ({ data }) => {
  const {
    allMarkdownRemark: { group: tags },
  } = data

  return (
    <Layout>
      <Wrapper>
        <Title title="Tags" inline={true} />
        <ul>
          {tags
            .sort((a, b) => b.totalCount - a.totalCount)
            .map(({ fieldValue, totalCount }) => (
              <li key={fieldValue}>
                <Link to={`tags/${fieldValue}`}>
                  {fieldValue} ({totalCount})
                </Link>
              </li>
            ))}
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default TagsPage

export const tagsPageQuery = graphql`
  query TagsPage {
    allMarkdownRemark(
      filter: {
        frontmatter: { template: { eq: "post" }, draft: { ne: true } }
        fields: { langKey: { eq: "en" } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
