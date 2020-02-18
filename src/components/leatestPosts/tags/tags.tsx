import React from "react"

import style from "./tags.module.css"

export type PropType = {
  tags: Array<string>
}

export const Tags: React.FC<PropType> = ({ tags }) => (
  <ul className={style.tagList}>
    {tags.map(item => (
      <li key={item} className={style.tagItem}>
        #{item}
      </li>
    ))}
  </ul>
)
