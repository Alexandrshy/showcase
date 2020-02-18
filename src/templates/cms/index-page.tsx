import React from "react"

type PropsType = {
  title: string
  content: Node
}

export const IndexPageTemplate: React.FC<PropsType> = ({ title, content }) => (
  <section>
    <div>
      <h2>{title}</h2>
      {content}
    </div>
  </section>
)
