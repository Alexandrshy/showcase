import React from "react"
import { Link } from "gatsby"

import style from "./tags.module.css"

export type PropType = {
  tags: Array<string>
}

export const Tags: React.FC<PropType> = ({ tags }) => (
  <ul className={style.tagList}>
    {tags.map(item => (
      <li key={item} className={style.tagItem}>
        <Link className={style.link} to={`tags/${item}`}>
          #{item}
        </Link>
      </li>
    ))}
  </ul>
)
