import React from "react"
import { withPrefix } from "gatsby"

import { Social } from "../social/social"

import style from "./intro.module.css"

import useSiteMetadata from "../../hooks/use-site-metadata"

export const Intro: React.FC = () => {
  const {
    author: { photo },
  } = useSiteMetadata()

  return (
    <div className={style.wrapper}>
      <div className={style.imageWrapper}>
        <div className={style.box}>
          <img
            className={style.image}
            src={withPrefix(photo)}
            alt="Author photo"
          />
        </div>
      </div>
      <div className={style.info}>
        <h1 className={style.title}>
          Hi! I’m <b>Alex</b>
        </h1>
        <p className={style.subtitle}>
          Breakfast procuring no end happiness allowance assurance frank. Met
          simplicity nor difficulty unreserved who. Entreaties mr conviction
          dissimilar me astonished estimating cultivated.
        </p>
        <Social />
      </div>
    </div>
  )
}
