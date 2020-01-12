import React from "react"

import style from "./about-page.module.css"

type PropsType = {
  title: string
  content: Node
}

export const AboutPageTemplate: React.FC<PropsType> = ({ title, content }) => (
  <section className={style.section}>
    <div className={style.wrapper}>
      <h2 className={style.title}>{title}</h2>
      {content}
    </div>
  </section>
)
