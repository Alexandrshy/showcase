import React, { ReactNode } from "react"
import classNames from "classnames"

import style from "./wrapper.module.css"

type PropsType = {
  width?: "normal" | "increased"
  className?: string
  children: ReactNode
}

export const Wrapper: React.FC<PropsType> = ({
  width,
  className,
  children,
}) => (
  <div className={classNames(style[width], style.wrapper, className)}>
    {children}
  </div>
)

Wrapper.defaultProps = {
  width: "normal",
}
