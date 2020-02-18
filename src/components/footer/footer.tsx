import React from "react"

import { Social } from "../social/social"
import { Wrapper } from "../../components/wrapper/wrapper"

import style from "./footer.module.css"

export const Footer: React.FC = () => (
  <footer className={style.footer}>
    <Wrapper>
      <div className={style.box}>
        <div className={style.author}>
          <h5 className={style.title}>Alex Shulaev</h5>
          <p className={style.text}>
            Frontend developer at{" "}
            <a
              href="https://www.glassesusa.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GlassesUSA.com
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
