import React from "react"

import style from "./icon.module.css"

type PropsType = {
  name: string
  icon: {
    viewBox?: string
    path?: string
  }
}

export const Icon: React.FC<PropsType> = ({ name, icon }) => (
  <svg className={style.icon} viewBox={icon.viewBox} aria-hidden="true">
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
)
