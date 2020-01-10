import React from "react"

type PropsType = {
  title: string
  content: Node
}

export const AboutPageTemplate: React.FC<PropsType> = ({ title, content }) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
            {content}
          </div>
        </div>
      </div>
    </div>
  </section>
)
