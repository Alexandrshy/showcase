import React, { ReactNode } from "react"
import classNames from "classnames"

import style from "./wrapper.module.css"

type PropsType = {
  width?: "normal" | "increased"
  children: ReactNode
}

export const Wrapper: React.FC<PropsType> = ({ width, children }) => (
  <div className={classNames(style[width], style.wrapper)}>{children}</div>
)

Wrapper.defaultProps = {
  width: "normal",
}
