import React from "react"
import classNames from "classnames"

import { Title } from "../title/title"

import style from "./education.module.css"

export const Education: React.FC = () => (
  <>
    <Title>Education</Title>
    <a
      href=""
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(style.name, style.link)}
    >
      Togliatti State University
    </a>
    <p className={style.specialization}>Specialist, Applied Informatics</p>
    <p className={style.time}>
      <time>2012</time> &mdash; <time>2016</time>
    </p>
  </>
)
