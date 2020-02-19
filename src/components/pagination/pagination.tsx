import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"

import style from "./pagination.module.css"

type PropsType = {
  prevPagePath: string
  nextPagePath: string
  hasPrevPage: boolean
  hasNextPage: boolean
}

export const Pagination: React.FC<PropsType> = ({
  prevPagePath,
  nextPagePath,
  hasPrevPage,
  hasNextPage,
}) => {
  if (!hasPrevPage && !hasNextPage) return null

  return (
    <nav className={style.wrapper}>
      <Link
        rel="prev"
        to={prevPagePath}
        className={classNames(style.link, style.prev, {
          [style.inactive]: !hasPrevPage,
        })}
      >
        Prev
      </Link>
      <Link
        rel="next"
        to={nextPagePath}
        className={classNames(style.link, style.next, {
          [style.inactive]: !hasNextPage,
        })}
      >
        Next
      </Link>
    </nav>
  )
}
