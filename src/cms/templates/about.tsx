import React from "react"
import { AboutPageTemplate } from "../../templates/cms/about-page"

type PropsType = {
  entry: any
  widgetFor: any
}

const AboutPagePreview: React.FC<PropsType> = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
)

export default AboutPagePreview
