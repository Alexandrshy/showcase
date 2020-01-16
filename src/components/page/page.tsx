import React, { ReactNode } from "react"

import style from "./page.module.css"

type PropsType = {
  title?: string
  children: ReactNode
}

export const Page: React.FC<PropsType> = ({ title, children }) => {
  return (
    <div className={style.wrapper}>
      {title && <h1 className={style.title}>{title}</h1>}
      <div className={style.body}>{children}</div>
    </div>
  )
}
