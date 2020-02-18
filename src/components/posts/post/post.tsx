import React from "react"
import { Link } from "gatsby"

import { Tags } from "../../leatestPosts/tags/tags"
import { formatDate } from "../../../utils/format-date"

import style from "./post.module.css"

export type PropType = {
  title: string | null
  date: string
  tags: Array<string>
  slug: string
}

export const Post: React.FC<PropType> = ({ title, date, tags, slug }) => (
  <li className={style.item}>
    <p className={style.date}>{formatDate(new Date(date))}</p>
    <h3 className={style.title}>
      <Link to={slug} className={style.link}>
        {title}
      </Link>
    </h3>
    <Tags tags={tags} />
  </li>
)
