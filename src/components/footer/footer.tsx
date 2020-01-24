import React from "react"

import { Social } from "../social/social"

import style from "./footer.module.css"

export const Footer: React.FC = () => (
  <footer className={style.footer}>
    <h4 className={style.title}>
      Would you like to contact me for any question?
    </h4>
    <Social isCenter={true} />
  </footer>
)
