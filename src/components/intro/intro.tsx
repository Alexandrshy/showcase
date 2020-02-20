import React from "react"

import style from "./intro.module.css"

type PropsType = {
  title?: string
  subtitle?: string
}

export const Intro: React.FC<PropsType> = ({ title, subtitle }) => (
  <div className={style.info}>
    {title && <h2 className={style.title}>{title}</h2>}
    {subtitle && (
      <div
        className={style.subtitle}
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
    )}
  </div>
)
