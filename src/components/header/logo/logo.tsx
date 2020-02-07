import React from "react"
import { Link } from "gatsby"

import style from "./logo.module.css"
import useSiteMetadata from "../../../hooks/use-site-metadata"

export const Logo = () => {
  const { name } = useSiteMetadata()

  return (
    <Link to="/" className={style.logo}>
      {name}
    </Link>
  )
}
