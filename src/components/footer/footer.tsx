import React from "react"

import { Social } from "../social/social"
import { Wrapper } from "../../components/wrapper/wrapper"
import useSiteMetadata from "../../hooks/use-site-metadata"

import style from "./footer.module.css"

export const Footer: React.FC = () => {
  const { author } = useSiteMetadata()

  return (
    <footer className={style.footer}>
      <Wrapper>
        <div className={style.box}>
          <div className={style.author}>
            <h5 className={style.title}>
              {`${author.name} ${author.surname}`}
            </h5>
            <p className={style.text}>
              Frontend developer at{" "}
              <a
                href={`${author.workPlace.url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {author.workPlace.name}
              </a>
            </p>
          </div>
          <div className={style.social}>
            <h5 className={style.title}>Contact me on:</h5>
            <Social />
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}
