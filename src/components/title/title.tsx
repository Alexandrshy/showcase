import React from "react"
import classNames from "classnames"

import style from "./title.module.css"

type PropsType = {
  title?: string
  inline?: boolean
}

export const Title: React.FC<PropsType> = ({ title, inline }) => (
  <>
    {title && (
      <h1 className={classNames(style.title, { [style.inline]: inline })}>
        {title}
      </h1>
    )}
  </>
)
