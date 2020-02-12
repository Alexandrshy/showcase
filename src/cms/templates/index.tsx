import React from "react"
import { IndexPageTemplate } from "../../templates/cms/index-page"

type PropsType = {
  entry: any
  widgetFor: any
}

const IndexPagePreview: React.FC<PropsType> = ({ entry, widgetFor }) => (
  <IndexPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
)

export default IndexPagePreview
