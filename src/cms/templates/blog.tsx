import React from "react"
import { BlogPageTemplate } from "../../templates/cms/blog-page"

type PropsType = {
  entry: any
  widgetFor: any
}

const BlogPostPreview: React.FC<PropsType> = ({ entry, widgetFor }) => (
  <BlogPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
)

export default BlogPostPreview
