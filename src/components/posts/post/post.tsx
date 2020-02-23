import React from "react"
import { Link } from "gatsby"

import { Tags } from "../../tags/tags"
import { Time } from "../../time/time"

import style from "./post.module.css"

export type PropType = {
  title: string | null
  date: string
  tags: Array<string>
  slug: string
}

export const Post: React.FC<PropType> = ({ title, date, tags, slug }) => (
  <li className={style.item}>
    <Time date={date} />
    <h3 className={style.title}>
      <Link to={slug} className={style.link}>
        {title}
      </Link>
    </h3>
    <Tags tags={tags} />
  </li>
)
