import React from "react"

import { formatDate } from "../../utils/format-date"

import style from "./time.module.css"

type PropsType = {
  date: string
}

export const Time: React.FC<PropsType> = ({ date }) => (
  <time title="Last Updated Date" className={style.date}>
    {formatDate(new Date(date))}
  </time>
)
