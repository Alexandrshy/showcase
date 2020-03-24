import React from "react"

import style from "./title.module.css"

export const Title: React.FC = ({ children }) => (
  <h3 className={style.title}>{children}</h3>
)
