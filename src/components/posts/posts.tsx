import React from "react"

import { Post, PropType } from "./post/post"
import { Title } from "../title/title"

import style from "./posts.module.css"

type PropsType = {
  title?: string
  list: Array<{
    node: {
      id: string
      fields: {
        slug: string
      }
      frontmatter: PropType
    }
  }>
}

export const Posts: React.FC<PropsType> = ({ list, title }) => (
  <article>
    {title && <Title title={title} inline={true} />}
    <ul className={style.list}>
      {list.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter: { title, date, tags },
          },
        }) => (
          <Post key={id} title={title} date={date} tags={tags} slug={slug} />
        )
      )}
    </ul>
  </article>
)
