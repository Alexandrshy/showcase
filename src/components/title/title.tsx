import React from "react"

import style from "./title.module.css"

type PropsType = {
  title?: string
}

export const Title: React.FC<PropsType> = ({ title }) => (
  <>{title && <h1 className={style.title}>{title}</h1>}</>
)
