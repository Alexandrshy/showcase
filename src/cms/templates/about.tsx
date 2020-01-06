import React from "react"

type PropsType = {
  entry: any
  widgetFor: any
}

const AboutPagePreview: React.FC<PropsType> = ({ entry, widgetFor }) => {
  console.log("1. entry", entry)
  console.log("2. widgetFor", widgetFor)
  return (
    <div>
      <h1>About CMS</h1>
    </div>
  )
}

export default AboutPagePreview
